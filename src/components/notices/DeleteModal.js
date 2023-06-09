import React, {useRef} from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";

const DeleteModal = ({bottomSheetRef, noticeId}) => {

  const navigation = useNavigation();

  const onDelete = () => {

    firestore()
      .collection('notices')
      .doc(noticeId)
      .delete()
      .then(() => {
        console.log('Notice deleted');
        console.log(noticeId);
        bottomSheetRef.current.close();
        navigation.navigate("NoticeListTeacher");

      })
      .catch(err => {
        console.log('Deleted unsuccessfully');
        bottomSheetRef.current.close();
      });
  };
    
  return (
    <BottomSheet ref={bottomSheetRef} height={200}>
    <View
      style={{
        // flex: 1,
        // justifyContent: "center",
        alignItems: "flex-end",
        marginTop: 13,
        marginRight: 13
      }}
    >
            
        <TouchableOpacity
          onPress={() => bottomSheetRef.current.close()}
          style={{marginTop: 13, marginRight: 13, alignItems: 'flex-end'}}>
          <AntDesign name="closesquare" size={27} color="#F47B0B" />
        </TouchableOpacity>

        <View style={{padding: 16, top: 10}}>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 20,
              lineHeight: 26,
              color: '#0E1979',
            }}>
            Are you sure you want to delete notice?
          </Text>
        </View>

        <View
          style={{
            height: '35%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={onDelete}
            style={{
              flex: 0,
              marginRight: '33%',
              width: 110,
              borderRadius: 5,
              backgroundColor: '#F21F1F',
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
          
            }}>
            <Text
              style={{
                color: '#F7FF9C',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      
    </View>  
    </BottomSheet>
  );
};

export default DeleteModal;