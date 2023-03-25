import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import BottomNavbar from '../components/navbar/BottomNavbar';
import StudentList from './feedback/StudentList';
import FeedbackList from './feedback/FeedbackList';

const Home = () => {
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

export default Home;
