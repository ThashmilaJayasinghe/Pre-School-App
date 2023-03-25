import * as React from "react";
import {useState} from 'react';
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const NoticeCardTeacher = ({notice}) => {
  const [noticetId, setNoticeId] = useState(notice.id);
  const [noticeTitle, setNoticeTitle] = useState(notice.title);
  const [noticeDate, setNoticeDate] = useState(notice.date);  
  const navigation = useNavigation();
 
  return (
    <View style={styles.noticeCardTeacher}>
      <View style={[styles.groupParent, styles.backgroundLayout1]}>
        <View style={[styles.groupParent, styles.backgroundLayout1]}>
          <View
            style={[
              styles.background,
              styles.backgroundLayout,
              styles.backgroundLayout2,
            ]}
          >
            <View style={[styles.background1, styles.backgroundLayout]}>
            <Image
              style={styles.coverImage}
              source={require("../../assets/coverImage.png")}
            />
            </View>
            <Text style={[styles.notice1, styles.notice1Position]}>{noticeTitle}</Text>
            <Text
                style={[styles.january, styles.notice1Position]}
                numberOfLines={1}
            >
                {noticeDate}
            </Text>
          </View>  
          <View style={styles.buttons}>
            <Pressable
              onPress={() => navigation.navigate("ViewNotice")}
            >
              <Image
                style={[styles.deleteIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/deleteNotice.png")}
              />
            </Pressable>   
            <Pressable
              onPress={() => navigation.navigate("ViewNotice")}
            >
              <Image
                style={[styles.editIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../assets/editNotice.png")}
              />
            </Pressable>  
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout1: {
    width: 329,
    top: 0,
    left: 0,
    height: 112,
  },
  backgroundLayout2: {
    width: 329,
    top: 20,
    // left: 0;
    flex: 1,
    height: 112,
  },
  backgroundLayout: {
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  notice1Position: {
    textAlign: "left",
    left: "50%",
    marginLeft: -24.5,
    position: "absolute",
  },
  iconLayout: {
    width: 35,
    height: 35,
    top: 0,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.mintcream,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  background1: {
    top: 15,
    left: 16,
    backgroundColor: Color.limegreen,
    width: 102,
    height: 83,
    alignItems: "center",
  },
  notice1: {
    top: 28,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alatsiRegular,
    color: Color.midnightblue_100,
  },
  january: {
    top: 46,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.alefRegular,
    color: Color.midnightblue_200,
  },
  groupParent: {
    position: "absolute",
    top: 0,
  },
  deleteIcon: {
    left: 46,
  },
  editIcon: {
    left: 0,
    width: 35,
  },
  buttons: {
    top: 70,
    left: 237,
    width: 81,
    height: 35,
    position: "absolute",
  },
  noticeCardTeacher: {
    flex: 1,
    width: "100%",
    height: 112,
  },
  coverImage: {
    flex: 1,
    resizeMode: 'contain'
  },
});

export default NoticeCardTeacher;
