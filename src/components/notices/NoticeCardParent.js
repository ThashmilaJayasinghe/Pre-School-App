import * as React from "react";
import {useState} from 'react';
import { View, StyleSheet, Text, Image, Pressable, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const NoticeCardParent = ({notice}) => {
  const [noticeId, setNoticeId] = useState(notice.id);
  const [noticeType, setNoticeType] = useState(notice.type);
  const [noticeTitle, setNoticeTitle] = useState(notice.title);
  const [noticeDate, setNoticeDate] = useState(notice.date);
  const [noticeBody, setNoticeBody] = useState(notice.body);

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
        <View style={[styles.background1, styles.backgroundLayout]}>
          {/* <Image
            style={styles.coverImage}
            source={require("../../assets/coverImage.png")}
          /> */}
        </View>  
        <Text style={[styles.notice1, styles.notice1Position]} numberOfLines={2}>
          {noticeTitle}
        </Text>
        <Text style={[styles.january, styles.notice1Position]} numberOfLines={1}>
          {noticeDate}
        </Text>
        <Pressable
          style={[styles.viewButton, styles.viewLayout]}
          onPress={() => navigation.navigate("ViewNotice", {
            noticeId,
            noticeType,
            noticeTitle, 
            noticeDate,
            noticeBody,
          })}
        >
          {/* <Image
            style={[styles.viewLayout, styles.backgroundPositionButton]}
            resizeMode="cover"
            source={require("../../assets/ellipse-2.png")}
          /> */}
          <Image
            style={[styles.viewLayout, styles.backgroundPositionButton]}
            resizeMode="cover"
            source={{
              uri: 'https://d1xzdqg8s8ggsr.cloudfront.net/641a11603ab896e830afb584/fd66b7e2-f303-40c3-82dc-f1f0a100c712_1679516926769965991?Expires=-62135596800&Signature=Ahhc7tvTQ4TShR8uvyEgzFL~4mjGPi9yEuSW4-CJ9s2k9Mw1-gL9v6flpLBKcf2RlqUlhA5tk8C8HoMQN8DAuPZkfxOHWhJbtecjJGlntDNntgwJZ5SeLD3T70E0B9htePbDYBEuMTampgwdu2gmtgzZfQp3cLW5P5Ft8di1bqOooVCFwURa1pRk4~JhdXZP2LhLfilpnJUgC6gwyHhRfVC~rKgERWWU-rOPlwWf1Ny4K5~3Y9kgC00zUJnwcJJWxjg-ZOsEXanGzFFGXWk6cx4g47FHUYHNDWaFyfyreadz74tiuFu~r1amNIvl5jkReYTpv0TWOrJN-nj567W7Ug__&Key-Pair-Id=K1P54FZWCHCL6J',
            }}
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
    alignItems: "center"
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
  coverImage: {
    flex: 1,
    resizeMode: 'contain'
  },
});

export default NoticeCardParent;
