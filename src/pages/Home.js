import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import BottomNavbar from '../components/navbar/BottomNavbar';
import StudentList from './feedback/StudentList';
import FeedbackList from './feedback/FeedbackList';

const backgroundUrl = 'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/background.png?alt=media&token=a9650c2e-8b8c-46f8-9bd5-e7419fc6e77d'

const Home = () => {
  return (
    <>
      {/* <View style = {{height: '100%', backgroundColor: 'red'}}> */}
      {/* scroll view used because of the BottomNavbar visibility */}
      {/* these are just only for testing */}
      <ImageBackground source={{uri: backgroundUrl}} resizeMode="cover" >
        <ScrollView>
          {/* <StudentList /> */}
          <FeedbackList />
        </ScrollView>
      </ImageBackground>
      <BottomNavbar />

      {/* </View> */}
    </>
  );
};

export default Home;
