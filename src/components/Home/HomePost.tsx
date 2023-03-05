import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "react-native-paper";

interface Props {
  master: string;
  photo: string;
  avatar: string;
}

const HomePost: React.FC<Props> = ({ photo, master, avatar }) => {
  return (
    <View style={styles.container}>
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
      <View>
        <Image
          style={styles.photo}
          source={{
            uri: photo,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    resizeMode: "cover",
  },
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

export default HomePost;
