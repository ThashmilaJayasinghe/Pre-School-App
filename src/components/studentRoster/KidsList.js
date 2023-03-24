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
import SaveKid from './SaveKid';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DeleteKid from './Deleltekid';
import {Alert} from 'react-native/Libraries/Alert/Alert';

const studentList = [
  {id: '01', name: 'Kamal', class: 'Class A'},
  {id: '02', name: 'Nimal', class: 'Class B'},
  // {id: '03', name: 'Sunimal', class: 'Class D'},
  // {id: '04', name: 'Bimal', class: 'Class A'},
  // {id: '05', name: 'John', class: 'Class E'},
  // {id: '06', name: 'Mark', class: 'Class D'},
  // {id: '07', name: 'Sunimal', class: 'Class D'},
  // {id: '08', name: 'Bimal', class: 'Class A'},
  // {id: '09', name: 'John', class: 'Class E'},
  // {id: '10', name: 'Mark', class: 'Class D'},
];

const KidsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [state, setState] = useState(studentList);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
  const [kidId, setKidId] = useState('');
  const [name, setName] = useState('');
  const [kidClass, setKidClass] = useState('');

  const addKid = () => {
    const newKid = {
      id: kidId,
      name: name,
      class: kidClass,
    };

    studentList.push(newKid);
    setModalVisible(false);
  };

  const onDelete = () => {
    // const updatedKids = studentList.filter(item => item.id !== kidId);
    // studentList = updatedKids;
  };

  return (
    <>
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
            onPress={toggleModal}>
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
            <KidCard key={student.id} student={student} onDelete={onDelete} />
          ))}
        </ScrollView>
      </View>

      {/* //Modal */}

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{alignItems: 'center'}}>
        <View
          style={{
            flex: 0,
            backgroundColor: 'white',
            width: '90%',
            height: '80%',
            borderRadius: 20,
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            style={{marginTop: 13, marginRight: 13, alignItems: 'flex-end'}}
            onPress={toggleModal}>
            <AntDesign name="closesquare" size={27} color="#F47B0B" />
          </TouchableOpacity>

          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Text style={{fontSize: 17, fontWeight: 500}}>Save New Kid</Text>
          </View>
          {/* <KidPhoto /> */}
          <ScrollView>
            <View style={{margin: 20, maxHeight: 300}}>
              <Text
                style={{
                  fontFamily: 'Alatsi',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 15,
                  marginBottom: 10,
                  color: '#616161',
                }}>
                Kid's ID
              </Text>

              <TextInput
                onChangeText={setKidId}
                style={{
                  borderWidth: 1,
                  borderColor: '#D6D6D6',
                  borderRadius: 10,
                  opacity: 10,
                  padding: 5,
                  backgroundColor: '#e8e9eb',
                  fontSize: 14,
                  color: '#8d8d8f',
                }}
                placeholder={`Add kid's ID here ...`}
                placeholderTextColor={'#a7a7a8'}
                underlineColorAndroid={'transparent'}
              />
            </View>

            <View style={{margin: 20, maxHeight: 300}}>
              <Text
                style={{
                  fontFamily: 'Alatsi',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 15,
                  marginBottom: 10,
                  color: '#616161',
                }}>
                Name
              </Text>

              <TextInput
                onChangeText={setName}
                style={{
                  borderWidth: 1,
                  borderColor: '#D6D6D6',
                  borderRadius: 10,
                  opacity: 10,
                  padding: 5,
                  backgroundColor: '#e8e9eb',
                  fontSize: 14,
                  color: '#8d8d8f',
                }}
                placeholder={`Add kid's name here ...`}
                placeholderTextColor={'#a7a7a8'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View style={{margin: 20, maxHeight: 300}}>
              <Text
                style={{
                  fontFamily: 'Alatsi',
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: 15,
                  marginBottom: 10,
                  color: '#616161',
                }}>
                Class
              </Text>

              <TextInput
                onChangeText={setKidClass}
                style={{
                  borderWidth: 1,
                  borderColor: '#D6D6D6',
                  borderRadius: 10,
                  opacity: 10,
                  padding: 5,
                  backgroundColor: '#e8e9eb',
                  fontSize: 14,
                  color: '#8d8d8f',
                }}
                placeholder={`Add kid's class here ...`}
                placeholderTextColor={'#a7a7a8'}
                underlineColorAndroid={'transparent'}
              />
            </View>

            <View style={{alignItems: 'center', marginBottom: 20}}>
              <TouchableOpacity
                onPress={addKid}
                style={{
                  flex: 0,
                  width: 110,
                  borderRadius: 5,
                  backgroundColor: '#5FCF1B',
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#F7FF9C',
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default KidsList;
