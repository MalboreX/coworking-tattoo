import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { HomeFeed, SearchHeader } from "../components/";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <SearchHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.feedContainer}>
          <HomeFeed />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  feedContainer: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default HomeScreen;
