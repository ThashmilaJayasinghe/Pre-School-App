import {
    View,
    Text,
    Button,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Pressable,
    Image,
    StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FontFamily, Border, FontSize, Color} from '../../GlobalStyles';
import { SelectList } from 'react-native-dropdown-select-list'
import firestore from '@react-native-firebase/firestore';
  
const data = [
  {key:'1', value:'HOMEWORK'},
  {key:'2', value:'FEES'},
  {key:'3', value:'REMINDER'},
  {key:'4', value:'OTHER'},
]

const noticeCollection = firestore().collection('notices');
  
  const InputModal = ({
    isModalVisible, 
    setModalVisible, 
    toggleModal
  }) => {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [selected, setSelected] = React.useState('');
      
    const handleInput = async () => {

      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      const day = new Date().getDate();
      const month = monthNames[new Date().getMonth()];
      const dateInWords = day + " " + month;
      
      noticeCollection.add({
        type: selected,
        title: title,
        body: body,
        date: dateInWords,
      })
      .then(() => {
        console.log('Notice sent');
        setTitle('');
        setBody('');
      })
      .catch(err => console.log('Something went wrong'));
      setModalVisible(false);
    };
  
    return (
      <View style={{flex: 1}}> 
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={{alignItems: 'center'}}>
          <View
            style={{
              flex: 0,
              backgroundColor: 'white',
              width: '90%',
              height: '85%',
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
                <Text style={{fontSize: 17, fontWeight: 500}}>Create Notice</Text>
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

                  {/* ---------------------- */}

                  {/* <View style={styles.groupParent}>
                    <Pressable style={styles.groupChildPosition}>
                        <View style={[styles.groupChild, styles.groupChildPosition]} />
                        <View style={[styles.uploadCoverImageParent, styles.uploadPosition]}>
                        <Text style={[styles.uploadCoverImage, styles.pngJpegJpgPositionUpload]}>
                            Upload cover image
                        </Text>                  
                        <AntDesign name="upload" style={[styles.uploadIcon, styles.uploadPosition]} size={27} color="#5fcf1b" />
                        </View>
                    </Pressable>
                    <Text
                        style={[styles.pngJpegJpg, styles.pngJpegJpgPosition]}
                    >{`png, jpeg, jpg - Max size: 1 MB
Aspect Ratio: 2 x 1`}</Text>
                    </View> */}

                  {/* ---------------------- */}
  
                  <TouchableOpacity
                    style={styles.submitBtn}
                    title="Update"
                    onPress={handleInput}>
                    <Text style={styles.submitBtnTxt}>Send Notice</Text>
                  </TouchableOpacity>
                </View>
              </View>           
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default InputModal;
  
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
    groupChildPosition: {
        height: 35,
        width: 218,
        left: 0,
        top: 0,
        position: "absolute",
      },
      uploadPosition: {
        height: 24,
        left: "50%",
        marginLeft: -81,
        position: "absolute",
      },
      pngJpegJpgPosition: {
        width: 150,
        alignItems: "center",
        display: "flex",
        fontFamily: FontFamily.alatsiRegular,
        left: "50%",
        position: "absolute",
      },
      pngJpegJpgPositionUpload: {
        width: 128,
        alignItems: "center",
        display: "flex",
        fontFamily: FontFamily.alatsiRegular,
        left: "50%",
        position: "absolute",
      },
      groupChild: {
        borderRadius: Border.br_3xs,
        borderStyle: "solid",
        borderColor: "#5fcf1b",
        borderWidth: 1,
      },
      uploadCoverImage: {
        marginLeft: -47,
        top: 5,
        fontSize: FontSize.size_xs,
        color: Color.dimgray_100,
        textAlign: "center",
        justifyContent: "center",
      },
      uploadIcon: {
        marginTop: -12,
        top: "50%",
        width: 24,
      },
      uploadCoverImageParent: {
        top: 6,
        width: 162,
      },
      pngJpegJpg: {
        marginLeft: -109,
        top: 44,
        fontSize: 10,
        color: "rgba(97, 97, 97, 0.6)",
        textAlign: "left",
      },
      groupParent: {
        flex: 1,
        width: "100%",
        height: 73,
        marginBottom: 20
      },
  });
  