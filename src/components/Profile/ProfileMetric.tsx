import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  header: string;
  subheader: string;
}

const ProfileMetric: React.FC<Props> = ({ header, subheader }) => {
  return (
    <View>
      <Text style={styles.text}>{header}</Text>
      <Text style={[styles.text, styles.subheaderText]}>{subheader}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 14,
  },
  subheaderText: {
    color: "#9797BD",
  },
});

export default ProfileMetric;
