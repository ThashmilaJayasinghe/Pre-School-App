import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import TeacherClassCard from '../../components/Inquiry/TeacherClassCard';

const classA = [
  {inID: '01', title: 'Home Work', date: 'Kamal', time: 'Class A'},
  {inID: '02', title: 'Sports', date: 'Nimal', time: 'Class B'},
  {inID: '03', title: 'Dancing', date: 'Sunimal', time: 'Class D'},
  {inID: '04', title: 'Music', date: 'Bimal', time: 'Class A'},
  {inID: '05', title: 'Others', date: 'John', time: 'Class E'},
  {inID: '06', title: 'Health', date: 'Mark', time: 'Class D'},
];

const HomeWork = classA.filter(HW => {
  if (HW.title === 'Home Work') {
    return HW;
  }
});
const Sports = classA.filter(sports => {
  if (sports.title === 'Sports') {
    return sports;
  }
});
const Dancing = classA.filter(dancing => {
  if (dancing.title === 'Dancing') {
    return dancing;
  }
});
const Music = classA.filter(music => {
  if (music.title === 'Music') {
    return music;
  }
});
const Health = classA.filter(health => {
  if (health.title === 'Health') {
    return health;
  }
});
const Others = classA.filter(others => {
  if (others.title === 'Others') {
    return others;
  }
});
const TeacherClass = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View>
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
          <Text style={styles.textStyle}>Home Work</Text>
          {HomeWork.map((inquiry, idx) => (
            <TeacherClassCard key={inquiry.id} inquiry={inquiry} />
          ))}
          <Text style={styles.textStyle}>Sports</Text>
          {Sports.map((inquiry, idx) => (
            <TeacherClassCard key={inquiry.id} inquiry={inquiry} />
          ))}
          <Text style={styles.textStyle}>Dancing</Text>
          {Dancing.map((inquiry, idx) => (
            <TeacherClassCard key={inquiry.id} inquiry={inquiry} />
          ))}
          <Text style={styles.textStyle}>Music</Text>
          {Music.map((inquiry, idx) => (
            <TeacherClassCard key={inquiry.id} inquiry={inquiry} />
          ))}
          <Text style={styles.textStyle}>Health</Text>
          {Health.map((inquiry, idx) => (
            <TeacherClassCard key={inquiry.id} inquiry={inquiry} />
          ))}
          <Text style={styles.textStyle}>Others</Text>
          {Others.map((inquiry, idx) => (
            <TeacherClassCard key={inquiry.id} inquiry={inquiry} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default TeacherClass;

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
  textStyle: {
    color: '#0E1979',
    margin: 30,
    fontSize: 18,
    fontWeight: '700',
  },
});
