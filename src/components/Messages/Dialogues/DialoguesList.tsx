import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Dialogue from "./Dialogue";

const DialoguesList: React.FC = () => {
    return (
        <View style={styles.container}>
            <Dialogue photo="https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/29230.jpg"/>
            <Dialogue photo="https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/29230.jpg"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
        flex: 1,
        gap: 20
    },
});

export default DialoguesList;