import {View, Text, ScrollView, TextInput, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import StudentCard from './StudentCard';

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
      <Text>StudentList</Text>

      <View
        style={{
          alignItems: 'center',
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
            elevation: 6,
            shadowOpacity: 1,
            height: 50,
            width: '90%',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        />
      </View>
      <ScrollView>
        {studentList.map((student, idx) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </ScrollView>
    </View>
  );
};

export default StudentList;
