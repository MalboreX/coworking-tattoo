import React from "react";
import { View, StyleSheet } from "react-native";
import { HomePost } from "./Post";

const HomeFeed: React.FC = () => {
  return (
    <View style={styles.feed}>
      <HomePost
        master="NBK Tatto"
        photo="https://i.pinimg.com/736x/80/c2/e3/80c2e398fb6db5bc48a6272ebb6c5b70.jpg"
        avatar="https://assets.reedpopcdn.com/kojima_Zhtk9WV.jpg/BROK/thumbnail/1200x1200/quality/100/kojima_Zhtk9WV.jpg"
      />
      <HomePost
        master="FineLine Angel"
        photo="https://www.format.com/wp-content/uploads/Tattoo_ARtist-scaled.jpg"
        avatar="https://i.pinimg.com/736x/47/fe/14/47fe1410a5581aa8a2143ed94d04cd1f.jpg"
      />
      <HomePost
        master="FineLine Angel"
        photo="https://www.format.com/wp-content/uploads/Tattoo_ARtist-scaled.jpg"
        avatar="https://blog.readyplayer.me/content/images/2021/04/IMG_0689.PNG"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    width: "100%",
  },
});

export default HomeFeed;
