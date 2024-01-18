/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {styles, theme} from '../theme';
import {VideoComponent} from '@components';
import {RootStackParams} from '@navigators';
var {width, height} = Dimensions.get('window');
import {View, Text, Dimensions} from 'react-native';
import {HeartIcon} from 'react-native-heroicons/solid';
import {ScrollView} from 'react-native-virtualized-view';
import LinearGradient from 'react-native-linear-gradient';
import {fetchDetailsMoviesOphim} from '../Api/MoviesDb';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RouteProp, NavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';
import {setData} from '../redux/store';
import Modal from 'react-native-modal';
import {AuthContext} from '../navigators/AuthProvider';

// Assuming RootStackParams is the type for your stack

type MoviesOphimScreen = {
  name: string;
  poster_url: string;
  server_data: string;
  route: RouteProp<RootStackParams, 'MoviesOphim'>;
  navigation: NavigationProp<RootStackParams, 'MoviesOphim'>;
};
const MoviesOphimScreen: React.FC<MoviesOphimScreen> = () => {
  const {params: slug} = useRoute();
  const dispatch = useDispatch();
  const {user}: any = useContext(AuthContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [dataOphim, setMovie] = useState([[]]);
  const getMovieDetails = useCallback(async slug => {
    const data = await fetchDetailsMoviesOphim(slug);
    if (data) {
      setMovie({...data?.movie, ...data?.episodes[0]});
    }
  }, []);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getMovieDetails(slug);
  }, [getMovieDetails, slug]);

  const moviesId = dataOphim?.server_data?.slug;

  const handleScroll = (event: any) => {
    const offsetY = event?.nativeEvent?.contentOffset?.y;
    // Define a threshold for when to trigger the action (e.g., 100 pixels)
    if (offsetY < -52) {
      navigation.goBack();
    }
  };

  const Header = React.memo(() => {
    const {data} = useSelector((state: any) => state.scroll);

    useEffect(() => {
      const fetchDocumentIds = async () => {
        try {
          const collectionRef = firestore()
            .collection('users')
            .doc(user?.email)
            .collection('listMovies');
          const snapshot = await collectionRef.get();

          // Lấy ra mảng các Document ID
          const ids = snapshot.docs.map(doc => doc.id);

          // Đặt giá trị vào state hoặc biến khác tùy vào nhu cầu của bạn
          dispatch(setData(ids));
        } catch (error) {
          console.error('Error fetching document IDs:', error);
        }
      };

      // Gọi hàm fetchDocumentIds để lấy dữ liệu khi component mount
      fetchDocumentIds();
    }, []); // Thêm dependency array rỗng để đảm bảo chỉ gọi hàm fetchDocumentIds một lần
    const wishlist =
      data.filter((item: any) => item === dataOphim._id).length > 0;
    const [isFavorite, setFavorite] = useState(wishlist);
    // Data to be added
    // console.log(isFavorite);
    const handleAddData = async () => {
      if (user) {
        if (!isFavorite) {
          setFavorite(!isFavorite);
          firestore()
            .collection('users')
            .doc(user?.email)
            .collection('listMovies')
            .doc(dataOphim._id)
            .set(dataOphim);
        } else {
          setFavorite(!isFavorite);
          try {
            // Reference to the Firestore collection
            const collectionRef = firestore()
              .collection('users')
              .doc(user?.email)
              .collection('listMovies');

            // Reference to the specific document by its ID
            const documentRef = collectionRef.doc(dataOphim._id);

            // Delete the document
            await documentRef.delete();
          } catch (error) {
            console.error('Error deleting document: ', error);
          }
        }
      } else {
        toggleModal();
      }
    };
    return (
      <>
        <View>
          <Modal
            animationIn={'zoomIn'}
            animationInTiming={500}
            backdropOpacity={0.85}
            animationOut={'zoomOut'}
            animationOutTiming={1000}
            isVisible={isModalVisible}>
            <View className="flex-1 justify-center items-center">
              <Text className="text-[#00AA13] font-bold text-[22px] font-['Shrikhand-Regular']">
                You need Log in to add Wishlists
              </Text>
              <View className="flex-row w-full justify-around py-4 items-center">
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!isModalVisible);
                    navigation.navigate('LogIn');
                  }}>
                  <Text className="text-[#00AA13] font-bold text-[32px] font-['Shrikhand-Regular']">
                    Log in
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!isModalVisible);
                  }}>
                  <Text className="text-[#F53920] font-bold text-[32px] font-['Shrikhand-Regular']">
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <SafeAreaView className="absolute z-20 w-full flex-row justify-between item-center px-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="rounded-xl p-1"
              style={styles.background}>
              <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleAddData()}>
              <HeartIcon
                size="40"
                color={isFavorite ? theme.background : 'white'}
              />
            </TouchableOpacity>
          </SafeAreaView>
          <View>
            <FastImage
              defaultSource={require('../assets/images/Progress.png')}
              source={{
                uri: dataOphim?.poster_url || dataOphim?.thumb_url,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={{width, height: height * 0.55}}
            />
            <LinearGradient
              colors={[
                'transparent',
                'rgba(23, 23, 23, 0.6)',
                'rgba(23, 23, 23, 1)',
              ]}
              className="absolute bottom-0"
              style={{width, height: height * 0.4}}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
            />
          </View>
        </View>

        <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
          <Text className="text-white text-center text-3xl px-1 font-bold tracking-wider">
            {dataOphim.name}
          </Text>
          {dataOphim?._id ? (
            <Text className="text-neutral-400 font-semibold text-2xl  text-center">
              {dataOphim?.type.charAt(0).toUpperCase() +
                dataOphim?.type.slice(1).toLowerCase() +
                ' '}
              •
              {' ' +
                dataOphim?.status.charAt(0).toUpperCase() +
                dataOphim?.status.slice(1).toLowerCase() +
                ' '}
              •{' ' + dataOphim?.year}
            </Text>
          ) : null}
          <View className="flex-row justify-center mx-4 space-x-2">
            {dataOphim?._id ? (
              <Text className="text-neutral-400 font-semibold text-base text-center">
                {dataOphim?.category[0]?.name} • {dataOphim?.country[0]?.name} •
                {' ' + dataOphim?.view + ' View'}
              </Text>
            ) : null}
          </View>
          <Text className="text-neutral-400 mx-4 tracking-wide">
            {dataOphim?.content}
          </Text>
        </View>
      </>
    );
  });

  const Footer = React.memo(() => {
    const [idVideo, setIdVideo] = useState(moviesId);
    const [isChoose, setIsChoose] = useState('0');
    return (
      <>
        <VideoComponent idVideo={idVideo} />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 16,
            marginBottom: 20,
            paddingTop: 15,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'Shrikhand-Regular',
            }}
            className="text-neutral-200 font-semibold">
            <Text>Total Episodes: </Text>
            <Text>
              {dataOphim?.episode_current ? dataOphim?.episode_current : '0'}
            </Text>
          </Text>
        </View>

        {dataOphim?.server_data ? (
          <View className="flex-row flex-start flex-wrap">
            {dataOphim?.server_data.map((items, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setIsChoose(items.name), setIdVideo(items.link_m3u8);
                  }}
                  style={{
                    width: 77,
                    height: 50,
                    borderRadius: 7,
                    marginBottom: 30,
                    alignItems: 'center',
                    marginHorizontal: 15,
                    paddingHorizontal: 2,
                    justifyContent: 'center',
                    backgroundColor: items.name === isChoose ? 'green' : 'red',
                  }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: 'white',
                      fontFamily: 'Shrikhand-Regular',
                    }}>
                    {items.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </>
    );
  });

  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      className=" bg-neutral-900"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}>
      <Header />
      <Footer />
    </ScrollView>
  );
};

export default MoviesOphimScreen;
