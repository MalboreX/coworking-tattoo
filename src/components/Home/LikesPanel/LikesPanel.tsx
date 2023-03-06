import React from "react";
import { View, StyleSheet, Image } from "react-native";
import LikersAvatars from "./LikersAvatars";
import LikesCount from "./LikesCount";
import PostLike from "./PostLike";

interface Props {
  overallCountLikes: number;
  likersAvatars: string[];
  liked: boolean;
}

const LikesPanel: React.FC<Props> = ({
  overallCountLikes,
  likersAvatars,
  liked,
}) => {
  return (
    <View style={styles.container}>
      <PostLike liked={liked} />
      <LikesCount likesCount={overallCountLikes} />
      <LikersAvatars avatars={likersAvatars} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LikesPanel;
