import React from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Dialogue from "./Dialogue";

interface Props {
  openChat: Function;
}

const DialoguesList: React.FC<Props> = ({ openChat }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => openChat(0)} activeOpacity={0.8}>
            <Dialogue photo="https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/29230.jpg" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 20,
    flex: 1,
  },
});

export default DialoguesList;
