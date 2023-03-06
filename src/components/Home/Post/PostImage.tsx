import React from "react";
import { View, StyleSheet, Image } from "react-native";

interface Props {
  photo: string;
}

const PostImage: React.FC<Props> = ({ photo }) => {
  return (
    <View>
      <Image
        style={styles.photo}
        source={{
          uri: photo,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    resizeMode: "cover",
  },
});

export default PostImage;
