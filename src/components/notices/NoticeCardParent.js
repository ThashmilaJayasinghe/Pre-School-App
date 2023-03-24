import * as React from "react";
import {useState} from 'react';
import { View, StyleSheet, Text, Image, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const NoticeCardParent = ({notice}) => {
  const [noticetId, setNoticeId] = useState(notice.id);
  const [noticeTitle, setNoticeTitle] = useState(notice.title);
  const [noticeDate, setNoticeDate] = useState(notice.date);  
  const navigation = useNavigation();

  return (
    <View style={styles.noticeCardParent}>
      <View
        style={[
          styles.background,
          styles.backgroundLayout,
          styles.backgroundPosition,
        ]}
      >
        <View style={[styles.background1, styles.backgroundLayout]} />
        <Text style={[styles.notice1, styles.notice1Position]} numberOfLines={2}>
          {noticeTitle}
        </Text>
        <Text style={[styles.january, styles.notice1Position]} numberOfLines={1}>
          {noticeDate}
        </Text>
        <Pressable
          style={[styles.viewButton, styles.viewLayout]}
          onPress={() => navigation.navigate("ViewNotice")}
        >
          <Image
            style={[styles.viewLayout, styles.backgroundPositionButton]}
            resizeMode="cover"
            source={require("../../assets/ellipse-2.png")}
          />
          <Text style={styles.view}>View</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  backgroundPosition: {
    // left: 0,
    flex: 1,
    top: 20, 
  },
  notice1Position: {
    textAlign: "left",
    marginLeft: -24.5,
    left: "50%",
    position: "absolute",
  },
  viewLayout: {
    height: 26,
    width: 93,
    position: "absolute",
  },
  background: {
    backgroundColor: "#f1f6ef",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 329,
    height: 112,
  },
  background1: {
    top: 15,
    left: 16,
    backgroundColor: Color.limegreen,
    width: 102,
    height: 83,
  },
  notice1: {
    top: 28,
    fontSize: 13,
    color: Color.midnightblue_100,
    fontFamily: FontFamily.alatsiRegular,
  },
  january: {
    top: 46,
    fontSize: 8,
    fontFamily: FontFamily.alefRegular,
    color: "rgba(14, 25, 121, 0.62)",
  },
  view: {
    marginLeft: -12.5,
    top: 5,
    fontSize: FontSize.size_xs,
    color: "#eb7100",
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    left: "50%",
    position: "absolute",
  },
  viewButton: {
    top: 78,
    left: 221,
  },
  noticeCardParent: {
    flex: 1,
    width: "100%",
    height: 112,
    alignItems: "center",
  },
  backgroundPositionButton: {
    left: 0,
    top: 0,
  },
});

export default NoticeCardParent;
