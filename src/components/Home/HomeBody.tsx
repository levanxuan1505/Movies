/* eslint-disable react/no-unstable-nested-components */
import {FlashList} from '@shopify/flash-list';
import {fetchMoviesOphim} from '../../Api/MoviesDb';
import {useSharedValue} from 'react-native-reanimated';
import React, {useRef, useCallback, useEffect} from 'react';
import {View, ViewToken, RefreshControl, ActivityIndicator} from 'react-native';
const HomeTrending = React.lazy(() => import('./HomeTrending'));
const HomeBodyComponent = React.lazy(() => import('./HomeBodyComponent'));

const HomeBody = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

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
      return <></>;
    }

    return (
      <View className="py-[40px]">
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  };

  const renderItems = useCallback(({item}) => {
    return (
      item && <HomeBodyComponent data={item} viewableItems={viewableItems} />
    );
  }, []);

  // const data = new Array(50).fill(0).map((_, index) => ({id: index}));

  const viewableItems = useSharedValue<ViewToken[]>([]);
  const onViewableItemsChanged = ({viewableItems: vItems}) => {
    viewableItems.value = vItems;
  };

  const viewabilityConfigCallbackPairs = useRef([{onViewableItemsChanged}]);

  return (
    data &&
    data.length > 0 && (
      <FlashList
        data={data}
        maxToRenderPerBatch={2}
        estimatedItemSize={22}
        renderItem={renderItems}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.005}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeTrending />}
        extraData={item => item?.items[0]._id.toString()}
        keyExtractor={item => item?.items[0]._id.toString()}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
            tintColor={'#00AA13'}
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={10}
          />
        }
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    )
  );
};

export default HomeBody;
