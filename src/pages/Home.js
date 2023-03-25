import * as React from "react";
import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Pressable,
  Text,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

import NoticeListTeacher from './notices/NoticeListTeacher';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Image
        style={styles.homeChild}
        resizeMode="cover"
        source={require("../assets/group-11.png")}
      />
      <Image
        style={styles.homeItem}
        resizeMode="cover"
        source={require("../assets/group-22.png")}
      />
      <Image
        style={styles.homeInner}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <LinearGradient
        style={styles.background}
        locations={[0, 1]}
        colors={["rgba(212, 43, 125, 0.72)", "rgba(223, 54, 145, 0.79)"]}
        useAngle={true}
        angle={121.39}
      >
        <ImageBackground
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
      </LinearGradient>
      <View style={styles.frameView} />
      <Pressable
        style={[
          styles.studentsButton,
          styles.buttonLayout,
          styles.buttonPosition1,
        ]}
        onPress={() => navigation.navigate("NoticeListTeacher")}
      >
        <View style={[styles.background1, styles.buttonLayout]} />
        <Text style={[styles.students, styles.noticesTypo]}>Students</Text>
      </Pressable>
      <Pressable
        style={[styles.inquiriesButton, styles.buttonPosition]}
        onPress={() => navigation.navigate("NoticeListTeacher")}
      >
        <View style={[styles.background1, styles.buttonLayout]} />
        <Text style={[styles.students, styles.noticesTypo]}>Inquiries</Text>
      </Pressable>
      <Pressable
        style={[
          styles.noticesButton,
          styles.buttonLayout,
          styles.buttonPosition1,
        ]}
        onPress={() => navigation.navigate("NoticeListTeacher")}
      >
        <View style={[styles.background1, styles.buttonLayout]} />
        <Text style={[styles.notices, styles.noticesTypo]}>Notices</Text>
      </Pressable>
      <Pressable
        style={[styles.feedbackButton, styles.buttonPosition]}
        onPress={() => navigation.navigate("NoticeListTeacher")}
      >
        <View style={[styles.background1, styles.buttonLayout]} />
        <Text style={[styles.feedback, styles.noticesTypo]}>Feedback</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 115,
    width: 115,
    position: "absolute",
  },
  buttonPosition1: {
    left: 47,
    width: 115,
  },
  noticesTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: 45,
    position: "absolute",
  },
  buttonPosition: {
    left: 218,
    height: 115,
    width: 115,
    position: "absolute",
  },
  homeChild: {
    top: 282,
    left: 38,
    width: 46,
    height: 63,
    position: "absolute",
  },
  homeItem: {
    top: 5,
    left: 282,
    width: 54,
    height: 66,
    position: "absolute",
  },
  homeInner: {
    top: 314,
    left: 89,
    width: 800,
    height: 800,
    position: "absolute",
  },
  icon: {
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: Border.br_lg,
    width: "100%",
  },
  background: {
    left: 18,
    top: 59,
    width: 339,
    height: 211,
    position: "absolute",
  },
  frameView: {
    top: 154,
    left: 276,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  background1: {
    top: 0,
    left: 0,
    backgroundColor: Color.limegreen,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_lg,
  },
  students: {
    marginLeft: -38.5,
  },
  studentsButton: {
    top: 384,
  },
  inquiriesButton: {
    top: 538,
  },
  notices: {
    marginLeft: -32.5,
  },
  noticesButton: {
    top: 538,
  },
  feedback: {
    marginLeft: -40.5,
  },
  feedbackButton: {
    top: 384,
  },
  home: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
