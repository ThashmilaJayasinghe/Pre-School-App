import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import KidProfile from './KidProfile';

const SaveKid = ({isModalVisible, setModalVisible, toggleModal}) => {
  const [kidId, setKidId] = useState('');
  const [name, setName] = useState('');
  const [kidClass, setKidClass] = useState('');

  return (
    <View style={{flex: 1}}>
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
            <Text style={{fontSize: 17, fontWeight: 500}}>Add New Kid</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <KidProfile size={100} />
          </View>

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
                // onPress={addKid}
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
    </View>
  );
};

export default SaveKid;
