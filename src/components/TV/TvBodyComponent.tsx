/* eslint-disable curly */
import {
  VTV,
  Kplus,
  VBA2023,
  VLeague,
  SerieA2023,
  TVChannels,
  SeaGames,
  Bundesliga,
  RolandGarros,
  SportsTVShows,
  UpcomingSports,
  InternationalFriendly,
} from '@constants';
import React, {memo, Suspense} from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {ViewToken} from 'react-native';

const TVList = React.lazy(() => import('./TVList'));
const TVListOphim = React.lazy(() => import('./TVListOphim'));
const SportList = React.lazy(() => import('../Sports/SportList'));
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
const TV = ({item}) => {
  return (
    <Suspense>
      <TVList title={item.title} hideSeeAll={false} idApi={item?.value} />
    </Suspense>
  );
};
const TVOphim = ({item}) => {
  return (
    <Suspense>
      <TVListOphim
        title={item?.title}
        hideSeeAll={false}
        page={item?.value}
        logo={item?.logo}
      />
    </Suspense>
  );
};
const TvBodyComponent: React.FC<ListItemProps> = memo(
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
      item?.title === 'VTV'
        ? VTV
        : item?.title === 'Kplus'
        ? Kplus
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
        : item?.title === 'VBA 2023'
        ? VBA2023
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
            <TVOphim item={item} />
          ) : (
            <TV item={item} />
          )}
        </Animated.View>
      </>
    );
  },
);
export default TvBodyComponent;
