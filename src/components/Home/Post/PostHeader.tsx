import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

interface Props {
  master: string;
  avatar: string;
}

const PostHeader: React.FC<Props> = ({ master, avatar }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: "center",
      }}
    >
      <Avatar.Image
        size={46}
        source={{
          uri: avatar,
        }}
      />
      <View
        style={{
          paddingLeft: 10,
        }}
      >
        <Text style={styles.textMaster}>{master}</Text>
        <Text style={styles.textTime}>Сегодня в 20:50</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textMaster: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
  },
  textTime: {
    fontSize: 11,
    fontFamily: "Roboto_500Medium",
    color: "#9797BD",
  },
});

export default PostHeader;
