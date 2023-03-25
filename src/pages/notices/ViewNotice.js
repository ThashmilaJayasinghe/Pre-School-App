import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";

const ViewNoticeLocofy = ({route}) => {
  const navigation = useNavigation();
  const { 
    noticeId,
    noticeType,
    noticeTitle, 
    noticeDate,
    noticeBody, 
  } = route.params;

  return (
    <View style={styles.viewNoticeLocofy}>
      <View
        style={[styles.coverImageIcon, styles.januaryPosition]}
      >
        {/* <Image
          style={styles.coverImage}
          source={require("../../assets/coverImage.png")}
        /> */}
      </View>
      <View style={[styles.homeworkParent, styles.homeworkPosition]}>
        <Text style={[styles.homework, styles.homeworkPosition]}>{noticeType}</Text>
        <Text style={[styles.january, styles.januaryPosition]}>{noticeDate}</Text>
      </View>
      <Text style={[styles.noticeTitle, styles.homeworkPosition]}>
        {noticeTitle}
      </Text>
      <Text
        style={[styles.noticeBody, styles.noticeBodyPosition]}
      >{noticeBody}</Text>
      <Pressable
        style={[styles.sendNoticeButton, styles.sendLayout]}
        onPress={() => navigation.navigate("NoticeList")}
      >
        <View style={[styles.sendNoticeButtonChild, styles.sendLayout]} />
        <Text style={[styles.backToNotices, styles.noticeBodyPosition]}>
          Back to notices
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  januaryPosition: {
    position: "absolute",
    left: 0,
  },
  homeworkPosition: {
    left: "50%",
    position: "absolute",
  },
  noticeBodyPosition: {
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  sendLayout: {
    height: 36,
    width: 169,
    position: "absolute",
  },
  coverImageIcon: {
    top: 40,
    height: 225,
    // minWidth: "100%",
    // minHeight: 225,
    // maxWidth: "100%",
    // maxHeight: 225,
    left: 0,
    width: "100%",
    backgroundColor: '#E66BA7',
    alignItems: "center",
  },
  homework: {
    marginLeft: -45,
    fontSize: FontSize.size_sm,
    color: Color.limegreen,
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
    top: -20,
    borderWidth:  2,
    borderTopRightRadius:  30,
    borderBottomRightRadius:  30,
    borderTopLeftRadius:  30,
    borderBottomLeftRadius:  30,
    padding:  5,
    borderColor: Color.limegreen,
  },
  january: {
    top: 20,
    fontSize: FontSize.size_xs,
    color: Color.dimgray_100,
    textAlign: "left",
    fontFamily: FontFamily.alatsiRegular,
    left: 0,
  },
  homeworkParent: {
    marginLeft: -171.5,
    top: 320,
    width: 77,
    height: 44,
  },
  noticeTitle: {
    marginLeft: -175.5,
    top: 400,
    fontSize: FontSize.size_lg,
    color: Color.midnightblue_100,
    width: "85%",
    textAlign: "left",
    fontFamily: FontFamily.alatsiRegular,
  },
  noticeBody: {
    marginLeft: -175.5,
    top: 460,
    fontFamily: FontFamily.arvoRegular,
    color: Color.slateblue,
    width: "85%",
    height: 167,
    textAlign: "left",
  },
  sendNoticeButtonChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.limegreen,
    top: 0,
    left: 0,
  },
  backToNotices: {
    marginLeft: -78.5,
    top: 6,
    color: Color.white,
    textAlign: "center",
    width: 157,
    height: 24,
    fontFamily: FontFamily.alatsiRegular,
  },
  sendNoticeButton: {
    top: 685,
    left: 103,
  },
  viewNoticeLocofy: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.lavenderblush,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  coverImage: {
    flex: 1,
    resizeMode: 'contain'
  },
});

export default ViewNoticeLocofy;
