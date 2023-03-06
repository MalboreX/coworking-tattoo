import React from "react";
import { StyleSheet, Image } from "react-native";

interface Props {
  zIndex: number;
  index: number;
  avatar: string;
}

const initialOffset = 5;
const offset = 18;

const PostLikerPhoto: React.FC<Props> = ({ zIndex, index, avatar }) => {
  return (
    <Image
      style={[
        styles.photo,
        {
          zIndex: zIndex,
          left: initialOffset + offset * index,
        },
      ]}
      source={{
        uri: avatar,
      }}
    />
  );
};

const styles = StyleSheet.create({
  photo: {
    position: "absolute",
    top: 1,
    borderWidth: 2,
    borderColor: "white",
    width: 32,
    height: 32,
    borderRadius: 20,
  },
});

export default PostLikerPhoto;
