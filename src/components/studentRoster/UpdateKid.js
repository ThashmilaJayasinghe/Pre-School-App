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
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker';

const UpdateKid = ({
  toggleUpdateModal,
  setUpdateModalVisible,
  isModalVisible,
  kid,
  kids,
}) => {
  const [kidId, setKidId] = useState(kid.kidId);
  const [name, setName] = useState(kid.name);
  const [kidClass, setKidClass] = useState(kid.class);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageClass, setErrorMessageClass] = useState('');

  const updateKid = () => {
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

    const newKid = {
      kidId: kidId,
      name: name,
      class: kidClass,
    };

    if (flag) {
      firestore()
        .collection('kids')
        .doc(kid.id || '')
        .set(newKid, {merge: true})
        .then(async data => {
          console.log('update successful');

          setErrorMessageClass('');
          setErrorMessageName('');
          setUpdateModalVisible(false);
        })
        .catch(error => {
          setErrorMessageClass('');
          setErrorMessageName('');
          console.log('update unsuccessful');
          setUpdateModalVisible(false);
        });
    }

    kids.push(newKid);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setUpdateModalVisible(false)}
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
            onPress={toggleUpdateModal}>
            <AntDesign name="closesquare" size={27} color="#F47B0B" />
          </TouchableOpacity>

          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Text style={{fontSize: 17, fontWeight: 500}}>Update Kid</Text>
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
                readOnly={true}
                value={kidId}
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
                value={name}
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
                value={kidClass}
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
                onPress={updateKid}
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
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateKid;
