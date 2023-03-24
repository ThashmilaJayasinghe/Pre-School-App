import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontFamily} from '../../GlobalStyles';
import Textarea from 'react-native-textarea';

const SaveKid = props => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0.0);

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={props.toggleModal} />

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
          <ScrollView>
            <TouchableOpacity
              style={{marginTop: 13, marginRight: 13, alignItems: 'flex-end'}}
              onPress={toggleModal}>
              <AntDesign name="closesquare" size={27} color="#F47B0B" />
            </TouchableOpacity>

            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 17, fontWeight: 500}}>Add Feedback</Text>
            </View>

            <View
              style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text
                  style={{
                    color: '#0E1979',
                    fontFamily: FontFamily.alefRegular,
                  }}>
                  Student Name
                </Text>
                <Text style={{color: '#545FC3'}}> : Lahiru</Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text style={{color: '#0E1979'}}>Student ID</Text>
                <Text style={{color: '#545FC3'}}> : L00342</Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text style={{color: '#0E1979'}}>Student Class</Text>
                <Text style={{color: '#545FC3'}}> : Class A</Text>
              </View>
            </View>
            <View style={{margin: 20, maxHeight: 300}}>
              <Text style={{marginBottom: 10}}>Comment</Text>

              <Textarea
                containerStyle={{
                  height: '70%',
                  padding: 5,
                  backgroundColor: '#e8e9eb',
                  borderWidth: 1,
                  borderColor: '#D6D6D6',
                  borderRadius: 10,
                  opacity: 10,
                }}
                style={{
                  textAlignVertical: 'top',
                  height: 170,
                  fontSize: 14,
                  color: '#8d8d8f',
                }}
                onChangeText={setComment}
                maxLength={120}
                placeholder={'Comment here ...'}
                placeholderTextColor={'#a7a7a8'}
                underlineColorAndroid={'transparent'}
              />
            </View>

            <View style={{alignItems: 'center', marginBottom: 20}}>
              <TouchableOpacity
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
                  Submit
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
