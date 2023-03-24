import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ComponentOne from './components/ComponentOne';

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
        {/* <Stack.Screen name="StudentList" component={StudentList} /> */}
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Home" component={FeedbackList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
