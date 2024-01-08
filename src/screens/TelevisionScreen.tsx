/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

const TvBodyComponent = React.lazy(
  () => import('../components/TV/TvBodyComponent'),
);
import React, {useRef} from 'react';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {useSharedValue} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, RefreshControl, ViewToken} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MagnifyingGlassIcon, TvIcon} from 'react-native-heroicons/outline';
const TVTrending = React.lazy(() => import('../components/TV/TVTrending'));

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

    {key: '3', title: 'ListCarouselHome', index: 3},

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

    {key: '7', value: 247, title: 'VTV Cab ON'},

    {key: '10', value: 110, title: 'Ophim Barca TV', ophim: 'Ophim'},

    {key: '22', title: 'ListCarouselHome', index: 0},

    {key: '12', value: 250, title: 'CoCa TV '},

    {key: '13', value: 251, title: 'CBS TV'},

    {key: '22', value: 215, title: 'THVL'},

    {key: '23', value: 216, title: 'THGL'},

    {key: '24', value: 217, title: 'TTV'},

    {key: '25', value: 218, title: 'ESPN'},

    {key: '26', value: 219, title: 'FOX TV'},

    {key: '27', value: 220, title: 'AXN TV'},

    {key: '28', value: 221, title: 'SCTV'},

    {key: '29', value: 222, title: 'KBS TV'},

    {key: '30', value: 223, title: 'ANTV'},

    {key: '31', value: 224, title: 'QH TV'},

    {key: '33', title: 'ListCarouselHome', index: 2},

    {key: '32', value: 225, title: 'CN TV'},

    {key: '33', value: 226, title: 'CineMax TV'},
  ];

  // const data = new Array(50).fill(0).map((_, index) => ({id: index}));

  const viewableItems = useSharedValue<ViewToken[]>([]);
  const onViewableItemsChanged = ({viewableItems: vItems}) => {
    viewableItems.value = vItems;
  };

  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  return (
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
      {/*  */}
      <FlashList
        data={data}
        estimatedItemSize={20}
        maxToRenderPerBatch={2}
        ListHeaderComponent={<TVTrending />}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TvBodyComponent item={item} viewableItems={viewableItems} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </View>
  );
};

export default TelevisionScreen;
