import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

interface Props {
  photo: string;
}

const Dialogue: React.FC<Props> = ({ photo }) => {
  return (
    <View style={styles.container}>
      <Avatar.Image source={{ uri: photo }} size={50} />
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Roboto_400Regular",
          }}
        >
          @Big Boss
        </Text>
        <Text
          style={{
            fontFamily: "Roboto_400Regular",
            color: "#9797BD",
            fontSize: 12,
          }}
        >
          Last night was really good...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Dialogue;
