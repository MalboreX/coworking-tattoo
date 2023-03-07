import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  isMine: boolean;
  message: string;
}

const ChatMessage: React.FC<Props> = ({ isMine, message }) => {
  return (
    <View
      style={[
        styles.container,
        isMine ? styles.myMessageBlock : styles.someoneMessageBlock,
      ]}
    >
      <Text
        style={[
          styles.message,
          isMine ? styles.myMessageText : styles.someoneMessageText,
        ]}
      >
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "90%",
    padding: 15,
  },
  message: {
    fontFamily: "Roboto_400Regular",
    fontSize: 13,
    lineHeight: 19,
  },
  myMessageText: {
    color: "white",
  },
  someoneMessageText: {
    color: "black",
  },
  myMessageBlock: {
    backgroundColor: "#43A2FA",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 30,

    alignSelf: "flex-end",
  },
  someoneMessageBlock: {
    backgroundColor: "#F5F5F9",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 0,
  },
});

export default ChatMessage;
