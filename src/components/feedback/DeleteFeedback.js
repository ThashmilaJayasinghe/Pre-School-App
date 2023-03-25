import React, {useRef} from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DeleteFeedback = ({bottomSheetRef, feedback}) => {
  console.log(feedback);

  const onDeleteConfirm = () => {

    // do something

    bottomSheetRef.current.close();
  };

  return (
    <BottomSheet ref={bottomSheetRef}>
      <View style={{marginTop: 13, marginRight: 13, alignItems: 'flex-end'}}>
        <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
          <AntDesign name="closesquare" size={27} color="#F47B0B" />
        </TouchableOpacity>
      </View>

      <View style={{padding: 16, top: 15}}>
        <Text
          style={{
            fontWeight: 400,
            fontSize: 20,
            lineHeight: 26,
            color: '#0E1979',
          }}>
          Are you sure you want to delete?
        </Text>
      </View>

      <View
        style={{
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          onPress={() => onDeleteConfirm()}
          style={{
            flex: 0,
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
    </BottomSheet>
  );
};

export default DeleteFeedback;
