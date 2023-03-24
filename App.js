import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ComponentOne from './components/ComponentOne';

import StudentCardTwo from './src/components/feedback/StudentCardTwo';
// import StudentCardThree from './src/components/feedback/StudentCard';
import StudentList from './src/components/feedback/StudentList';
import InquiryForm from './src/pages/inquiry/InquiryForm';

import StudentList from './src/pages/feedback/StudentList';
import Background from './src/assets/Background';
import Home from './src/pages/Home';

import InputModal from './src/components/feedback/InputModal';
import FeedbackList from './src/pages/feedback/FeedbackList';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="StudnetCardTwo" component={StudentCardTwo} /> */}
        {/* <Stack.Screen name="StudnetCard" component={StudentCard} /> */}
        {/* <Stack.Screen name="StudentCardThree" component={StudentCardThree} /> */}
        <Stack.Screen name="StudentList" component={StudentList} />
        {/* <Stack.Screen name="Home" component={ComponentOne} /> */}

        <Stack.Screen name="InquiryForm" component={InquiryForm} />

        {/* <Stack.Screen name="StudentList" component={StudentList} /> */}
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Home" component={FeedbackList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
