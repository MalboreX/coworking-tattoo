import React, { useRef, useState, useEffect } from "react";
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
  const scrollViewRef = useRef<ScrollView>(null);

  const addMessage = (text: string) => {
    setMessages((prev) => {
      return [...prev, { sender: 2, message: text }];
    });
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={styles.container}>
      <ChatHeader />
      <View
        style={{
          flexDirection: "column",
          gap: 10,
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView ref={scrollViewRef}>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 20,
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
        </View>
        <View>
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
