import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Textarea from 'react-native-textarea';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontFamily} from '../../GlobalStyles';

// firebase
import firestore from '@react-native-firebase/firestore';
const feedbackCollection = firestore().collection('feedbacks');

const UpdateModal = ({
  comment,
  setComment,
  studentClass,
  studentName,
  studentId,
  feedbackId,
  isModalVisible,
  setModalVisible,
  setIsFeedbackChanged,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onUpdate = async () => {
    if (comment.length > 5) {
      const timestamp = firestore.Timestamp.fromDate(new Date());

      const newFeedback = {
        name: studentName,
        class: studentClass,
        studentId: studentId,
        feedbackId: feedbackId,
        comment: comment,
        timestamp: timestamp,
      };

      await feedbackCollection
        .doc(feedbackId)
        .set(newFeedback, {merge: true})
        .then(() => console.log('Update successfully'))
        .catch(err => console.log('Update unsuccessfully'));

      setIsFeedbackChanged(prev => !prev);
      setErrorMessage('');
      setModalVisible(false);
    } else {
      setErrorMessage('Your comment is too short');
      setModalVisible(true);
    }
  };

  return (
    <View style={{flex: 0}}>
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
            style={{
              marginTop: 13,
              alignItems: 'flex-end',
              paddingRight: 13,
              paddingBottom: 10,
              borderBottomColor: '#d6d6d6',
              borderBottomWidth: 1,
            }}
            onPress={() => setModalVisible(!isModalVisible)}>
            <AntDesign name="closesquare" size={27} color="#F47B0B" />
          </TouchableOpacity>

          <ScrollView keyboardShouldPersistTaps="always">
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Text style={{fontSize: 17, fontWeight: 500}}>
                Update Feedback
              </Text>
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
                <Text style={{color: '#545FC3'}}> : {studentName}</Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text style={{color: '#0E1979'}}>Student ID</Text>
                <Text style={{color: '#545FC3'}}> : {studentId}</Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <Text style={{color: '#0E1979'}}>Student Class</Text>
                <Text style={{color: '#545FC3'}}> : {studentClass}</Text>
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
                defaultValue={comment}
                onChangeText={setComment}
                maxLength={120}
                placeholder={'Comment here ...'}
                placeholderTextColor={'#a7a7a8'}
                underlineColorAndroid={'transparent'}
              />

              {/* error message */}
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
                }}
                onPress={onUpdate}>
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

export default UpdateModal;
