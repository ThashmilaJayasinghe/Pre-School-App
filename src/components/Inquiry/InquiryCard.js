import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState, useRef} from 'react';
import {Border, Color, FontFamily, FontSize} from '../../GlobalStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteInquiry from './DeleteInquiry';
import UpdateInquiry from './UpdateInquiry';

const inq2Uri = 'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/KenuriImages%2F104-1049657_pbl-investigation-laboratory-investigate-cartoon-hd-png-download-removebg-preview.png?alt=media&token=53e6f570-6ff1-41a4-a45b-6ea5152b8fc7'

const InquiryCard = ({inquiry, onDelete, inquiries}) => {
  const [id, setId] = useState(inquiry.id);
  const [title, setTitle] = useState(inquiry.title);
  const [date, setDate] = useState(inquiry.date);
  const [time, setTime] = useState(inquiry.time);

  const bottomSheetRef = useRef();

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={[styles.inquiryItem]}>
      <View style={styles.backgroundLayout}>
        <View
          style={[
            styles.background,
            styles.backgroundLayout,
            styles.backgroundShadowBox,
          ]}
        />
        <View style={styles.groupWrapper}>
          <View style={styles.groupChildLayout}>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderRadius: 50,
                backgroundColor: '#F0DA15',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={toggleModal}>
              <MaterialIcon name="edit" size={23} color="#F47B0B" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderRadius: 50,
                backgroundColor: '#F0DA15',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={openBottomSheet}>
              <MaterialIcon name="delete" size={23} color="#F47B0B" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.course1Parent}>
          <Text
            style={[styles.course1, styles.courseFlexBox, styles.course1Typo]}>
            {title}
          </Text>
          <Text style={[styles.courseDetails, styles.courseFlexBox]}>
            {date} : {time}
          </Text>
        </View>
        {/* <View style={styles.background1} /> */}
        <View style={styles.background1}>
          {inq2Uri && <Image size style = {{flex: 1}} resizeMode = 'center' source={{uri: inq2Uri}} />}
        </View>

      </View>
      <DeleteInquiry
        bottomSheetRef={bottomSheetRef}
        inquiry={inquiry}
        inquiryID={id}
      />
      <UpdateInquiry
        isModalVisible={isModalVisible}
        toggleUpdateModal={toggleModal}
        setUpdateModalVisible={setIsModalVisible}
        updateinquiry={inquiry}
        inquiryID={id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    backgroundColor: Color.mintcream,
    borderRadius: Border.br_lg,
  },
  backgroundLayout: {
    height: 112,
    width: 329,
    // backgroundColor: 'pink'
  },
  groupChildLayout: {
    left: 10,
    height: 26,
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseFlexBox: {
    textAlign: 'left',
    position: 'absolute',
  },
  course1Typo: {
    fontFamily: FontFamily.alatsiRegular,
    textAlign: 'left',
  },
  background: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  groupChild: {
    left: 0,
    top: 0,
    position: 'absolute',
  },
  feedback: {
    top: 4,
    left: 20,
    fontSize: FontSize.size_smi,
    color: '#eb7100',
  },
  groupWrapper: {
    top: 70,
    left: 224,
    height: 35,
    justifyContent: 'space-between',
    position: 'absolute',
    alignItems: 'center',
  },
  course1: {
    // left: 4,
    fontSize: FontSize.size_studentCard_name,
    color: Color.midnightblue_100,
    top: 0,
  },
  courseDetails: {
    top: 22,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.alefRegular,
    color: Color.midnightblue_200,
    left: 0,
  },
  course1Parent: {
    top: 21,
    left: 153,
    width: '50%',
    height: '40%',
    position: 'absolute',
  },
  background1: {
    top: 15,
    left: 18,
    backgroundColor: Color.limegreen,
    width: 102,
    height: 83,
    position: 'absolute',
    borderRadius: Border.br_lg,
  },
  inquiryItem: {
    // flex: 1,
    // flex: 0.5,
    width: '100%',
    height: 126,
    // justifyContent: "center",
    alignItems: 'center',
  },
});

export default InquiryCard;
