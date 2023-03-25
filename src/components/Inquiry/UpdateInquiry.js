import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UpdateInquiry = ({
  toggleUpdateModal,
  setUpdateModalVisible,
  isModalVisible,
  inquiryOne,
  inquiries,
}) => {
  const [studentName, setStudentName] = useState(inquiryOne.studentName);
  const [studentEmail, setStudentEmail] = useState(inquiryOne.studentEmail);
  const [title, setTitle] = useState(inquiryOne.title);
  const [inquiry, setInquiry] = useState(inquiryOne.inquiry);
  const [selectedClass, setSelectedClass] = useState(inquiryOne.selectedClass);

  const updateInquiry = () => {
    const updateInquiry = {
      studentName: studentName,
      studentEmail: studentEmail,
      title: title,
      inquiry: inquiry,
      selectedClass: selectedClass,
    };

    inquiries.push(updateInquiry);
    setUpdateModalVisible(false);
  };

  return (
    <Modal
      visible={isModalVisible}
      animation="slide"
      onBackdropPress={() => setUpdateModalVisible(false)}
      onRequestClose={() => setUpdateModalVisible(false)}>
      <View style={styles.wrapper}>
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <TouchableOpacity
              style={{marginTop: 13, marginRight: 13, alignItems: 'flex-end'}}
              onPress={toggleUpdateModal}>
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
          </View>

          <TouchableOpacity
            style={styles.submitBtn}
            title="Submit"
            onPress={updateInquiry}>
            <Text style={styles.submitBtnTxt}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UpdateInquiry;

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
