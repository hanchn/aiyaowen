import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MOCK_FEED } from '../home/data/mock';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3;

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<'works' | 'likes'>('works');

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?u=me' }}
          style={styles.avatar}
        />
        <View style={styles.addIcon}>
          <Ionicons name="add-circle" size={24} color="#1890ff" />
        </View>
      </View>
      <Text style={styles.name}>@MyUsername</Text>
      <Text style={styles.bio}>
        Creating awesome content! 📸 🎥
        {'\n'}Follow for more vibes ✨
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>12.5k</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>890k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>2.3M</Text>
          <Text style={styles.statLabel}>Likes</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name="bookmark-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderTab = () => (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'works' && styles.activeTab]}
        onPress={() => setActiveTab('works')}
      >
        <Ionicons
          name="grid-outline"
          size={24}
          color={activeTab === 'works' ? '#333' : '#999'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'likes' && styles.activeTab]}
        onPress={() => setActiveTab('likes')}
      >
        <Ionicons
          name="heart-outline"
          size={24}
          color={activeTab === 'likes' ? '#333' : '#999'}
        />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.gridItem}>
      {item.type === 'video' ? (
        <View style={styles.videoPlaceholder}>
          <Text style={styles.typeIcon}>🎥</Text>
        </View>
      ) : item.type === 'image' ? (
        <Image source={{ uri: item.images?.[0] }} style={styles.gridImage} />
      ) : (
        <View style={styles.formPlaceholder}>
          <Text style={styles.typeIcon}>📝</Text>
        </View>
      )}
      <View style={styles.viewsOverlay}>
        <Ionicons name="play-outline" size={12} color="#fff" />
        <Text style={styles.viewsText}>{item.likes}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MOCK_FEED}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        ListHeaderComponent={
          <>
            {renderHeader()}
            {renderTab()}
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 40,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    paddingHorizontal: 32,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  editButtonText: {
    fontWeight: '600',
  },
  bookmarkButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  gridItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.3,
    borderWidth: 0.5,
    borderColor: '#fff',
    backgroundColor: '#f0f0f0',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  videoPlaceholder: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formPlaceholder: {
    flex: 1,
    backgroundColor: '#e6f4ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeIcon: {
    fontSize: 30,
  },
  viewsOverlay: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  viewsText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
