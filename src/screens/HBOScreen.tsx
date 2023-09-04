/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  ViewToken,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {styles} from '../theme';
import {Freeze} from 'react-freeze';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
import React, {useRef, useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {useSharedValue} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MagnifyingGlassIcon, FilmIcon} from 'react-native-heroicons/outline';
const HBOTrending = React.lazy(() => import('../components/HBO/HBOTrending'));
const HBOBodyComponent = React.lazy(
  () => import('../components/HBO/HBOBodyComponent'),
);
const HBOScreen = () => {
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };
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

  const viewableItems = useSharedValue<ViewToken[]>([]);
  const onViewableItemsChanged = ({viewableItems: vItems}) => {
    viewableItems.value = vItems;
  };

  const data = [
    {key: '1', value: 101, title: 'HBO TopRated', logo: 'GO'},
    {
      key: '2',
      value: 102,
      logo: 'GO',
      ophim: 'Ophim',
      title: 'Ophim HBO UpComing',
    },
    {key: '3', value: 103, title: 'HBO Now Playing', logo: 'GO'},
    {key: '4', value: 104, title: 'HBO 24H', logo: 'GO'},
    {
      key: '5',
      value: 105,
      logo: 'GO',
      ophim: 'Ophim',
      title: 'Ophim Movies For Kids',
    },
    {key: '6', value: 106, title: 'Fox Movies', logo: 'FoxMovies'},
    {key: '48', title: 'ListCarouselHBO', index: 2},
    //
    {key: '7', value: 107, title: 'HITS', logo: 'GO'},
    {key: '8', value: 108, title: 'Cinema Worlds', logo: 'GO'},
    {key: '9', value: 109, title: 'Fantasy Adventure Movies', logo: 'GO'},
    {
      key: '10',
      value: 110,
      logo: 'GO',
      ophim: 'Ophim',
      title: 'Ophim Fast & Furious 9',
    },
    {key: '51', value: 180, title: 'HBO Discover', logo: 'GO'},
    {key: '11', value: 111, title: 'Game Of Thrones', logo: 'GO'},
    {key: '12', value: 112, title: 'Harry Potter', logo: 'GO'},
    {key: '13', value: 113, title: 'Anecdotes About Bloodsuckers', logo: 'GO'},
    {key: '14', value: 114, title: 'Movies For Kids', logo: 'GO'},
    // AXN Ophim
    {key: '15', value: 115, title: 'KBS Movies', logo: 'KBS'},
    {key: '16', value: 116, title: 'Ophim AXN HD', logo: 'GO', ophim: 'Ophim'},
    {key: '17', value: 117, title: 'CN HD', logo: 'GO'},
    {key: '18', value: 118, title: 'Psychological Cinema', logo: 'GO'},
    // HBO Discover
    {key: '49', title: 'ListCarouselHBO', index: 1},
    {key: '19', value: 109, title: 'Children And Families', logo: 'FoxMovies'},
    {key: '20', value: 120, title: 'Social Channels', logo: 'MAX'},
    // title="Max Ophim"
    {key: '22', value: 129, title: 'HBO GO Series', logo: 'GO'},
    {key: '23', value: 123, title: 'HBO GO Cinema', logo: 'GO'},
    {key: '24', value: 124, title: 'The Flash 2023', logo: 'GO'},
    // title="Max Ophim"
    {key: '25', value: 125, title: 'The Green Arrow 2023', logo: 'GO'},
    {key: '26', value: 126, title: 'Fierce Battlefield', logo: 'MAX'},
    // title="Max Ophim"
    {key: '28', value: 128, title: 'Crime Hunting', logo: 'GO'},
    {key: '29', value: 129, title: 'Action Movies', logo: 'GO'},
    {key: '50', title: 'ListCarouselHBO', index: 2},
    // title="Max Ophim"
    {
      key: '31',
      value: 132,
      logo: 'GO',
      ophim: 'Ophim',
      title: 'Ophim Hollywood Blockbuster',
    },
    {key: '32', value: 132, title: 'Super DC', logo: 'GO'},
    {key: '33', value: 133, title: 'Fall In Love', logo: 'MAX'},
    {key: '34', value: 134, title: 'Thailand Martial', logo: 'AXN'},
    {key: '35', value: 135, title: 'International Programs', logo: 'FoxMovies'},
    {key: '36', value: 136, title: 'Asian Dramas', logo: 'KBS'},
    //
    {key: '37', value: 137, title: 'American Cinema', logo: 'GO'},
    {key: '38', value: 138, title: 'Japan Cinema', logo: 'GO'},
    {key: '39', value: 139, title: 'Action Psychology', logo: 'GO'},
    {key: '40', value: 140, title: 'Movie Action Adventure', logo: 'GO'},
    // // title="Max Ophim"
  ];
  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  return (
    <Freeze freeze={false}>
      <View className="flex-1 w-screen bg-neutral-900 position: relative">
        <SafeAreaView className="{ios} ? -mb-2 : -mb-3 position: absolute pb-[-35px] pt-[-14px] z-10">
          <View className="flex-row w-screen justify-between px-[20px] items-center ">
            <FilmIcon size={30} strokeWidth={2} color="white" />
            <View className="flex-row items-center">
              <Animatable.Text animation="zoomInUp" duration={1300} delay={500}>
                <Text className="text-[32px] font-Primary color-yellowColor">
                  ---HBO_
                </Text>
                <Text className="text-[32px] font-Primary color-darkColor">
                  GO---
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
            // getItem={getItem}
            estimatedItemSize={20}
            initialNumToRender={1}
            maxToRenderPerBatch={2}
            updateCellsBatchingPeriod={20}
            ListHeaderComponent={<HBOTrending />}
            viewabilityConfigCallbackPairs={
              viewabilityConfigCallbackPairs.current
            }
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <HBOBodyComponent item={item} viewableItems={viewableItems} />
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

export default HBOScreen;
