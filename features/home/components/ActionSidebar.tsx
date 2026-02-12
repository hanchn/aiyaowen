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
          name={isLiked ? 'heart' : 'heart-outline'}
          size={35}
          color={isLiked ? '#ff2d55' : '#fff'}
        />
        <Text style={styles.actionText}>{likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="chatbubble-ellipses-outline" size={32} color="#fff" />
        <Text style={styles.actionText}>{item.comments}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={toggleFavorite}>
        <Ionicons
          name={isFavorite ? 'bookmark' : 'bookmark-outline'}
          size={32}
          color={isFavorite ? '#ffcc00' : '#fff'}
        />
        <Text style={styles.actionText}>Fav</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="share-social-outline" size={32} color="#fff" />
        <Text style={styles.actionText}>{item.shares}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 8,
    bottom: 100,
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
    backgroundColor: '#ff2d55',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
