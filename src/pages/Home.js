import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import BottomNavbar from '../components/navbar/BottomNavbar';
import StudentList from './feedback/StudentList';
import FeedbackList from './feedback/FeedbackList';
import TeacherHome from './TeacherHome';

const backgroundUrl =
  'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/background.png?alt=media&token=a9650c2e-8b8c-46f8-9bd5-e7419fc6e77d';

const Home = () => {
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
            <Text style={{fontSize: 18}}>Teacher</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <BottomNavbar />

      {/* <TeacherHome/> */}
    </>
  );
};

export default Home;
