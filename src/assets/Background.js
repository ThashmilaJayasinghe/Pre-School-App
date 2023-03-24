import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Background = () => {
  return (
    <View style={styles.background}>
      <Image
        style={styles.backgroundChild}
        resizeMode="cover"
        source={{uri: 'https://d1xzdqg8s8ggsr.cloudfront.net/641a11603ab896e830afb584/161529fe-a2cc-4713-86b8-53ae8ac7c8e1_1679593692715418438?Expires=-62135596800&Signature=uers~ueXupe7~LKYRN64q2FIiZNBQZBJ2EnyQdRmwEf~euW1asHxrfRnLAG91qHvsfuCwKz0ZIAWcC5C2hN07Hrh1RbOE3Nq3x746FRm97gS-6TsrUkBigw0rv8Fm96FJy0nInw8BUpqCWqfmw3VejDDV6pRoaQJhlveiGMgY2-pVTSAUwwq~C2tFNxeccMRPczNApWI04iOfN1NkO5mCV8HFYLMXng3L~c~H3~CYyszKTDxUalKXLEQW0WvCGI6TSNoSon7x8XC-MMfAg82jkgDzp2HA1kuR1ZQmIMnUP5VtfsXMYRN-48o0EMeKhAn5rJ9sQ0HByOJX-g8eOy6eg__&Key-Pair-Id=K1P54FZWCHCL6J'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundChild: {
    position: 'absolute',
    top: 5,
    left: 38,
    width: 851,
    height: 1109,
  },
  background: {
    // borderRadius: Border.br_21xl,
    // backgroundColor: Color.floralwhite,
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
  },
});

export default Background;
