import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { FeedItem } from '../data/mock';

const { width, height } = Dimensions.get('window');

interface VideoPlayerProps {
  item: FeedItem;
  isActive: boolean;
}

export function VideoPlayer({ item, isActive }: VideoPlayerProps) {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<any>({});

  useEffect(() => {
    if (isActive) {
      videoRef.current?.playAsync();
    } else {
      videoRef.current?.pauseAsync();
    }
  }, [isActive]);

  const togglePlay = () => {
    if (status.isPlaying) {
      videoRef.current?.pauseAsync();
    } else {
      videoRef.current?.playAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: item.videoUrl || '' }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay={isActive}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      {!status.isPlaying && (
        <View style={styles.playButtonOverlay}>
          <View style={styles.playIcon} />
        </View>
      )}

      <TouchableOpacity style={styles.overlay} onPress={togglePlay} activeOpacity={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  playButtonOverlay: {
    position: 'absolute',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 0,
    borderBottomWidth: 20,
    borderTopWidth: 20,
    borderLeftColor: 'rgba(255, 255, 255, 0.8)',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
});
