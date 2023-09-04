/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {styles} from '../theme';
import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  ViewToken,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {Freeze} from 'react-freeze';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {useSharedValue} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const HomeTrending = React.lazy(
  () => import('../components/Home/HomeTrending'),
);
const HomeBodyComponent = React.lazy(
  () => import('../components/Home/HomeBodyComponent'),
);

const HomeScreen = () => {
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const data = [
    {key: '1', value: 2, title: 'UpComing'},
    {key: '2', value: 2, title: 'Ophim TopRated', ophim: 'Ophim'},
    {key: '3', value: 3, title: 'Now Playing'},
    {key: '4', value: 414, title: 'Popular'},
    {key: '55', value: 414, title: 'Watching'},
    {key: '45', title: 'ListCarouselHome', index: 0},
    //
    {key: '5', value: 5, title: 'Ophim Maybe You Love', ophim: 'Ophim'},
    {key: '6', value: 6, title: 'Because You Watched Titanic'},
    {key: '7', value: 77, title: 'Ophim Just For You'},
    {key: '46', title: 'VideoTrailer'},
    {key: '8', value: 88, title: 'Good Film Today'},
    //
    {key: '9', value: 9, title: 'Fantasy Adventure Movies'},
    {key: '10', value: 100, title: 'Ophim New Movies', ophim: 'Ophim'},
    {key: '11', value: 11, title: 'Social Channels'},
    {key: '12', value: 12, title: 'Movies Theater'},
    {key: '13', value: 13, title: 'Disney'},
    {key: '14', value: 14, title: 'Movies For Kids'},
    //
    {key: '48', title: 'ListCarouselHome', index: 1},
    {key: '15', value: 15, title: 'Ophim Movies Award', ophim: 'Ophim'},
    {key: '16', value: 16, title: 'The World Around Us'},
    {key: '17', value: 17, title: 'Special Anime'},
    {key: '18', value: 18, title: 'Hot Film You Might Like'},
    {key: '35', value: 35, title: 'FOX Movies'},
    //
    {key: '38', value: 31, hbo: 'HBO', title: 'HBO TopRated', logo: 'GO'},
    {key: '39', value: 32, hbo: 'HBO', title: 'HBO GO', logo: 'GO'},
    {key: '40', value: 33, hbo: 'HBO', title: 'Asian Drama Max', logo: 'MAX'},
    {key: '41', value: 34, hbo: 'HBO', title: 'American Movies', logo: 'AXN'},
    //
    {
      key: '56',
      logo: 'null',
      symbol: 'espn',
      hideSeeAll: false,
      title: 'Premier League',
    },
    {
      key: '50',
      logo: 'null',
      symbol: 'null',
      hideSeeAll: false,
      title: 'International Friendly',
    },
    {
      key: '51',
      logo: 'null',
      title: 'VBA 2023',
      hideSeeAll: false,
      symbol: 'beinSport',
    },
    {
      key: '52',
      logo: 'bigSize',
      title: 'VLeague',
      hideSeeAll: false,
      symbol: 'skySport',
    },
    {
      key: '53',
      logo: 'null',
      symbol: 'espn',
      hideSeeAll: false,
      title: 'Bundesliga',
    },
    {
      key: '54',
      logo: 'bigSize',
      symbol: 'null',
      hideSeeAll: false,
      title: 'TV Channels',
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
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Animatable.Text animation="zoomInUp" duration={2000} delay={700}>
                <Text className="text-[32px] font-Primary color-greenColor">
                  ---VIE_
                </Text>

                <Text className="text-[32px] font-Primary color-redColor">
                  ON---
                </Text>
              </Animatable.Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Search', {name: 'Movies, HBO Shows...'})
              }>
              <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/*  */}
        {loading ? (
          <View className="mt-[250px]">
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <FlashList
            data={data}
            estimatedItemSize={15}
            onEndReachedThreshold={0.5}
            ListHeaderComponent={<HomeTrending />}
            viewabilityConfigCallbackPairs={
              viewabilityConfigCallbackPairs.current
            }
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <HomeBodyComponent item={item} viewableItems={viewableItems} />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </Freeze>
  );
};

export default HomeScreen;
