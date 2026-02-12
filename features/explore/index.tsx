import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SUBJECTS } from '../home/data/mock';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { Fonts } from '@/constants/theme';

const { width } = Dimensions.get('window');

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
          Knowledge Map
        </ThemedText>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Subjects</ThemedText>
          <View style={styles.grid}>
            {SUBJECTS.map((subject) => (
              <TouchableOpacity
                key={subject.id}
                style={[styles.card, { borderColor: subject.color }]}
              >
                <View style={[styles.iconContainer, { backgroundColor: subject.color }]}>
                  <Text style={styles.iconText}>{subject.label[0]}</Text>
                </View>
                <ThemedText style={styles.cardTitle}>{subject.label}</ThemedText>
                <Text style={[styles.cardCount, { color: subject.color }]}>120+ Topics</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Popular Topics</ThemedText>
          <View style={styles.topicsContainer}>
            {['Calculus', 'Mechanics', 'Organic Chemistry', 'Genetics', 'Grammar'].map((topic, index) => (
              <TouchableOpacity key={index} style={styles.topicChip}>
                <Text style={styles.topicText}># {topic}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>Daily Challenge</ThemedText>
          <TouchableOpacity style={styles.challengeCard}>
            <View style={styles.challengeContent}>
              <ThemedText type="defaultSemiBold" style={{ color: '#fff' }}>Physics: Motion</ThemedText>
              <Text style={styles.challengeDesc}>Solve 5 problems in 10 mins</Text>
            </View>
            <View style={styles.startBtn}>
              <Text style={styles.startBtnText}>Start</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  card: {
    width: (width - 55) / 2,
    padding: 15,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardCount: {
    fontSize: 12,
    fontWeight: '500',
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  topicChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  topicText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  challengeCard: {
    backgroundColor: '#3498db',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  challengeContent: {
    flex: 1,
  },
  challengeDesc: {
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  startBtn: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  startBtnText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});
