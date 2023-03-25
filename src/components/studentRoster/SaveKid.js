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
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker';

const KidsCollection = firestore().collection('kids');

const SaveKid = ({isModalVisible, setModalVisible, toggleModal}) => {
  const [kidId, setKidId] = useState('');
  const [name, setName] = useState('');
  const [kidClass, setKidClass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageClass, setErrorMessageClass] = useState('');

  const onSubmit = async () => {
    let flag = true;

    if (!kidId.trim()) {
      setErrorMessage(`Kid's Id cannot be empty`);
      flag = false;
    }

    if (!name.trim()) {
      setErrorMessageName(`Kid's name cannot be empty`);
      flag = false;
    }

    if (!kidClass.trim()) {
      setErrorMessageClass(`Kid's class cannot be empty`);
      flag = false;
    }

    if (flag) {
      KidsCollection.add({
        kidId: kidId,
        name: name,
        class: kidClass,
      })
        .then(() => {
          console.log('New kid added!');
          setErrorMessage('');
          setErrorMessageClass('');
          setErrorMessageName('');
          setModalVisible(false);
        })
        .catch(err => {
          setErrorMessage('');
          setErrorMessageClass('');
          setErrorMessageName('');
          setModalVisible(false);

          console.log('Something went wrong');
        });
    }
  };

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

              {errorMessage.length > 0 && (
                <View
                  style={{
                    marginTop: 8,
                    backgroundColor: '#facfcf',
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingHorizontal: 10,
                    height: 27,
                  }}>
                  <Text
                    style={{
                      color: '#e61212',
                    }}>
                    {errorMessage}
                  </Text>
                </View>
              )}
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

              {errorMessageName.length > 0 && (
                <View
                  style={{
                    marginTop: 8,
                    backgroundColor: '#facfcf',
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingHorizontal: 10,
                    height: 27,
                  }}>
                  <Text
                    style={{
                      color: '#e61212',
                    }}>
                    {errorMessageName}
                  </Text>
                </View>
              )}
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

              {/* <TextInput
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
              /> */}
              <Picker
                selectedValue={kidClass}
                onValueChange={(itemValue, itemIndex) => setKidClass(itemValue)}
                style={{
                  borderColor: '#16213E',
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                }}
                itemStyle={{color: '#333', fontSize: 18, fontWeight: 'bold'}}
                value={kidClass}>
                <Picker.Item label="Class A" value="Class A" />
                <Picker.Item label="Class B" value="Class B" />
                <Picker.Item label="Class C" value="Class C" />
                <Picker.Item label="Class D" value="Class D" />
              </Picker>

              {errorMessageClass.length > 0 && (
                <View
                  style={{
                    marginTop: 8,
                    backgroundColor: '#facfcf',
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingHorizontal: 10,
                    height: 27,
                  }}>
                  <Text
                    style={{
                      color: '#e61212',
                    }}>
                    {errorMessageClass}
                  </Text>
                </View>
              )}
            </View>

            <View style={{alignItems: 'center', marginBottom: 20}}>
              <TouchableOpacity
                onPress={onSubmit}
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
