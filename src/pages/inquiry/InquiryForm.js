import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import {Timestamp} from 'firebase/firestore';

const inquiryCollection = firestore().collection('inquiries');

const InquiryForm = ({isModalVisible, setIsModalVisible, studentId}) => {
  // const [isVisible, setIsVisible] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [title, setTitle] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    // Do something with the data (e.g. submit to server)
    // onSubmit({studentName, studentEmail, title, inquiry, selectedClass});
    if (inquiry.length > 5) {
      const studentId = '4YWKGyMNBq8vXNFANwuY';
      const currentDate = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const dateString = currentDate.toLocaleDateString('en-US', options);
      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const timeString = currentDate.toLocaleTimeString('en-US', timeOptions);
      setDate(dateString);
      setTime(timeString);
      inquiryCollection
        .add({
          studentId: studentId,
          studentName: studentName,
          studentEmail: studentEmail,
          title: title,
          inquiry: inquiry,
          class: selectedClass,
          date: dateString,
          time: timeString,
        })
        .then(() => {
          console.log('Inquiry Added');
        })
        .catch(err => console.log('Something went wrong'));

      setErrorMessage('');
      setIsModalVisible(false);

      setStudentName('');
      setStudentEmail('');
      setTitle('');
      setInquiry('');
      setSelectedClass('');
    } else {
      setErrorMessage('Your inquiry massage is too short');
    }

    console.log('Student Name:', studentName);
    console.log('Student ID:', studentEmail);
    console.log('Title:', title);
    console.log('Feedback:', inquiry);
    console.log('SelectedClass:', selectedClass);
    console.log('hi');
  };

  return (
    <Modal
      visible={isModalVisible}
      animation="slide"
      onBackdropPress={() => setIsModalVisible(false)}
      onRequestClose={() => setIsModalVisible(false)}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <TouchableOpacity
                style={{marginTop: 13, marginRight: 13, alignItems: 'flex-end'}}
                onPress={() => setIsModalVisible(!isModalVisible)}>
                <AntDesign name="closesquare" size={27} color="#F47B0B" />
              </TouchableOpacity>
              <Text style={styles.labelTxt}>Student Name:</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter student name"
                value={studentName}
                onChangeText={setStudentName}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.labelTxt}>Class:</Text>
              <Picker
                selectedValue={selectedClass}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedClass(itemValue)
                }
                style={styles.inputStyle}
                itemStyle={styles.pickerItem}
                value={selectedClass}>
                <Picker.Item label="Enter student's Class" value="Class A" />
                <Picker.Item label="Class A" value="Class A" />
                <Picker.Item label="Class B" value="Class B" />
                <Picker.Item label="Class C" value="Class C" />
                <Picker.Item label="Class D" value="Class D" />
              </Picker>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.labelTxt}>Eamil Address:</Text>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Eamil Address"
                value={studentEmail}
                onChangeText={setStudentEmail}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.labelTxt}>Title:</Text>
              <Picker
                selectedValue={title}
                onValueChange={(itemValue, itemIndex) => setTitle(itemValue)}
                style={styles.inputStyle}
                itemStyle={styles.pickerItem}
                value={title}>
                <Picker.Item label="Enter inquiry title" value="Others" />
                <Picker.Item label="Home Work" value="Home Work" />
                <Picker.Item label="Sports" value="Sports" />
                <Picker.Item label="Music" value="Music" />
                <Picker.Item label="Dancing" value="Dancing" />
                <Picker.Item label="Health" value="Health" />
                <Picker.Item label="Others" value="Others" />
              </Picker>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.labelTxt}>Inquiry:</Text>
              <TextInput
                multiline={true}
                numberOfLines={5}
                style={styles.inputStyle}
                placeholder="Enter feedback"
                value={inquiry}
                onChangeText={setInquiry}
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

            <TouchableOpacity
              style={styles.submitBtn}
              title="Submit"
              onPress={handleSubmit}>
              <Text style={styles.submitBtnTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default InquiryForm;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundClor: '#2C3333',
    paddingHorizontal: 15,
  },
  formContainer: {
    backgroundColor: '#F5EDDC',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  title: {
    color: '#16213E',
    fontSize: 26,
    fontWeight: '400',
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  pickerItem: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  labelTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  errorTxt: {
    fontSize: 12,
    color: '#FF0D10',
  },
  submitBtn: {
    backgroundColor: '#5FCF1B',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  submitBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
});
