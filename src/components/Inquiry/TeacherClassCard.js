import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Border, Color, FontFamily, FontSize} from '../../GlobalStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import InquiryView from '../../pages/inquiry/InquiryView';

const TeacherClassCard = ({inquiry}) => {
  const [id, setInID] = useState(inquiry.id);
  const [title, setTitle] = useState(inquiry.title);
  const [date, setDate] = useState(inquiry.date);
  const [time, setTime] = useState(inquiry.time);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <View style={[styles.inquiryItem]}>
          <View style={styles.backgroundLayout}>
            <View
              style={[
                styles.background,
                styles.backgroundLayout,
                styles.backgroundShadowBox,
              ]}
            />

            <View style={styles.course1Parent}>
              <Text
                style={[
                  styles.course1,
                  styles.courseFlexBox,
                  styles.course1Typo,
                ]}>
                {title}
              </Text>
              <Text style={[styles.courseDetails, styles.courseFlexBox]}>
                {date} : {time}
              </Text>
            </View>
            <View style={styles.background1} />
          </View>
        </View>
      </TouchableOpacity>
      <InquiryView
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        setModalVisible={setIsModalVisible}
        viewinquiry={inquiry}
        inquiryID={id}
      />
    </View>
  );
};

export default TeacherClassCard;

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
