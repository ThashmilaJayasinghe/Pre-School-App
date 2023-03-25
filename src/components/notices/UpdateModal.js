import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontFamily} from '../../GlobalStyles';
import { SelectList } from 'react-native-dropdown-select-list'

const data = [
  {key:'1', value:'HOMEWORK'},
  {key:'2', value:'FEES'},
  {key:'3', value:'REMINDER'},
  {key:'4', value:'OTHER'},
]

const UpdateModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selected, setSelected] = React.useState("");

  const handleUpdate = () => {
    console.log('Title:', title);
    console.log('Body:', body);
    // Do something with the data (e.g. submit to server)
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={{alignItems: 'center'}}>
        <View
          style={{
            flex: 0,
            backgroundColor: 'white',
            width: '90%',
            height: '80%',
            borderRadius: 20,
            paddingBottom: 20,
          }}>
          <ScrollView>
            <TouchableOpacity
              style={{marginTop: 13, marginRight: 13, alignItems: 'flex-end'}}
              onPress={toggleModal}>
              <AntDesign name="closesquare" size={27} color="#F47B0B" />
            </TouchableOpacity>

            <View style={{alignItems: 'center', marginTop: 5}}>
              <Text style={{fontSize: 17, fontWeight: 500}}>Update Notice</Text>
            </View>     

            <View style={styles.wrapper}>
              <View style={styles.formContainer}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.labelTxt}>Type:</Text>            
                  <SelectList 
                    style={styles.inputStyle}
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.labelTxt}>Title:</Text>
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter title"
                    value={title}
                    onChangeText={text => setTitle(text)}
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.labelTxt}>Notice Body:</Text>
                  <TextInput
                    multiline={true}
                    numberOfLines={5}
                    style={styles.inputStyle}
                    placeholder="Enter notice details"
                    value={body}
                    onChangeText={text => setBody(text)}
                  />
                </View>

                <TouchableOpacity
                  style={styles.submitBtn}
                  title="Update"
                  onPress={handleUpdate}>
                  <Text style={styles.submitBtnTxt}>Update</Text>
                </TouchableOpacity>
              </View>
            </View>           
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateModal;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundClor: 'white',
    paddingHorizontal: 15,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  title: {
    color: '#16213E',
    fontSize: 26,
    fontWeight: '400',
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  labelTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  errorTxt: {
    fontSize: 12,
    color: '#FF0D10',
  },
  submitBtn: {
    backgroundColor: '#5FCF1B',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  submitBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
});
