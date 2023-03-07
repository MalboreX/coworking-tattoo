import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TextInputChat from "../../ui/inputs/TextInputChat";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";

const messagesDefault = [
  {
    sender: 1,
    message:
      "Да договорились, 28 в 16:00 Удобно будет? Я отправлю вам заявку на оплату предоплаты, и подтверждение даты.",
  },
  {
    sender: 2,
    message: "Да время отличное, я свободен, да хорошо, жду",
  },
];

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState(messagesDefault);

  const addMessage = (text: string) => {
    setMessages((prev) => {
      return [...prev, { sender: 2, message: text }];
    });
  };

  return (
    <View style={styles.container}>
      <ChatHeader />
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flex: 1,
            gap: 10,
          }}
        >
          {messages.map((msg, idx) => {
            return (
              <ChatMessage
                key={idx}
                isMine={msg.sender == 2}
                message={msg.message}
              />
            );
          })}
        </View>
      </ScrollView>

      <View
        style={{
          position: "absolute",
          backgroundColor: "white",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            padding: 15,
            paddingTop: 0,
          }}
        >
          <TextInputChat
            placeholder="Message"
            onSend={(text: string) => addMessage(text)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
});

export default ChatScreen;
