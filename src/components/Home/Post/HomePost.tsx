import React from "react";
import { View, StyleSheet } from "react-native";
import { LikesPanel } from "../LikesPanel";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

interface Props {
  master: string;
  photo: string;
  avatar: string;
}

const HomePost: React.FC<Props> = ({ photo, master, avatar }) => {
  return (
    <View style={styles.container}>
      <PostHeader master={master} avatar={avatar} />
      <PostImage photo={photo} />
      <LikesPanel
        liked={master == "NBK Tatto"}
        overallCountLikes={1022}
        likersAvatars={[avatar, avatar, avatar]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
});

export default HomePost;
