import {View, Text, ScrollView, TextInput, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import NoticeCardParent from '../../components/notices/NoticeCardParent';
import firestore from '@react-native-firebase/firestore';

// const noticeList1 = [
//   {id: '01', title: 'Notice 1', date: '03 January'},
//   {id: '02', title: 'Notice 2', date: '09 January'},
//   {id: '03', title: 'Notice 3', date: '14 January'},
//   {id: '04', title: 'Notice 4', date: '23 January'},
//   {id: '05', title: 'Notice 5', date: '26 January'},
//   {id: '06', title: 'Notice 6', date: '30 January'},
// ];

const NoticeList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    const items = [];
    const subscriber = firestore()
      .collection('notices')
      .get()
      .then(querySnapshot => {
        console.log('Total notices: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          items.push(documentSnapshot.data());
        });

        setNoticeList(items);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

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
          <NoticeCardParent key={notice.id} notice={notice} />
        ))}
      </ScrollView>
    </View>
  );
};

export default NoticeList;
