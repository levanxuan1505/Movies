/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable curly */
import {ViewToken} from 'react-native';
import ListCarouselHBO from './ListCarouselHBO';
import React, {memo, Suspense, lazy} from 'react';
const HBOListTest = lazy(() => import('./HBOListTest'));
const HBOListOphim = lazy(() => import('./HBOListOphim'));
const HBODiscover = lazy(() => import('./HBODiscover'));
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const HBOMovies = ({item}) => {
  return (
    <HBOListOphim
      title={item.title}
      hideSeeAll={false}
      page={item?.value}
      logo={item.logo}
    />
  );
};
const HBOMovies1 = ({item}) => {
  return (
    <Suspense>
      <HBOListTest
        title={item.title}
        hideSeeAll={false}
        idApi={item?.value}
        logo={item.logo}
      />
    </Suspense>
  );
};

const HBOFilmDiscover = ({item}) => {
  return (
    <Suspense>
      <HBODiscover
        title={item.title}
        hideSeeAll={false}
        idApi={item?.value}
        logo={item.logo}
      />
    </Suspense>
  );
};
type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    key: any;
    value: number;
    title: string;
    index: number;
    ophim: string;
  };
};
const HBOBodyComponent: React.FC<ListItemProps> = memo(
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
    return (
      <>
        <Animated.View style={[rStyle]}>
          {item.title === 'ListCarouselHBO' ? (
            <ListCarouselHBO index={item.index} />
          ) : item.ophim === 'Ophim' ? (
            <HBOMovies item={item} />
          ) : item.title === 'HBO Discover' ? (
            <HBOFilmDiscover item={item} />
          ) : (
            <HBOMovies1 item={item} />
          )}
        </Animated.View>
      </>
    );
  },
);
export default HBOBodyComponent;
