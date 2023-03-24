import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import KidCard from './KidCard';
import {Color, Border, FontFamily, FontSize} from '../../GlobalStyles';

const studentList = [
  {id: '01', name: 'Kamal', class: 'Class A'},
  {id: '02', name: 'Nimal', class: 'Class B'},
  {id: '03', name: 'Sunimal', class: 'Class D'},
  {id: '04', name: 'Bimal', class: 'Class A'},
  {id: '05', name: 'John', class: 'Class E'},
  {id: '06', name: 'Mark', class: 'Class D'},
  {id: '07', name: 'Sunimal', class: 'Class D'},
  {id: '08', name: 'Bimal', class: 'Class A'},
  {id: '09', name: 'John', class: 'Class E'},
  {id: '10', name: 'Mark', class: 'Class D'},
];

const KidsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [state, setState] = useState(studentList);

  useEffect(() => {
    fetchKids();
  }, [searchQuery]);

  const fetchKids = () => {
    if (searchQuery.trim()) {
      let filteredStudentList = studentList.filter(item => {
        item.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      setState(filteredStudentList);
    } else {
      setState(studentList);
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#FBF8EB',
      }}>
      {/* search bar */}
      <Text>Kid List</Text>

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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginRight: '8%',
          marginTop: '5%',
          marginBottom: '5%',
        }}>
        <TouchableOpacity
          style={{
            width: '30%',
            backgroundColor: Color.limegreen,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}
          onPress={() => alert('Button pressed')}>
          <Text
            style={{
              fontFamily: 'Alatsi',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 20,
              color: '#FFFFFF',
            }}>
            New Kid ?
          </Text>
        </TouchableOpacity>
        {/* <Button title="New Kid ? " borderRadius="50" /> */}
      </View>

      <ScrollView>
        {state.map((student, idx) => (
          <KidCard key={student.id} student={student} />
        ))}
      </ScrollView>
    </View>
  );
};

export default KidsList;
