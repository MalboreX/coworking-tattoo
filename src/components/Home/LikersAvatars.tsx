import React from "react";

import { View, StyleSheet } from "react-native";
import PostLikerPhoto from "./PostLikerPhoto";

interface Props {
  avatars: string[];
  children: React.ReactNode;
}

const LikersAvatars: React.FC<Props> = ({ children, avatars }) => {
  const countAvatars = avatars.length;

  return (
    <View style={styles.container}>
      {avatars.map((ava, idx) => {
        return (
          <PostLikerPhoto
            avatar={ava}
            zIndex={countAvatars - idx}
            index={idx}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 20,
    flexDirection: "row",
    marginLeft: 1,
    height: 35,
  },
});

export default LikersAvatars;
