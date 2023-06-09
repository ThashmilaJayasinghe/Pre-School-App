import * as React from "react";
import {useState, useRef} from 'react';
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import UpdateModal from '../../components/notices/UpdateModal';
import DeleteModal from '../../components/notices/DeleteModal';

const coverImg = 'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/notice.png?alt=media&token=b3ae51cc-4db7-46bc-ad14-1159cbe05153'

const NoticeCardTeacher = ({notice}) => {
  const [noticeId, setNoticeId] = useState(notice.id);
  const [noticeType, setNoticeType] = useState(notice.type);
  const [noticeTitle, setNoticeTitle] = useState(notice.title);
  const [noticeBody, setNoticeBody] = useState(notice.body);
  const [noticeDate, setNoticeDate] = useState(notice.date);  
  const [isModalVisible, setModalVisible] = useState(false);
  const bottomSheetRef = useRef();
  const navigation = useNavigation();

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  
  return (
    <View style={[styles.noticeItem]}>
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
              onPress={() =>setModalVisible(true)}>
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
              onPress = {openBottomSheet}
              >
              <MaterialIcon name="delete" size={23} color="#F47B0B" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.course1Parent}>
          <Text
            style={[styles.course1, styles.courseFlexBox, styles.course1Typo]}>
            {noticeTitle}
          </Text>
          <Text style={[styles.courseDetails, styles.courseFlexBox]}>
            {noticeDate}
          </Text>
        </View>
        <View style={styles.background1}>
          <Image
            style={styles.coverImage}
            // source={require("../../assets/notice.png")}
            source={{uri: coverImg}}
          />
        </View>
      </View>

      <UpdateModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        noticeId={noticeId}
        noticeType={noticeType}
        noticeTitle={noticeTitle}
        setNoticeTitle={setNoticeTitle}
        noticeBody={noticeBody}
        setNoticeBody={setNoticeBody}
        noticeDate={noticeDate}
      />

<DeleteModal bottomSheetRef = {bottomSheetRef} noticeId = {noticeId} />
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
  notice: {
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
    top: 34,
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
    alignItems: 'center',
  },
  noticeItem: {
    width: '100%',
    height: 126,
    alignItems: 'center',
  },
  coverImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
});

export default NoticeCardTeacher;
