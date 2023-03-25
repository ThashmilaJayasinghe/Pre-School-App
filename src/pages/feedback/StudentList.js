import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import StudentCard from '../../components/feedback/StudentCard';
import Background from '../../assets/Background';
import FeatherIcon from 'react-native-vector-icons/Feather';
import BottomNavbar from '../../components/navbar/BottomNavbar';
import firestore from '@react-native-firebase/firestore';

const studentListArray = [
  {id: '01', name: 'Kamal', class: 'Class A'},
  {id: '02', name: 'Nimal', class: 'Class B'},
  {id: '03', name: 'Sunimal', class: 'Class D'},
  {id: '04', name: 'Bimal', class: 'Class A'},
  {id: '05', name: 'John', class: 'Class E'},
  {id: '06', name: 'Mark', class: 'Class D'},
];

const kidsCollection = firestore().collection('kids');

const StudentList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentList, setStudentList] = useState(studentListArray);

  useEffect(() => {
    async function getStudentData() {
      const subscriber = firestore();
      await kidsCollection.get().then(querySnapshot => {
        setStudentList(querySnapshot);
        const kids = [];

        querySnapshot.forEach(documentSnapshot => {
          kids.push({
            id: documentSnapshot.kidId,
            ...documentSnapshot.data(),
          });
        });

        setStudentList(kids);
      });

      return () => subscriber();
    }
    getStudentData();
  }, []);

  console.log(studentList);

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

      {studentList.length > 0 && (
        <ScrollView style={{marginBottom: 50}}>
          {studentList.map((student, idx) => (
            <StudentCard key={student.kidId} student={student} />
          ))}
        </ScrollView>
      )}

      <View style={{flex: 1}}>
        {feedbackList.length == 0 && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <AntDesign name="warning" size={60} />
            <Text style={{fontSize: 18, fontWeight: 500}}>Oops!</Text>
            <Text style={{fontSize: 15}}>
              It seems like you don't have any kids
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default StudentList;
