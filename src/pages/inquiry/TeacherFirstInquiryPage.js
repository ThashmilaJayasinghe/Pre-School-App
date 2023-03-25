import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TeacherInquiryCardOne from '../../components/Inquiry/TeacherInquiryCardOne';

export default function TeacherFirstInquiryPage() {
  return (
    <View>
      <Text style={styles.welcome}>Hi There!</Text>
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
    marginTop: 200,
  },
  grouping: {
    marginBottom: 30,
    marginTop: 30,
    marginRight: 30,
    flexDirection: 'row',
  },
  groupWrapper: {
    marginLeft: 30,
    marginRight: 30,
  },
});
