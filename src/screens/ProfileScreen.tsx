import React from "react";

import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { Avatar } from "react-native-paper";
import ProfileMetric from "../components/Profile/ProfileMetric";
import ProfileDescription from "../components/Profile/ProfileDescription";
import ActionButton from "../ui/buttons/ActionButton";

const photos = [
  "https://sun2-18.userapi.com/impg/fOCDjRIgIqIzNc93JQtj0rptXHNWnCDDkDlCEg/FEzYNugN9ng.jpg?size=1620x2160&quality=95&sign=dad127a5d4b3fffb6d1d006e2507f8dd&type=album",
  "https://sun9-52.userapi.com/impg/vC2mUVwaf6r8cNbBaAaHGy6Gk0Pvl0il1zCN1A/S2YYAfFlxhg.jpg?size=1536x2048&quality=95&sign=27dff68944e3076ca9bc3c9e13aae72f&type=album",
  "https://sun2-14.userapi.com/impg/iumfstzUH4WFPV6nUoErSgqSWay-nK6BO10kYQ/dUBjRTIjccA.jpg?size=1638x2048&quality=95&sign=dec4646002de2b8a4e30e3e4d4c68131&type=album",
  "https://sun9-42.userapi.com/impg/VBnx-7AD6MvkeT0O-deYhUrOCg0bPztBAbm_2A/v5ChjcA_Dw8.jpg?size=1439x2160&quality=95&sign=8f4dcf99f01be6a30d30270f18d4f59a&type=album",
  "https://sun2-16.userapi.com/impg/VqBVaCjRHHQ0-SiB2RUiaAGBZkZbi3qkISii3g/RM5cIYQM7ok.jpg?size=1620x2160&quality=95&sign=d6309bb2c2f4d2185d6fdaddf634406a&type=album",
  "https://sun2-7.userapi.com/impg/j1tUlTYD7z_UNL1yAPWiV2FPwyVPE3HEw28kFQ/k068HKPbLLM.jpg?size=2560x1938&quality=95&sign=bb890aff54a98fc1cb403f9740e9e5c4&type=album",
];

const ProfileScreen: React.FC = () => {
  const width = Dimensions.get("window").width;

  return (
    <>
      <View style={styles.container}>
        <ProfileHeader />
        <View style={styles.profileContainer}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}
            >
              <Avatar.Image
                size={80}
                source={{
                  uri: "https://i.pinimg.com/736x/47/fe/14/47fe1410a5581aa8a2143ed94d04cd1f.jpg",
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <ProfileMetric header="100" subheader="Posts" />
                <ProfileMetric header="100" subheader="Followers" />
                <ProfileMetric header="1000+" subheader="Likes" />
              </View>
            </View>
          </View>

          <View
            style={{
              paddingVertical: 15,
            }}
          >
            <ProfileDescription
              name="FineLine Angel"
              alias="@fineline_angel"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
            />
            <View
              style={{
                gap: 5,
              }}
            >
              <ActionButton
                height={50}
                mode="contained"
                onPress={() => console.log("Sub")}
              >
                <Text>Подписаться на @fineline_angel</Text>
              </ActionButton>
              <ActionButton
                height={50}
                mode="contained"
                onPress={() => console.log("Req")}
              >
                <Text>Спросить и записаться</Text>
              </ActionButton>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.1)",
          }}
        ></View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          paddingTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {photos.map((link, idx) => (
            <Image
              key={idx}
              style={{ width: width * 0.3315, height: width * 0.3315 }}
              source={{
                uri: link,
              }}
            />
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  profileContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default ProfileScreen;
