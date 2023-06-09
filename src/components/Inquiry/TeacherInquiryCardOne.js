import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Border, Color, FontFamily, FontSize} from '../../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const TeacherInquiryCardOne = ({Cname}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.inquiryTrcItem]}>
      <View style={styles.backgroundLayout}>
        <View
          style={[
            styles.background,
            styles.backgroundLayout,
            styles.backgroundShadowBox,
          ]}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TeacherClass', {Cname: Cname});
          }}>
          <View style={styles.background1} />
          <View>
            <Text style={styles.courseDetails}>{Cname}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeacherInquiryCardOne;

const styles = StyleSheet.create({
  //kk
  backgroundShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    backgroundColor: Color.mintcream,
    borderRadius: Border.br_lg,
  },
  //kk
  backgroundLayout: {
    height: 135,
    width: 135,
    // backgroundColor: 'pink'
  },
  //lll
  background: {
    left: 0,
    top: 0,
    position: 'absolute',
  },

  courseDetails: {
    justifyContent: 'center',
    top: 48,
    marginStart: 25,
    position: 'absolute',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: FontFamily.alefRegular,
    color: Color.blue400,
    left: 0,
  },

  background1: {
    top: 17,
    left: 17,
    right: 15,
    bottom: 15,
    backgroundColor: Color.limegreen,
    width: 102,
    height: 102,
    position: 'absolute',
    borderRadius: Border.br_lg,
  },
  //kkk
  inquiryTrcItem: {
    // flex: 1,
    // flex: 0.5,
    width: '100%',
    height: 126,
    // justifyContent: "center",
    alignItems: 'center',
  },
});
