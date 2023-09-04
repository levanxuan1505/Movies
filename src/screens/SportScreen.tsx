/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {styles} from '../theme';
import React, {useRef} from 'react';
import {FlashList} from '@shopify/flash-list';
const SportsBodyComponent = React.lazy(
  () => import('../components/Sports/SportsBodyComponent'),
);
import {Freeze} from 'react-freeze';
import {SportTrending} from '@components';
import {useSharedValue} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MagnifyingGlassIcon, BoltIcon} from 'react-native-heroicons/outline';
import {View, Text, ViewToken, RefreshControl} from 'react-native';

const SportScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const navigation = useNavigation();

  const data = [
    {
      key: '1',
      logo: 'bigSize',
      symbol: 'null',
      hideSeeAll: false,
      title: 'Upcoming Sports',
    },
    {
      key: '19',
      logo: 'bigSize',
      symbol: 'null',
      hideSeeAll: false,
      title: 'Sports TV Shows',
    },
    {
      key: '56',
      logo: 'null',
      symbol: 'espn',
      hideSeeAll: false,
      title: 'Premier League',
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

    {key: '20', value: 44, title: 'Ophim ESPN Sports', ophim: 'Ophim'},
    {key: '5', value: 105, title: 'Sky Sport'},
    {key: '6', value: 106, title: 'BeIn Sports'},
    // Discover
    {key: '7', value: 107, title: 'Sony Sports'},
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

    {key: '12', value: 112, title: 'CoCa TV Sport'},

    {key: '13', value: 113, title: 'CBS Sport'},

    {
      key: '14',
      logo: 'null',
      symbol: 'espn',
      hideSeeAll: false,
      title: 'Bundesliga',
    },

    {key: '15', value: 114, title: 'GO Sports'},

    {
      key: '16',
      logo: 'bigSize',
      symbol: 'null',
      hideSeeAll: false,
      title: 'TVChannels',
    },
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
            <BoltIcon size={30} strokeWidth={2} color="white" />
            <View className="flex-row items-center">
              <Text className="text-[32px] font-Primary color-greenColor">
                ---SPO
              </Text>
              <Text className="text-[32px] font-Primary color-blueColor">
                RTS---
              </Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Search', {name: 'Sports...'})
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
          getItemCount={data => data.length}
          ListHeaderComponent={<SportTrending name="Trending" />}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <SportsBodyComponent item={item} viewableItems={viewableItems} />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </Freeze>
  );
};

export default SportScreen;
