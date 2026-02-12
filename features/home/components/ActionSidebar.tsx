import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FeedItem } from '../data/mock';

interface ActionSidebarProps {
  item: FeedItem;
}

export function ActionSidebar({ item }: ActionSidebarProps) {
  const [isLiked, setIsLiked] = useState(item.isLiked);
  const [likes, setLikes] = useState(item.likes);
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  const toggleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
        <View style={styles.followButton}>
          <Ionicons name="add" size={14} color="#fff" />
        </View>
      </View>

      <TouchableOpacity style={styles.actionButton} onPress={toggleLike}>
        <Ionicons
          name={isLiked ? 'checkmark-circle' : 'checkmark-circle-outline'}
          size={35}
          color={isLiked ? '#2ecc71' : '#fff'}
        />
        <Text style={styles.actionText}>{isLiked ? 'Mastered' : 'Mark'}</Text>
        <Text style={styles.countText}>{likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="chatbubble-ellipses-outline" size={32} color="#fff" />
        <Text style={styles.countText}>{item.comments}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={toggleFavorite}>
        <Ionicons
          name={isFavorite ? 'bookmark' : 'bookmark-outline'}
          size={32}
          color={isFavorite ? '#f1c40f' : '#fff'}
        />
        <Text style={styles.actionText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="share-social-outline" size={32} color="#fff" />
        <Text style={styles.countText}>{item.shares}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 8,
    bottom: 120, // Adjusted for taller bottom info
    alignItems: 'center',
    zIndex: 10,
  },
  avatarContainer: {
    marginBottom: 24,
    position: 'relative',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#fff',
  },
  followButton: {
    position: 'absolute',
    bottom: -8,
    left: 16,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#2ecc71', // Changed to green for education theme
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  countText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
