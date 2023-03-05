import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { HomeHeader, HomeFeed } from "../components/";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView>
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
    marginHorizontal: 20,
  },
});

export default HomeScreen;
