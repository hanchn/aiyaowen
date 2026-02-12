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
import { MOCK_FEED, SUBJECTS } from '../home/data/mock';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3;

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<'collection' | 'mistakes'>('collection');

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?u=student' }}
          style={styles.avatar}
        />
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>Lv.5</Text>
        </View>
      </View>
      <Text style={styles.name}>Student Alex</Text>
      <Text style={styles.bio}>
        Learning Physics & Math 🚀
        {'\n'}Goal: Master Calculus by June!
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>12.5h</Text>
          <Text style={styles.statLabel}>Study Time</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>42</Text>
          <Text style={styles.statLabel}>Topics Mastered</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
      </View>

      <View style={styles.subjectProgress}>
        <Text style={styles.progressTitle}>Subject Proficiency</Text>
        <View style={styles.progressRow}>
          {SUBJECTS.slice(0, 3).map(subject => (
            <View key={subject.id} style={styles.progressItem}>
              <View style={[styles.progressDot, { backgroundColor: subject.color }]} />
              <Text style={styles.progressLabel}>{subject.label}</Text>
              <Text style={styles.progressValue}>75%</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  const renderTab = () => (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'collection' && styles.activeTab]}
        onPress={() => setActiveTab('collection')}
      >
        <Ionicons
          name="bookmark-outline"
          size={24}
          color={activeTab === 'collection' ? '#333' : '#999'}
        />
        <Text style={[styles.tabLabel, activeTab === 'collection' && styles.activeTabLabel]}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'mistakes' && styles.activeTab]}
        onPress={() => setActiveTab('mistakes')}
      >
        <Ionicons
          name="warning-outline"
          size={24}
          color={activeTab === 'mistakes' ? '#333' : '#999'}
        />
        <Text style={[styles.tabLabel, activeTab === 'mistakes' && styles.activeTabLabel]}>Mistakes</Text>
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
      <View style={[styles.subjectBadge, { backgroundColor: SUBJECTS.find(s => s.id === item.subject)?.color }]}>
        <Text style={styles.subjectText}>{item.subject[0].toUpperCase()}</Text>
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
  levelBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#f1c40f',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  levelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
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
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  subjectProgress: {
    width: '90%',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressItem: {
    alignItems: 'center',
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  progressValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  tabLabel: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  activeTabLabel: {
    color: '#333',
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
  subjectBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
