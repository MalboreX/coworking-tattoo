import React from "react";
import { View, StyleSheet } from "react-native";
import SearchHeader from "../../components/Headers/SearchHeader";
import DialoguesList from "../../components/Messages/Dialogues/DialoguesList";

const DialoguesScreen: React.FC<Props> = ({ navigation }) => {
  const openChat = (chatId: number) => {
    console.log(`Opening chat #${chatId}`);
    navigation.navigate("Chat");
  };

  return (
    <View style={styles.container}>
      <SearchHeader />
      <DialoguesList openChat={openChat} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
});

export default DialoguesScreen;
