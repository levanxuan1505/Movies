/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {styles} from '../theme';
import React, {useRef} from 'react';
const TvBodyComponent = React.lazy(
  () => import('../components/TV/TvBodyComponent'),
);
import {Freeze} from 'react-freeze';
import {TVTrending} from '@components';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {useSharedValue} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MagnifyingGlassIcon, TvIcon} from 'react-native-heroicons/outline';
import {View, Text, RefreshControl, ViewToken} from 'react-native';

const TelevisionScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const data = [
    {
      key: '1',
      logo: 'bigSize',
      symbol: 'null',
      hideSeeAll: false,
      title: 'VTV',
    },

    {
      key: '21',
      logo: 'bigSize',
      symbol: 'null',
      hideSeeAll: false,
      title: 'Kplus',
    },

    {
      key: '2',
      logo: 'null',
      symbol: 'null',
      hideSeeAll: false,
      title: 'International Friendly',
    },

    {key: '3', title: 'ListCarouselHome', index: 3},

    {
      key: '4',
      logo: 'null',
      symbol: 'beinSport',
      hideSeeAll: false,
      title: 'RolandGarros 2023',
    },
    {
      key: '19',
      logo: 'bigSize',
      symbol: 'null',
      hideSeeAll: false,
      title: 'Sports TV Shows',
    },

    {
      key: '16',
      logo: 'bigSize',
      symbol: 'null',
      hideSeeAll: false,
      title: 'TVChannels',
    },

    {key: '20', value: 244, title: 'Ophim ESPN TV', ophim: 'Ophim'},

    {key: '5', value: 245, title: 'HTV HD'},

    {key: '6', value: 246, title: 'SCTV SD'},
    // Discover
    {key: '22', title: 'ListCarouselHome', index: 0},

    {key: '7', value: 247, title: 'VTV Cab ON'},
    {
      key: '8',
      logo: 'null',
      title: 'VBA 2023',
      hideSeeAll: false,
      symbol: 'beinSport',
    },

    {key: '10', value: 110, title: 'Ophim Barca TV', ophim: 'Ophim'},
    {
      key: '11',
      title: 'VLeague',
      logo: 'bigSize',
      symbol: 'skySport',
      hideSeeAll: false,
    },

    {key: '12', value: 250, title: 'CoCa TV '},

    {key: '13', value: 251, title: 'CBS TV'},

    {key: '33', title: 'ListCarouselHome', index: 2},

    {
      key: '14',
      logo: 'null',
      symbol: 'espn',
      hideSeeAll: false,
      title: 'Bundesliga',
    },

    {key: '15', value: 115, title: 'THVL'},

    {
      key: '17',
      logo: 'null',
      symbol: 'skySport',
      hideSeeAll: false,
      title: 'SeaGames 32',
    },

    {
      key: '18',
      logo: 'bigSize',
      title: 'SerieA 2023',
      hideSeeAll: false,
      symbol: 'beinSport',
    },
  ];

  // const data = new Array(50).fill(0).map((_, index) => ({id: index}));

  const viewableItems = useSharedValue<ViewToken[]>([]);
  const onViewableItemsChanged = ({viewableItems: vItems}) => {
    viewableItems.value = vItems;
  };

  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  return (
    <Freeze freeze={false}>
      <View className="flex-1 w-screen bg-neutral-900 position: relative">
        <SafeAreaView className="{ios} ? -mb-2 : -mb-3 position: absolute pb-[-35px] pt-[-14px] z-10">
          <View className="flex-row w-screen justify-between px-[20px] items-center ">
            <TvIcon size={30} strokeWidth={2} color="white" />
            <View className="flex-row items-center">
              <Text className="text-[32px] font-Primary color-greenColor">
                ---T
              </Text>
              <Text className="text-[32px] font-Primary color-yellowColor">
                V---
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Search', {name: 'TV, Shows...'})
              }>
              <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <FlashList
          data={data}
          estimatedItemSize={20}
          maxToRenderPerBatch={2}
          nestedScrollEnabled={true}
          updateCellsBatchingPeriod={20}
          removeClippedSubviews={true}
          keyExtractor={item => item.key}
          ListHeaderComponent={<TVTrending />}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TvBodyComponent item={item} viewableItems={viewableItems} />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </Freeze>
  );
};

export default TelevisionScreen;
