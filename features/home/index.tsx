import React, { useCallback, useMemo, useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewToken,
} from "react-native";
import { FeedItemComponent } from "./components/FeedItem";
import { FeedItem, MOCK_FEED, SUBJECTS, Subject } from "./data/mock";

const { height } = Dimensions.get("window");

export default function FeedScreen() {
  const [activeId, setActiveId] = useState<string>(MOCK_FEED[0].id);
  const [activeSubject, setActiveSubject] = useState<Subject | "all">("all");

  const filteredFeed = useMemo(() => {
    if (activeSubject === "all") return MOCK_FEED;
    return MOCK_FEED.filter((item) => item.subject === activeSubject);
  }, [activeSubject]);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setActiveId(viewableItems[0].key as string);
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = useCallback(
    ({ item }: { item: FeedItem }) => (
      <FeedItemComponent item={item} isActive={item.id === activeId} />
    ),
    [activeId],
  );

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Subject Filter Tab */}
      <SafeAreaView style={styles.headerContainer}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => setActiveSubject("all")}
            style={[
              styles.tabItem,
              activeSubject === "all" && styles.activeTabItem,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                activeSubject === "all" && styles.activeTabText,
              ]}
            >
              All
            </Text>
            {activeSubject === "all" && <View style={styles.activeIndicator} />}
          </TouchableOpacity>

          {SUBJECTS.map((subject) => (
            <TouchableOpacity
              key={subject.id}
              onPress={() => setActiveSubject(subject.id)}
              style={[
                styles.tabItem,
                activeSubject === subject.id && styles.activeTabItem,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeSubject === subject.id && styles.activeTabText,
                ]}
              >
                {subject.label}
              </Text>
              {activeSubject === subject.id && (
                <View
                  style={[
                    styles.activeIndicator,
                    { backgroundColor: subject.color },
                  ]}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>

      <FlatList
        data={filteredFeed}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    backgroundColor: "black",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    gap: 20,
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  activeIndicator: {
    width: 20,
    height: 3,
    backgroundColor: "#fff",
    borderRadius: 2,
    marginTop: 4,
  },
  activeTabItem: {
    transform: [{ scale: 1.05 }],
  },
});
