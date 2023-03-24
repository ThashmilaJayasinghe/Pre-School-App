import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Color, Border, FontFamily, FontSize} from '../../GlobalStyles';
// import {FaPen} from 'react-icons';

const KidCard = ({student}) => {
  const [studentId, setStudentId] = useState(student.id);
  const [studentName, setStudentName] = useState(student.name);
  const [studentClass, setStudentClass] = useState(student.class);

  //   console.log(studentName);

  return (
    <View style={[styles.feedbackItem]}>
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
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => alert('Edit kid')}>
                <View
                  style={{
                    position: 'absolute',
                    width: 35,
                    height: 35,
                    borderRadius: 35,
                    backgroundColor: '#F0DA15',
                  }}>
                  <Text style={{alignSelf: 'center'}}>Edit</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => alert('Delete kid')}>
                <View
                  style={{
                    marginLeft: 50,
                    position: 'absolute',
                    width: 35,
                    height: 35,
                    borderRadius: 35,
                    backgroundColor: '#F0DA15',
                  }}>
                  {/* <FaPen /> */}
                  <Text style={{alignSelf: 'center'}}>Del</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.course1Parent}>
          <Text
            style={[styles.course1, styles.courseFlexBox, styles.course1Typo]}>
            {studentName}
          </Text>
          <Text style={[styles.courseDetails, styles.courseFlexBox]}>
            {studentClass}
          </Text>
        </View>
        <View style={styles.background1} />
      </View>
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
    height: 26,
    width: 93,
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
  feedback: {
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
    top: 22,
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
  },
  feedbackItem: {
    // flex: 1,
    // flex: 0.5,
    width: '100%',
    height: 126,
    // justifyContent: "center",
    alignItems: 'center',
  },
});

export default KidCard;
