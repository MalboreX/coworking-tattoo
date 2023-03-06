import React from "react";
import { Text, StyleSheet } from "react-native";

function numberWithCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

interface Props {
  likesCount: number;
}

const LikesCount: React.FC<Props> = ({ likesCount }) => {
  return (
    <Text style={styles.likesText}>
      {numberWithCommas(likesCount)} Понравилось
    </Text>
  );
};

const styles = StyleSheet.create({
  likesText: {
    marginLeft: 5,
  },
});

export default LikesCount;
