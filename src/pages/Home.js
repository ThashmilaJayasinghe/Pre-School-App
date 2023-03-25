import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import BottomNavbar from '../components/navbar/BottomNavbar';
import StudentList from './feedback/StudentList';
import FeedbackList from './feedback/FeedbackList';

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* <View style = {{height: '100%', backgroundColor: 'red'}}> */}
      {/* scroll view used because of the BottomNavbar visibility */}
      {/* these are just only for testing */}
      <ScrollView>
        <StudentList />
        {/* <FeedbackList /> */}
      </ScrollView>

      <BottomNavbar />

      {/* </View> */}
    </>
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
