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

const UpdateKid = ({
  toggleUpdateModal,
  setUpdateModalVisible,
  isModalVisible,
  kid,
  kids,
}) => {
  const [kidId, setKidId] = useState(kid.id);
  const [name, setName] = useState(kid.name);
  const [kidClass, setKidClass] = useState(kid.class);

  const updateKid = () => {
    const newKid = {
      id: kidId,
      name: name,
      class: kidClass,
    };

    kids.push(newKid);
    setUpdateModalVisible(false);
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
              />
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
