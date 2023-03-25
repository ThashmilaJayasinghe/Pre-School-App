import {View, Text, ScrollView, TextInput, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ActionButton from 'react-native-action-button';
import NoticeCardTeacher from '../../components/notices/NoticeCardTeacher';
import AntDesign from 'react-native-vector-icons/AntDesign';

const noticeList = [
  {id: '01', title: 'Notice 1', date: '03 January'},
  {id: '02', title: 'Notice 2', date: '09 January'},
  {id: '03', title: 'Notice 3', date: '14 January'},
  {id: '04', title: 'Notice 4', date: '23 January'},
  {id: '05', title: 'Notice 5', date: '26 January'},
  {id: '06', title: 'Notice 6', date: '30 January'},
];

const NoticeListTeacher = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View
      style={{
        backgroundColor: '#FBF8EB',
      }}>
      {/* search bar */}

      <View
        style={{
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'rgba(236, 23, 138, 0.17)',
            shadowColor: 'rgba(236, 23, 138, 0.17)',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            // height: 10,
            shadowRadius: 6,
            borderRadius: 6,
            elevation: 6,
            shadowOpacity: 1,
            height: 50,
            width: '90%',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        />
      </View>
      <ScrollView>
        {noticeList.map((notice, idx) => (
          <NoticeCardTeacher key={notice.id} notice={notice} />
        ))}
      </ScrollView>
      {/* --------------------------- */}
      <ActionButton buttonColor="#0e1979" position="center" >
        <ActionButton.Item buttonColor='#9b59b6' title="New Notice" onPress={() => console.log("notice sent!")}>
          {/* <AntDesign name="closesquare" style={styles.actionButtonIcon} /> */}
        </ActionButton.Item>
      </ActionButton>
      {/* --------------------------- */}
    </View>
  );
};

export default NoticeListTeacher;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 30,
    height: 22,
    color: 'white',
    
  },
});