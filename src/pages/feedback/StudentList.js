import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import StudentCard from '../../components/feedback/StudentCard';
import Background from '../../assets/Background';
import FeatherIcon from 'react-native-vector-icons/Feather';
import BottomNavbar from '../../components/navbar/BottomNavbar';

const studentList = [
  {id: '01', name: 'Kamal', class: 'Class A'},
  {id: '02', name: 'Nimal', class: 'Class B'},
  {id: '03', name: 'Sunimal', class: 'Class D'},
  {id: '04', name: 'Bimal', class: 'Class A'},
  {id: '05', name: 'John', class: 'Class E'},
  {id: '06', name: 'Mark', class: 'Class D'},
];

const StudentList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View
      style={{
        backgroundColor: '#FBF8EB',
      }}>
      {/* search bar */}
      <View
        style={{
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TextInput
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'rgba(236, 23, 138, 0.17)',
            shadowColor: 'rgba(236, 23, 138, 0.17)',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            // height: 10,
            shadowRadius: 6,
            borderRadius: 6,
            elevation: 0,
            shadowOpacity: 1,
            height: 40,
            width: '90%',
            paddingLeft: 10,
            paddingRight: 40,
            paddingHorizontal: 10,
            color: '#626262',
          }}
          placeholder="Search ..."
        />
        <FeatherIcon
          name="search"
          size={20}
          style={{
            top: 10,
            right: 30,
            position: 'absolute',
          }}
          color="#F47B0B"
        />
      </View>

      <ScrollView style={{marginBottom: 50}}>
        {studentList.map((student, idx) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </ScrollView>

      {/* <BottomNavbar/> */}
    </View>
  );
};

export default StudentList;
