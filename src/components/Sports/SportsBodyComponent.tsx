import {
  VBA2023,
  VLeague,
  SeaGames,
  TVChannels,
  SerieA2023,
  Bundesliga,
  RolandGarros,
  SportsTVShows,
  premierleague,
  UpcomingSports,
  InternationalFriendly,
} from '@constants';

import React, {memo, Suspense} from 'react';
//
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {ViewToken} from 'react-native';

const HomeListTest = React.lazy(() => import('../Home/HomeListTest'));
const SportList = React.lazy(() => import('./SportList'));
const SportListOphim = React.lazy(() => import('./SportListOphim'));
const ListCarouselHome = React.lazy(() => import('../Home/ListCarouselHome'));
const HBOListOphim = React.lazy(() => import('../HBO/HBOListOphim'));

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    key: any;
    hbo: string;
    data: string;
    logo: string;
    ophim: string;
    value: number;
    title: string;
    index: number;
    symbol: string;
    hideSeeAll: boolean;
  };
};
const Movies = ({item}) => {
  return (
    <Suspense>
      <HomeListTest title={item.title} hideSeeAll={false} idApi={item?.value} />
    </Suspense>
  );
};
const SportOphim = ({item}) => {
  return (
    <Suspense>
      <SportListOphim
        title={item?.title}
        hideSeeAll={false}
        page={item?.value}
        logo={item?.logo}
      />
    </Suspense>
  );
};
const SportsBodyComponent: React.FC<ListItemProps> = memo(
  ({item, viewableItems}) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter(item => item.isViewable)
          .find(viewableItem => viewableItem.item.key === item.key),
      );
      return {
        opacity: withTiming(isVisible ? 1 : 0),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 1),
          },
        ],
      };
    }, []);
    const data =
      item?.title === 'VBA 2023'
        ? VBA2023
        : item?.title === 'VLeague'
        ? VLeague
        : item?.title === 'Bundesliga'
        ? Bundesliga
        : item?.title === 'TVChannels'
        ? TVChannels
        : item?.title === 'RolandGarros 2023'
        ? RolandGarros
        : item?.title === 'Upcoming Sports'
        ? UpcomingSports
        : item?.title === 'SeaGames 32'
        ? SeaGames
        : item?.title === 'SerieA 2023'
        ? SerieA2023
        : item?.title === 'Sports TV Shows'
        ? SportsTVShows
        : item?.title === 'Premier League'
        ? premierleague
        : InternationalFriendly;
    return (
      <>
        <Animated.View style={[rStyle]}>
          {item?.title === 'ListCarouselHome' ? (
            <ListCarouselHome index={item.index} />
          ) : item?.hbo ? (
            <HBOListOphim item={item} />
          ) : item?.hideSeeAll === false ? (
            <SportList
              logo={item?.logo}
              title={item?.title}
              data={data}
              symbol={item?.symbol}
              hideSeeAll={item?.hideSeeAll}
            />
          ) : item?.ophim ? (
            <SportOphim item={item} />
          ) : (
            <Movies item={item} />
          )}
        </Animated.View>
      </>
    );
  },
);
export default SportsBodyComponent;
