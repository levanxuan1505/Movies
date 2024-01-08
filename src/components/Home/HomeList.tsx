/* eslint-disable react/no-unstable-nested-components */
import React, {useCallback, useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import {fetchMoviesOphim} from '../../Api/MoviesDb';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const HomeTrending = React.lazy(() => import('./HomeTrending'));
const HomeBodyComponent = React.lazy(() => import('./HomeBodyComponent'));

const HomeList = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setLoading] = React.useState(false);
  const fetchData = async (pageNumber: number) => {
    if (pageNumber > 22) {
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
    return item && <HomeBodyComponent data={item} />;
  }, []);

  return (
    data &&
    data.length > 0 && (
      <FlashList
        data={data}
        renderItem={renderItems}
        estimatedItemSize={20}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.005}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeTrending />}
        contentContainerStyle={styles.flatList}
        extraData={item => item?.items[0]._id.toString()}
        keyExtractor={item => item?.items[0]._id.toString()}
        // renderItem={({item}) => <HomeBodyComponent data={item} />}
        ListFooterComponent={renderFooter}
      />
    )
  );
};

export default HomeList;
const styles = StyleSheet.create({
  flatList: {
    paddingBottom: 10,
  },
});
