import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ComponentOne from './components/ComponentOne';
import StudentCardTwo from './src/components/feedback/StudentCardTwo';
// import StudentCardThree from './src/components/feedback/StudentCard';
import StudentList from './src/components/feedback/StudentList';
import NoticeList from './src/components/notices/NoticeList';
import ViewNotice from './src/components/notices/ViewNotice';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="StudnetCardTwo" component={StudentCardTwo} /> */}
        {/* <Stack.Screen name="StudnetCard" component={StudentCard} /> */}
        {/* <Stack.Screen name="StudentCardThree" component={StudentCardThree} /> */}
        {/* <Stack.Screen name="StudentList" component={StudentList} /> */}
        {/* <Stack.Screen name="Home" component={ComponentOne} /> */}
        {/* <Stack.Screen name="NoticeList" component={NoticeList} /> */}
        <Stack.Screen name="ViewNotice" component={ViewNotice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
