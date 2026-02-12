import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FeedItem, SUBJECTS } from "../data/mock";

interface BottomInfoProps {
  item: FeedItem;
}

export function BottomInfo({ item }: BottomInfoProps) {
  const subjectColor =
    SUBJECTS.find((s) => s.id === item.subject)?.color || "#fff";
  const difficultyColor = {
    easy: "#2ecc71",
    medium: "#f1c40f",
    hard: "#e74c3c",
  }[item.difficulty];

  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.tagRow}>
            <View
              style={[styles.subjectTag, { backgroundColor: subjectColor }]}
            >
              <Text style={styles.tagText}>{item.subject.toUpperCase()}</Text>
            </View>
            <View
              style={[styles.difficultyTag, { borderColor: difficultyColor }]}
            >
              <Text style={[styles.difficultyText, { color: difficultyColor }]}>
                {item.difficulty.toUpperCase()}
              </Text>
            </View>
          </View>

          <Text style={styles.username}>@{item.user.name}</Text>
          <Text style={styles.description}>
            {item.description}
            <Text style={styles.hashtags}>
              {" "}
              {item.tags.map((t) => `#${t}`).join(" ")}
            </Text>
          </Text>

          <View style={styles.knowledgeRow}>
            <View style={styles.knowledgeIcon}>
              <Text style={styles.knowledgeSymbol}>📚</Text>
            </View>
            <Text style={styles.knowledgeText}>
              Knowledge Point: {item.title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 220, // Increased height for tags
    zIndex: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 60,
  },
  tagRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  subjectTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  difficultyTag: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
  difficultyText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  username: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 20,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  hashtags: {
    fontWeight: "bold",
    color: "#eee",
  },
  knowledgeRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 8,
    borderRadius: 8,
  },
  knowledgeIcon: {
    marginRight: 8,
  },
  knowledgeSymbol: {
    fontSize: 14,
  },
  knowledgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
