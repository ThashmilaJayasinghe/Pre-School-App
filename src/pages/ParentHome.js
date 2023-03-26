import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import BottomNavbar from '../components/navbar/BottomNavbar';
import StudentList from './feedback/StudentList';
import FeedbackList from './feedback/FeedbackList';
import {FontSize, Color, FontFamily, Border} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const backgroundUrl =
  'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/background.png?alt=media&token=a9650c2e-8b8c-46f8-9bd5-e7419fc6e77d';
const bannerImg =
  'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/happy_child.png?alt=media&token=d93369ac-dfc8-49b8-a7dc-3c000a1b4d03';


const ParentHome = () => {
  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        style={styles.background}
        source={{uri: backgroundUrl}}
        resizeMode="cover">
        <ScrollView>
          {/* <StudentList /> */}
          {/* <FeedbackList /> */}
          <View style={styles.homeCover}>
            <Image style={styles.bannerImage} source={{uri: bannerImg}} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.buttonHome}
              onPress={() => navigation.navigate('FeedbackList')}>
              <Text style={styles.buttonText}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonHome}
              onPress={() => navigation.navigate('NoticeList')}>
              <Text style={styles.buttonText}>Notices</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.buttonHome}
              onPress={() => navigation.navigate('MyInquiryList')}>
              <Text style={styles.buttonText}>Inquiries</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonHome}
              onPress={() => navigation.navigate('KidsList')}>
              <Text style={styles.buttonText}>Students</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavbar />
    </>
  );
};

const styles = StyleSheet.create({
  home: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.floralwhite,
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%',
  },
  background: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: "center",
    height: '100%',
    // overflow: "hidden",
    width: '100%',
  },
  homeCover: {
    borderRadius: Border.br_21xl,
    top: 20,
    height: 225,
    width: '100%',
    backgroundColor: '#E66BA7',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: 30,
  },
  buttonHome: {
    width: 115,
    height: 115,
    borderRadius: 18,
    backgroundColor: Color.limegreen,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: Color.white,
    fontFamily: FontFamily.alatsiRegular,
    fontSize: FontSize.size_xl,
  },
  bannerImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

export default ParentHome;
