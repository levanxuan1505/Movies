import React, {useCallback, useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import {fetchMoviesOphim} from '../../Api/MoviesDb';
import {View, ActivityIndicator, RefreshControl} from 'react-native';
const HBOTrending = React.lazy(() => import('./HBOTrending'));
const HBOBodyComponent = React.lazy(() => import('./HBOBodyComponent'));

const HBOBody = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(31);
  const [isLoading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  const fetchData = async (pageNumber: number) => {
    if (pageNumber > 50) {
      return;
    }
    try {
      setLoading(true);
      const newData = await fetchMoviesOphim(pageNumber);
      if (newData) {
        setData([...data, ...[newData]]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleEndReached = () => {
    setPage(prev => prev + 1);
  };

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
    data &&
    data.length > 0 && (
      <FlashList
        data={data}
        estimatedItemSize={20}
        renderItem={renderItems}
        onEndReachedThreshold={0.005}
        onEndReached={handleEndReached}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HBOTrending />}
        extraData={item => item?.items[0]._id.toString()}
        keyExtractor={item => item?.items[0]._id.toString()}
        refreshControl={
          <RefreshControl
            tintColor={'#00AA13'}
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={10}
          />
        }
        ListFooterComponent={renderFooter}
      />
    )
  );
};

export default HBOBody;
