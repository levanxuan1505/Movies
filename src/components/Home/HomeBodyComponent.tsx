/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */

import {
  VBA2023,
  VLeague,
  Bundesliga,
  TVChannels,
  RolandGarros,
  premierleague,
  InternationalFriendly,
} from '@constants';
import {ViewToken} from 'react-native';
import WatchingList from '../WatchingList';
import VideoTrailer from '../VideoTrailer';
import SportList from '../Sports/SportList';
import ListCarouselHome from './ListCarouselHome';
import React, {memo, Suspense, lazy} from 'react';
const HomeListTest = lazy(() => import('./HomeListTest'));
const HomeListOphim = lazy(() => import('./HomeListOphim'));
const HBOListOphim = lazy(() => import('../HBO/HBOListOphim'));
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
const Movies = ({item}) => {
  return (
    <HomeListTest
      title={item.title}
      logo={null}
      hideSeeAll={false}
      idApi={item?.value}
    />
  );
};

const HomeListMovies = ({item}) => {
  return (
    <Suspense>
      <HomeListOphim
        title={item?.title}
        hideSeeAll={false}
        page={item?.value}
        logo={item?.logo}
      />
    </Suspense>
  );
};

const HBOListMovies = ({item}) => {
  return (
    <Suspense>
      <HBOListOphim
        title={item?.title}
        hideSeeAll={false}
        page={item?.value}
        logo={item?.logo}
      />
    </Suspense>
  );
};
type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    key: any;
    ophim: string;
    hbo: string;
    value: number;
    title: string;
    index: number;
    data: string;
    logo: string;
    symbol: string;
    hideSeeAll: boolean;
  };
};
const HomeBodyComponent: React.FC<ListItemProps> = memo(
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
        : item?.title === 'TV Channels'
        ? TVChannels
        : item?.title === 'RolandGarros'
        ? RolandGarros
        : item?.title === 'Premier League'
        ? premierleague
        : InternationalFriendly;

    return (
      <>
        <Animated.View style={[rStyle]}>
          {item?.title === 'ListCarouselHome' ? (
            <ListCarouselHome index={item.index} />
          ) : item?.title === 'VideoTrailer' ? (
            <VideoTrailer />
          ) : item?.hbo ? (
            <HBOListMovies item={item} />
          ) : item?.hideSeeAll === false ? (
            <SportList
              logo={item?.logo}
              title={item?.title}
              data={data}
              symbol={item?.symbol}
              hideSeeAll={item?.hideSeeAll}
            />
          ) : item?.ophim ? (
            <HomeListMovies item={item} />
          ) : item?.title === 'Watching' ? (
            <WatchingList title="Watching" hideSeeAll={false} />
          ) : (
            <Movies item={item} />
          )}
        </Animated.View>
      </>
    );
  },
);
export default HomeBodyComponent;
