import {StyleSheet, Text, View,ImageBackground, Image} from 'react-native';
import React from 'react';
import TeacherInquiryCardOne from '../../components/Inquiry/TeacherInquiryCardOne';

const coverImg = 'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/KenuriImages%2FWhatsApp_Image_2023-03-26_at_3.45.23_AM-removebg-preview.png?alt=media&token=f81fe0ac-c318-4bf7-b1f9-641f6498c695'

export default function TeacherFirstInquiryPage() {
  return (
    <View style={{alignItems: 'center', marginVertical: 20}}>
      {/* <View style={{alignItems: 'center', height: ''}}> */}
      <View
        style={{
          height: '35%',
          width: '90%',
          backgroundColor: '#ed409d',
          borderRadius: 20,
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 10,
        }}>
        <ImageBackground source={{uri:coverImg}} resizeMode="contain" style = {{height: '100%', width: '100%', marginLeft: 20, justifyContent: 'flex-end'}}>
        {/* <Image source={{uri:coverImg}}  style = {{height: '70%', width: '60%'}} /> */}
        
          <View style = {{paddingTop: 20}}>
          <Text style={{fontSize: 22, fontWeight: 600, color: 'white'}}>
            Hi there,
          </Text>
          <Text style={{fontSize: 16, color: '#fff2f9'}}>
            Check the inquiries about children
          </Text>
          </View>
        </ImageBackground>
      </View>
      {/* </View> */}

      <View style={styles.groupingSet}>
        <View style={styles.grouping}>
          <View style={styles.groupWrapper}>
            <TeacherInquiryCardOne Cname="Class A" />
          </View>
          <View style={styles.groupWrapper}>
            <TeacherInquiryCardOne Cname="Class B" />
          </View>
        </View>
        <View style={styles.grouping}>
          <View style={styles.groupWrapper}>
            <TeacherInquiryCardOne Cname="Class C" />
          </View>
          <View style={styles.groupWrapper}>
            <TeacherInquiryCardOne Cname="Class D" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {},
  groupingSet: {
    // marginTop: 200,
  },
  grouping: {
    marginBottom: 30,
    marginTop: 30,
    // marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  groupWrapper: {
    // marginLeft: 30,
    // marginRight: 30,
    marginHorizontal: '5%',
    justifyContent: 'space-between',
  },
});
