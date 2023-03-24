import {View, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import InquiryCard from '../../components/Inquiry/InquiryCard';

const inquiryList = [
  {inID: '01', title: 'Home Work', date: 'Kamal', time: 'Class A'},
  {inID: '02', title: 'Sports', date: 'Nimal', time: 'Class B'},
  {inID: '03', title: 'Dancing', date: 'Sunimal', time: 'Class D'},
  {inID: '04', title: 'Music', date: 'Bimal', time: 'Class A'},
  {inID: '05', title: 'Others', date: 'John', time: 'Class E'},
  {inID: '06', title: 'Health', date: 'Mark', time: 'Class D'},
];
const MyInquiryList = () => {
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
          marginVertical: 10,
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
            elevation: 0,
            shadowOpacity: 1,
            height: 40,
            width: '90%',
            paddingLeft: 10,
            paddingRight: 40,
            paddingHorizontal: 10,
            color: '#626262',
          }}
          placeholder="Search ..."
        />
        <FeatherIcon
          name="search"
          size={20}
          style={{
            top: 10,
            right: 30,
            position: 'absolute',
          }}
          color="#F47B0B"
        />
      </View>

      <ScrollView style={{marginBottom: 50}}>
        {inquiryList.map((inquiry, idx) => (
          <InquiryCard key={inquiry.id} inquiry={inquiry} />
        ))}
      </ScrollView>
    </View>
  );
};
export default MyInquiryList;
