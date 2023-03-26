import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InquiryView = ({
  toggleModal,
  setModalVisible,
  isModalVisible,
  viewinquiry,
  inquiryID,
}) => {
  const [studentName, setStudentName] = useState(viewinquiry.studentName);
  const [studentEmail, setStudentEmail] = useState(viewinquiry.studentEmail);
  const [title, setTitle] = useState(viewinquiry.title);
  const [inquiry, setInquiry] = useState(viewinquiry.inquiry);
  const [selectedClass, setSelectedClass] = useState(viewinquiry.class);

  const Teacherviewinquiry = () => {
    firestore()
      .collection('inquiries')
      .doc(inquiryID)
      .get()
      .then(data => {
        console.log('View successful');
        setModalVisible(false);
      })
      .catch(error => {
        console.log('View unsuccessful');
        setModalVisible(false);
      });

    //updateInquiry.push(updateInquiry);
    setModalVisible(false);
  };

  useEffect(() => {
    Teacherviewinquiry();
  }, []);
  return (
    <Modal
      visible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.wrapper}>
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <TouchableOpacity
              style={{marginTop: 13, marginRight: 13, alignItems: 'flex-end'}}
              onPress={toggleModal}>
              <AntDesign name="closesquare" size={27} color="#F47B0B" />
            </TouchableOpacity>
            <Text style={styles.labelTxt}>Student Name:</Text>
            <Text style={styles.detailTxt}>{studentName}</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.labelTxt}>Class:</Text>
            <Text style={styles.detailTxt}>{selectedClass}</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.labelTxt}>Eamil Address:</Text>
            <Text style={styles.detailTxt}>{studentEmail}</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.labelTxt}>Title:</Text>
            <Text style={styles.detailTxt}>{title}</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.labelTxt}>Inquiry:</Text>
            <Text style={styles.detailTxt}>{inquiry}</Text>
          </View>

          <TouchableOpacity style={styles.submitBtn} onPress={toggleModal}>
            <Text style={styles.submitBtnTxt}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InquiryView;

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
  inputWrapper: {
    marginBottom: 15,
  },
  labelTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailTxt: {
    fontSize: 18,
    marginBottom: 5,
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
