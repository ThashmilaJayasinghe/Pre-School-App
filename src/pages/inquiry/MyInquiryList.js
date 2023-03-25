import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import InquiryCard from '../../components/Inquiry/InquiryCard';
import InquiryForm from './InquiryForm';
import firestore from '@react-native-firebase/firestore';

const MyInquiryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, setState] = useState([]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const inquiryList = () => {
    const inquiries = [];

    firestore()
      .collection('inquiries')
      .onSnapshot(querySnapshot => {
        const inquiries = [];

        querySnapshot.forEach(doc => {
          inquiries.push({id: doc.id, ...doc.data()});
        });

        setState(inquiries);
      });
  };

  useEffect(() => {
    inquiryList();
  }, []);

  useEffect(() => {
    fetchInquirys();
  }, [searchQuery]);

  const fetchInquirys = () => {
    if (searchQuery.trim()) {
      let filteredInquiryList = state.filter(item => {
        item.title.toLowerCase().includes(searchQuery.toLowerCase());
      });

      setState(filteredInquiryList);
    } else {
      setState(state);
    }
  };

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

      <TouchableOpacity
        style={styles.newInquryBtn}
        title="New Inquriry"
        //onPress={() => setIsModalVisible(true)}
        onPress={toggleModal}>
        <Text style={styles.newInquryBtnTxt}>New Inquriry</Text>
      </TouchableOpacity>
      <ScrollView style={{marginBottom: 140}}>
        {state.map((inquiry, idx) => (
          <InquiryCard key={inquiry.id} inquiry={inquiry} />
        ))}
      </ScrollView>
      <InquiryForm
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        toggleModal={toggleModal}
      />
    </View>
  );
};
export default MyInquiryList;

const styles = StyleSheet.create({
  newInquryBtn: {
    backgroundColor: '#5FCF1B',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'flex-end',
    marginBottom: 20,
    marginTop: 20,
    marginRight: 40,
    marginLeft: 250,
  },
  newInquryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});
