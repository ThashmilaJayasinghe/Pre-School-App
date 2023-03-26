import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import ComponentOne from './components/ComponentOne';

// import StudentCardThree from './src/components/feedback/StudentCard';
// import StudentList from './src/components/feedback/StudentList';
// import InquiryForm from './src/pages/inquiry/InquiryForm';
//import StudentCardTwo from './src/components/feedback/StudentCardTwo';
// import StudentCardThree from './src/components/feedback/StudentCard';
// import StudentList from './src/components/feedback/StudentList';
// import InquiryForm from './src/pages/inquiry/InquiryForm';
// import MyInquiryList from './src/pages/inquiry/MyInquiryList';
import MyInquiryList from './src/pages/inquiry/MyInquiryList';

// import StudentList from './src/pages/feedback/StudentList';
// import Background from './src/assets/Background';
// import Home from './src/pages/Home';

import InputModal from './src/components/feedback/InputModal';
import FeedbackList from './src/pages/feedback/FeedbackList';

import TeacherClass from './src/pages/inquiry/TeacherClass';
import TeacherClassCard from './src/components/Inquiry/TeacherClassCard';
import TeacherFirstInquiryPage from './src/pages/inquiry/TeacherFirstInquiryPage';

// import NoticeList from './src/pages/notices/NoticeList';
import ViewNotice from './src/pages/notices/ViewNotice';
import NoticeListTeacher from './src/pages/notices/NoticeListTeacher';
import UpdateNoticeModal from './src/components/notices/UpdateModal';
import InputNoticeModal from './src/components/notices/InputModal';
import DeleteNoticeModal from './src/components/notices/DeleteModal';
import Home from './src/pages/Home';
import NoticeList from './src/pages/notices/NoticeList';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="InquiryForm" component={InquiryForm} /> */}
        {/* <Stack.Screen name="InputModal" component={InputModal} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="StudnetCardTwo" component={StudentCardTwo} /> */}
        {/* <Stack.Screen name="StudnetCard" component={StudentCard} /> */}
        {/* <Stack.Screen name="StudentCardThree" component={StudentCardThree} /> */}
        {/* nnnn */}
        {/* {/* <Stack.Screen name="StudentList" component={StudentList} /> */}
        {/* <Stack.Screen name="Home" component={ComponentOne} /> */}
        {/* {/* <Stack.Screen name="InquiryForm" component={InquiryForm} /> */}

        {/* <Stack.Screen name="MyInquiryList" component={MyInquiryList} /> */}
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="TeacherFirstInquiryPage"
          component={TeacherFirstInquiryPage}
        />

        {/* <Stack.Screen name="StudentList" component={StudentList} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Home" component={FeedbackList} /> */}
        {/* <Stack.Screen name="TeacherClassCard" component={TeacherClassCard} /> */}
        <Stack.Screen name="TeacherClass" component={TeacherClass} />
        <Stack.Screen name="NoticeListTeacher" component={NoticeListTeacher} />
        <Stack.Screen name="ViewNotice" component={ViewNotice} />
        <Stack.Screen name="DeleteNoticeModal" component={DeleteNoticeModal} />
        <Stack.Screen name="InputNoticeModal" component={InputNoticeModal} />
        <Stack.Screen name="UpdateNoticeModal" component={UpdateNoticeModal} />
        <Stack.Screen name="NoticeList" component={NoticeList} />
        {/* <Stack.Screen name="KidsList" component={KidsList} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
