import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ComponentOne from './components/ComponentOne';

// import StudentCardTwo from './src/components/feedback/StudentCardTwo';
// import StudentCardThree from './src/components/feedback/StudentCard';
// import StudentList from './src/components/feedback/StudentList';
import InquiryForm from './src/pages/inquiry/InquiryForm';

import StudentList from './src/pages/feedback/StudentList';
import Background from './src/assets/Background';
import Home from './src/pages/Home';

import InputModal from './src/components/feedback/InputModal';
import FeedbackList from './src/pages/feedback/FeedbackList';

import NoticeList from './src/pages/notices/NoticeList';
import ViewNotice from './src/pages/notices/ViewNotice';
import NoticeListTeacher from './src/pages/notices/NoticeListTeacher';
import UpdateNoticeModal from './src/components/notices/UpdateModal';
import InputNoticeModal from './src/components/notices/InputModal';
import DeleteNoticeModal from './src/components/notices/DeleteModal';

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
        {/* <Stack.Screen name="InquiryForm" component={InquiryForm} /> */}

        {/* <Stack.Screen name="StudentList" component={StudentList} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Home" component={FeedbackList} /> */}
        <Stack.Screen name="ViewNotice" component={ViewNotice} />
        <Stack.Screen name="NoticeListTeacher" component={NoticeListTeacher} />
        <Stack.Screen name="DeleteNoticeModal" component={DeleteNoticeModal} />
        <Stack.Screen name="InputNoticeModal" component={InputNoticeModal} />
        <Stack.Screen name="UpdateNoticeModal" component={UpdateNoticeModal} />
        <Stack.Screen name="NoticeList" component={NoticeList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
