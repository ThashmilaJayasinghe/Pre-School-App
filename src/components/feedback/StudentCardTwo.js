import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {Border, FontFamily, Color, FontSize} from '../../GlobalStyles';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width - 32; // use card width as per requirement

const StudentCardTwo = () => {
 

    console.log(CARD_WIDTH);

  return (
    <View style={[styles.feedbackItem, {width: CARD_WIDTH}]}>
      <View
        style={[
          styles.background,
          styles.background,
          {width: CARD_WIDTH, height: CARD_WIDTH * 0.34}, // set the aspect ratio as per requirement
        ]}
      />
      <View
        style={[
          styles.background2,
          {width: CARD_WIDTH * 0.31, height: CARD_WIDTH * 0.27},
        ]}
      />
      <Text
        style={[
          styles.course1,
          styles.coursePosition,
          styles.course1Typo,
          {left: CARD_WIDTH * 0.05},
        ]}>
        Course 1
      </Text>
      <Text
        style={[
          styles.courseDetails,
          styles.coursePosition,
          {left: CARD_WIDTH * 0.05},
        ]}>
        Course details
      </Text>
      <View style={[styles.ellipseParent, {left: CARD_WIDTH * 0.67}]}>
        {/* <Image
          style={[styles.groupChildLayout, styles.backgroundPosition]}
          resizeMode="cover"
          source={require('../assets/ellipse-2.png')}
        /> */}
        <Text
          style={[
            styles.feedback,
            styles.coursePosition,
            styles.course1Typo,
          ]}>
          Feedback
        </Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Color.mintcream,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: 'absolute',
  },
  coursePosition: {
    textAlign: 'left',
    position: 'absolute',
  },
  course1Typo: {
    fontFamily: FontFamily.alatsiRegular,
    textAlign: 'left',
  },
  groupChildLayout: {
    position: 'absolute',
  },
  background2: {
    top: CARD_WIDTH * 0.05,
    left: CARD_WIDTH * 0.05,
    backgroundColor: Color.limegreen,
    position: 'absolute',
  },
  course1: {
    top: CARD_WIDTH * 0.07,
    fontSize: FontSize.size_smi,
    color: Color.midnightblue_100,
  },
  courseDetails: {
    top: CARD_WIDTH * 0.12,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.alefRegular,
    color: Color.midnightblue_200,
    textAlign: 'left',
  },
  feedback: {
    top: CARD_WIDTH * 0.02,
    fontSize: FontSize.size_xs,
    color: '#eb7100',
  },
  ellipseParent: {
    top: CARD_WIDTH * 0.7,
    position: 'absolute',
  },
  feedbackItem: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.white,
    overflow: 'hidden',
    marginBottom: 16,
  },
});

export default StudentCardTwo;