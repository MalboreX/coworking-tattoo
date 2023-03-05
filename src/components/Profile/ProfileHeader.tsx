import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { UiSearchInputIcon } from "../../ui";
import { SearchSvg } from "../../ui/icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileHeader: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        {
          paddingTop: insets.top + 20,
          paddingBottom: 20,
          paddingLeft: insets.left + 10,
          paddingRight: insets.left + 10,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          marginRight: 20,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto_400Regular",
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Profile
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
});

export default ProfileHeader;
