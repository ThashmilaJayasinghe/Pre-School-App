import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FeedbackCard from '../../components/feedback/FeedbackCard';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';

const studentList = [
  {id: '01', name: 'Kamal', class: 'Class A'},
  {id: '02', name: 'Nimal', class: 'Class B'},
  {id: '03', name: 'Sunimal', class: 'Class D'},
  {id: '04', name: 'Bimal', class: 'Class A'},
  {id: '05', name: 'John', class: 'Class E'},
  {id: '06', name: 'Mark', class: 'Class D'},
];

const feedbackListArray = [
  {
    id: '01',
    name: 'Kamal',
    class: 'Class A',
    comment: 'Kamal is a good student',
  },
  {
    id: '02',
    name: 'Nimal',
    class: 'Class B',
    comment: 'Nimal is a good student',
  },
  {
    id: '03',
    name: 'Sunimal',
    class: 'Class D',
    comment: 'Sunimal is a good student',
  },
  {
    id: '04',
    name: 'Bimal',
    class: 'Class A',
    comment: 'Bimal is a good student',
  },
  {id: '05', name: 'John', class: 'Class E', comment: 'John is a good student'},
  {id: '06', name: 'Mark', class: 'Class D', comment: 'Mark is a good student'},
];

const feedbackCollection = firestore().collection('feedbacks');

const FeedbackList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);
  const [initialFeedbackList, setInitialFeedbackList] = useState([]);
  const [isFeedbackChanged, setIsFeedbackChanged] = useState(false);

  useEffect(() => {
    filterFeedbacks();
  }, [searchQuery]);

  useEffect(() => {
    async function getData() {
      const subscriber = firestore();
      await feedbackCollection.get().then(querySnapshot => {
        setFeedbackList(querySnapshot);
        const feedbacks = [];

        querySnapshot.forEach(documentSnapshot => {
          feedbacks.push({
            id: documentSnapshot.feedbackId,
            ...documentSnapshot.data(),
          });
        });

        setFeedbackList(feedbacks);
        setInitialFeedbackList(feedbacks);
      });

      return () => subscriber();
    }
    getData();
  }, [isFeedbackChanged]);

  const filterFeedbacks = () => {
    if (searchQuery.trim()) {
      let filteredFeedbackList = feedbackList.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      setFeedbackList(filteredFeedbackList);
    } else {
      setFeedbackList(initialFeedbackList);
    }
  };

  return (
    <View
      style={{
        // backgroundColor: '#FBF8EB',
      }}>
      {/* search bar */}
      <View
        style={{
          alignItems: 'center',
          marginVertical: 10,
          zIndex: 100
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
        {feedbackList.length > 0 && (
          <>
            {feedbackList.map((feedback, idx) => (
              <FeedbackCard
                key={feedback.feedbackId}
                feedback={feedback}
                setIsFeedbackChanged={setIsFeedbackChanged}
              />
            ))}
          </>
        )}
      </ScrollView>

      <View style={{flex: 1}}>
        {feedbackList.length == 0 && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <AntDesign name="warning" size={60} />
            <Text style={{fontSize: 18, fontWeight: 500}}>Oops!</Text>
            <Text style={{fontSize: 15}}>
              It seems like you don't have any feedback
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default FeedbackList;
