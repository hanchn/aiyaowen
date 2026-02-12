import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FeedItem } from '../data/mock';

interface BottomInfoProps {
  item: FeedItem;
}

export function BottomInfo({ item }: BottomInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.username}>@{item.user.name}</Text>
          <Text style={styles.description}>
            {item.description}
            <Text style={styles.hashtags}> #trending #viral</Text>
          </Text>
          <View style={styles.musicRow}>
            <View style={styles.musicIcon}>
              <Text style={styles.musicNote}>♫</Text>
            </View>
            <Text style={styles.musicText}>Original Sound - {item.user.name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    zIndex: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20, // Add padding for bottom tabs
    backgroundColor: 'rgba(0,0,0,0.3)', // Simple semi-transparent background since gradient failed
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  hashtags: {
    fontWeight: 'bold',
  },
  musicRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicIcon: {
    marginRight: 8,
  },
  musicNote: {
    color: '#fff',
    fontSize: 14,
  },
  musicText: {
    color: '#fff',
    fontSize: 14,
  },
});
