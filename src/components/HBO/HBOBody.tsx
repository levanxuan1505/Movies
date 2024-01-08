import {FlashList} from '@shopify/flash-list';
import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {fetchMoviesOphim} from '../../Api/MoviesDb';
import {setDataHBO, setLoadingHBO, incrementPageHBO} from '../../redux/store';
const HBOTrending = React.lazy(() => import('./HBOTrending'));
const HBOBodyComponent = React.lazy(() => import('./HBOBodyComponent'));
const HBOBody = () => {
  const dispatch = useDispatch();
  const {data, isLoading, page} = useSelector(
    (state: any) => state.scrollHBOSlice,
  );
  const fetchData = useCallback(
    async (pageNumber: number) => {
      if (pageNumber > 50) {
        return;
      }
      try {
        dispatch(setLoadingHBO(true));
        const newData = await fetchMoviesOphim(pageNumber);
        if (newData) {
          dispatch(setDataHBO(newData));
          dispatch(incrementPageHBO());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setLoadingHBO(false));
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
    return item && <HBOBodyComponent data={item} />;
  }, []);

  return (
    <FlashList
      data={data}
      estimatedItemSize={20}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HBOTrending />}
      // extraData={item => item?.[0]._id.toString()}
      // keyExtractor={item => item?.[0]._id.toString()}
      // renderItem={({item}) => <HBOBodyComponent data={item} />}
      renderItem={renderItems}
      ListFooterComponent={renderFooter}
    />
  );
};

export default HBOBody;
