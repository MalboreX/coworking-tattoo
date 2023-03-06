import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
  alias: string;
  description: string;
}

const ProfileDescription: React.FC<Props> = ({ name, alias, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={[styles.text, styles.alias]}>{alias}</Text>
      <Text style={[styles.text, styles.description]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
  },
  alias: {
    color: "#9797BD",
    fontSize: 12,
    justifyContent: "flex-end",
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
  },
});

export default ProfileDescription;
