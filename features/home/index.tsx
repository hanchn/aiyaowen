import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, View, FlatList, Dimensions, StatusBar, ViewToken } from 'react-native';
import { FeedItem, MOCK_FEED } from './data/mock';
import { FeedItemComponent } from './components/FeedItem';

const { height } = Dimensions.get('window');

export default function FeedScreen() {
  const [activeId, setActiveId] = useState<string>(MOCK_FEED[0].id);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setActiveId(viewableItems[0].key as string);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = useCallback(
    ({ item }: { item: FeedItem }) => (
      <FeedItemComponent item={item} isActive={item.id === activeId} />
    ),
    [activeId]
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <FlatList
        data={MOCK_FEED}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height - 83}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
