import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import BottomNavbar from '../components/navbar/BottomNavbar';
import StudentList from './feedback/StudentList';

const Home = () => {
  return (
    <View>
      {/* scroll view used because of the BottomNavbar visibility */}
      {/* these are just only for testing */}
      <ScrollView>
        <StudentList />
      </ScrollView>
      <BottomNavbar />
    </View>
  );
};

export default Home;
