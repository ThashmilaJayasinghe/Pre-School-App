import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import BottomNavbar from '../components/navbar/BottomNavbar';
import StudentList from './feedback/StudentList';
import FeedbackList from './feedback/FeedbackList';
import TeacherHome from './TeacherHome';
import {FontSize, Color, FontFamily, Border} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const backgroundUrl =
  'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/background.png?alt=media&token=a9650c2e-8b8c-46f8-9bd5-e7419fc6e77d';

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      {/* scroll view used because of the BottomNavbar visibility */}

      {/* <ImageBackground source={{uri: backgroundUrl}} resizeMode="cover">
        <ScrollView>
          <StudentList />
          <FeedbackList />
        </ScrollView>
      </ImageBackground> */}
      {/* <BottomNavbar /> */}

      <ImageBackground
        style={{flex: 1}}
        source={{uri: backgroundUrl}}
        resizeMode="cover">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#5FCF1B',
              height: 100,
              width: 100,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 18}}>Parent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#5FCF1B',
              height: 100,
              width: 100,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 10,
            }}>
            <Text
              style={{fontSize: 18}}
              onPress={() => navigation.navigate('TeacherHome')}>
              Teacher
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <BottomNavbar />

      {/* <TeacherHome/> */}
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
    resizeMode: 'contain',
  },
});

export default Home;
