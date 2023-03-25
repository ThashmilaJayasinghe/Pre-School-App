import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import KidCard from './KidCard';
import {Color} from '../../GlobalStyles';
import SaveKid from './SaveKid';
import FeatherIcon from 'react-native-vector-icons/Feather';

import firestore from '@react-native-firebase/firestore';

const KidsList = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [state, setState] = useState([]);
  const [checkState, setCheckState] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    fetchKids();
  }, [searchQuery]);

  useEffect(() => {
    if (checkState) {
      fetchKidsDB();
      setCheckState(false);
    }
  }, [checkState]);

  useEffect(() => {
    fetchKidsDB();
  }, []);

  const fetchKidsDB = () => {
    const kids = [];

    firestore()
      .collection('kids')
      .get()
      .then(data => {
        data.forEach(doc => {
          kids.push({id: doc.id, ...doc.data()});
        });

        setState(kids);
      })
      .catch(() => {
        console.log('ERROR');
      });
  };

  const fetchKids = () => {
    if (searchQuery.trim()) {
      let filteredStudentList = state.filter(item => {
        item.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      setState(filteredStudentList);
    } else {
      setState(state);
    }
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
        <Text>Kid List</Text>

        {/* search bar */}
        <View
          style={{
            alignItems: 'center',
            marginVertical: 15,
            top: 15,
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '5%',
            marginTop: '7%',
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
        </View>

        <ScrollView style={{marginBottom: 50}}>
          {state.map((student, idx) => (
            <KidCard
              key={student.id}
              student={student}
              onDelete={onDelete}
              kids={state}
              setCheckState={setCheckState}
            />
          ))}
        </ScrollView>
      </View>
      <SaveKid
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        toggleModal={toggleModal}
        // addKid={addKid}
        setCheckState={setCheckState}
      />
    </>
  );
};

export default KidsList;
