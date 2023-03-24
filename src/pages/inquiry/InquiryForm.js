import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const InquiryForm = () => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [title, setTitle] = useState('');
  const [feedback, setFeedback] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSubmit = () => {
    console.log('Student Name:', studentName);
    console.log('Student ID:', studentId);
    console.log('Title:', title);
    console.log('Feedback:', feedback);
    // Do something with the data (e.g. submit to server)
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.labelTxt}>Student Name:</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter student name"
            value={studentName}
            onChangeText={text => setStudentName(text)}
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
            value={studentId}
            onChangeText={text => setStudentId(text)}
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
            value={feedback}
            onChangeText={text => setFeedback(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          title="Submit"
          onPress={handleSubmit}>
          <Text style={styles.submitBtnTxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
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
