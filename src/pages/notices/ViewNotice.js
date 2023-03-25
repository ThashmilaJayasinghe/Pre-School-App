import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";

const ViewNotice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.viewNotice}>
      <LinearGradient
        style={styles.coverImage}
        locations={[0, 1]}
        colors={["rgba(212, 43, 125, 0.72)", "rgba(223, 54, 145, 0.79)"]}
        useAngle={true}
        angle={121.39}
      >
        <ImageBackground
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/coverimage.png")}
        />
      </LinearGradient>
      {/* <View
        style={styles.coverImage}
        locations={[0, 1]}
        colors={["rgba(212, 43, 125, 0.72)", "rgba(223, 54, 145, 0.79)"]}
      >
        <Image
            style={styles.coverImage}
            source={require("../../assets/coverimage.png")}
        />
      </View>   */}
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View
            style={[
              styles.groupChild,
              styles.childPosition,
              styles.groupChildLayout,
            ]}
          />
          <Text
            style={[styles.homework, styles.homeworkTypo, styles.iconsPosition]}
          >
            HOMEWORK
          </Text>
        </View>
        <Text style={styles.january}>26 January</Text>
      </View>
      <Text style={[styles.noticeTitle, styles.noticeLayout]}>
        Family Tree Collage due on 30th January
      </Text>
      <Text
        style={[
          styles.noticeBody,
          styles.noticeBodyPosition,
          styles.noticeLayout,
        ]}
      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce libero nisi, condimentum sed pulvinar ut, posuere eu purus. Sed viverra eros ac tempus pellentesque. Morbi at nulla sed felis convallis congue. `}</Text>
      <Pressable
        style={[styles.sendNoticeButton, styles.sendLayout]}
        onPress={() => navigation.navigate("NoticeList")}
      >
        <View
          style={[
            styles.sendNoticeButtonChild,
            styles.sendLayout,
            styles.childPosition,
          ]}
        />
        <Text
          style={[
            styles.backToNotices,
            styles.noticeBodyPosition,
            styles.homeworkTypo,
          ]}
        >
          Back to notices
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml61: {
    marginLeft: 61,
  },
  iconsPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 35,
    width: 88,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  homeworkTypo: {
    textAlign: "center",
    fontFamily: FontFamily.alatsiRegular,
  },
  noticeLayout: {
    maxWidth: "85%",
    textAlign: "left",
  },
  noticeBodyPosition: {
    fontSize: FontSize.size_studentCard_name,
    left: "50%",
    position: "absolute",
  },
  sendLayout: {
    height: 36,
    width: 169,
    position: "absolute",
  },
  viewNoticeChild: {
    top: 5,
    left: 282,
    width: 54,
    height: 66,
    position: "absolute",
  },
  selectedIcon: {
    bottom: 0,
    left: 8,
    width: 4,
    height: 4,
    position: "absolute",
  },
  akarIconshome: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  icons: {
    marginLeft: -131.5,
    bottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  navigation: {
    bottom: 15,
    left: 56,
    width: 263,
    height: 30,
    position: "absolute",
  },
  icon: {
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  coverImage: {
    top: 64,
    width: 375,
    height: 225,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: "#5fcf1b",
    borderWidth: 1,
  },
  homework: {
    marginLeft: -36,
    top: 8,
    fontSize: 14,
    color: Color.limegreen,
  },
  rectangleParent: {
    top: 0,
    height: 35,
    left: 0,
  },
  january: {
    top: 37,
    left: 4,
    fontSize: FontSize.size_xs,
    color: "#616161",
    textAlign: "left",
    fontFamily: FontFamily.alatsiRegular,
    position: "absolute",
  },
  groupParent: {
    top: 312,
    left: 12,
    height: 52,
    width: 88,
    position: "absolute",
  },
  noticeTitle: {
    marginLeft: -175.5,
    top: 420,
    fontSize: 18,
    color: Color.midnightblue_100,
    fontFamily: FontFamily.alatsiRegular,
    maxWidth: "85%",
    left: "50%",
    position: "absolute",
  },
  noticeBody: {
    marginLeft: -167.5,
    top: 482,
    fontFamily: FontFamily.arvoRegular,
    color: "#545fc3",
    width: 343,
    height: 167,
  },
  sendNoticeButtonChild: {
    backgroundColor: Color.limegreen,
  },
  backToNotices: {
    marginLeft: -78.5,
    top: 6,
    color: Color.white,
    width: 157,
    height: 24,
  },
  sendNoticeButton: {
    top: 685,
    left: 103,
  },
  viewNotice: {
    borderRadius: Border.br_21xl,
    backgroundColor: "#f9ebeb",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ViewNotice;
