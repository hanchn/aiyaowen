import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { FeedItem } from '../data/mock';
import { VideoPlayer } from './VideoPlayer';
import { ImageCarousel } from './ImageCarousel';
import { InteractiveForm } from './InteractiveForm';
import { ActionSidebar } from './ActionSidebar';
import { BottomInfo } from './BottomInfo';

const { width, height } = Dimensions.get('window');

interface FeedItemProps {
  item: FeedItem;
  isActive: boolean;
}

export function FeedItemComponent({ item, isActive }: FeedItemProps) {
  const renderContent = () => {
    switch (item.type) {
      case 'video':
        return <VideoPlayer item={item} isActive={isActive} />;
      case 'image':
        if (!item.images) return <Text>No images</Text>;
        return <ImageCarousel images={item.images} />;
      case 'form':
        if (!item.form) return <Text>No form data</Text>;
        return <InteractiveForm form={item.form} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <ActionSidebar item={item} />
      <BottomInfo item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: height - 83, // Approximate tab bar height adjustment
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
