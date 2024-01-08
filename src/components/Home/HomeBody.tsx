import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {fetchMoviesOphim} from '../../Api/MoviesDb';
import {setData, setLoading, incrementPage} from '../../redux/store';
const HomeTrending = React.lazy(() => import('./HomeTrending'));
const HomeBodyComponent = React.lazy(() => import('./HomeBodyComponent'));
const HomeBody = () => {
  const dispatch = useDispatch();
  const {data, isLoading, page} = useSelector((state: any) => state.scroll);
  const fetchData = useCallback(
    async (pageNumber: number) => {
      if (pageNumber > 20) {
        return;
      }
      try {
        dispatch(setLoading(true));
        const newData = await fetchMoviesOphim(pageNumber);
        if (newData) {
          dispatch(setData(newData));
          dispatch(incrementPage());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const handleEndReached = useCallback(() => {
    if (!isLoading) {
      fetchData(page);
    }
  }, [fetchData, isLoading, page]);

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }

    return (
      <View className="py-[40px]">
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  };
  const renderItems = useCallback(({item}) => {
    return item && <HomeBodyComponent data={item} />;
  }, []);

  return (
    <FlashList
      data={data}
      estimatedItemSize={20}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HomeTrending />}
      // extraData={item => item?.items[0]._id.toString()}
      // keyExtractor={item => item?.items[0]._id.toString()}
      renderItem={renderItems}
      // renderItem={({item}) => <HomeBodyComponent data={item} />}
      ListFooterComponent={renderFooter}
    />
  );
};

export default HomeBody;
