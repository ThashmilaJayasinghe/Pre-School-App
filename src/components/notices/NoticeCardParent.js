import * as React from "react";
import {useState} from 'react';
import { View, StyleSheet, Text, Image, Pressable, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const coverImg = 'https://firebasestorage.googleapis.com/v0/b/pre-school-management-297a9.appspot.com/o/notice.png?alt=media&token=b3ae51cc-4db7-46bc-ad14-1159cbe05153'

const NoticeCardParent = ({notice}) => {
  const [noticeId, setNoticeId] = useState(notice.id);
  const [noticeType, setNoticeType] = useState(notice.type);
  const [noticeTitle, setNoticeTitle] = useState(notice.title);
  const [noticeDate, setNoticeDate] = useState(notice.date);
  const [noticeBody, setNoticeBody] = useState(notice.body);

  const navigation = useNavigation();

  return (
    <View style={[styles.noticeItem]}>
      <View style={styles.backgroundLayout}>
        <View
          style={[
            styles.background,
            styles.backgroundLayout,
            styles.backgroundShadowBox,
          ]}
        />
        <View style={styles.groupWrapper}>
          <TouchableOpacity
            style={styles.groupChildLayout}
            onPress={() => navigation.navigate("ViewNotice", {
              noticeId,
              noticeType,
              noticeTitle, 
              noticeDate,
              noticeBody,
            })}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              resizeMode="cover"
              source={{
                uri: 'https://d1xzdqg8s8ggsr.cloudfront.net/641a11603ab896e830afb584/fd66b7e2-f303-40c3-82dc-f1f0a100c712_1679516926769965991?Expires=-62135596800&Signature=Ahhc7tvTQ4TShR8uvyEgzFL~4mjGPi9yEuSW4-CJ9s2k9Mw1-gL9v6flpLBKcf2RlqUlhA5tk8C8HoMQN8DAuPZkfxOHWhJbtecjJGlntDNntgwJZ5SeLD3T70E0B9htePbDYBEuMTampgwdu2gmtgzZfQp3cLW5P5Ft8di1bqOooVCFwURa1pRk4~JhdXZP2LhLfilpnJUgC6gwyHhRfVC~rKgERWWU-rOPlwWf1Ny4K5~3Y9kgC00zUJnwcJJWxjg-ZOsEXanGzFFGXWk6cx4g47FHUYHNDWaFyfyreadz74tiuFu~r1amNIvl5jkReYTpv0TWOrJN-nj567W7Ug__&Key-Pair-Id=K1P54FZWCHCL6J',
              }}
            />
            <Text
              style={[
                styles.notice,
                styles.courseFlexBox,
                styles.course1Typo,
              ]}>
              View
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.course1Parent}>
          <Text
            style={[styles.course1, styles.courseFlexBox, styles.course1Typo]} numberOfLines={2}>
            {noticeTitle}
          </Text>
          <Text style={[styles.courseDetails, styles.courseFlexBox]}>
            {noticeDate}
          </Text>
        </View>
        <View style={styles.background1}>
          <Image
            style={styles.coverImage}
            // source={require("../../assets/notice.png")}
            source={{uri: coverImg}}
          />
        </View>
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
  notice: {
    top: 4,
    left: 32,
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
    top: 35,
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
    alignItems: 'center',
  },
  noticeItem: {
    width: '100%',
    height: 126,
    alignItems: 'center',
  },
  coverImage: {
    flex: 1,
    resizeMode: 'contain'
  },
});

export default NoticeCardParent;
