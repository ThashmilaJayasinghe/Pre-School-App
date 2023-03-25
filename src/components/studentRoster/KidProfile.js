import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
const defaultImageSource = require('../../assets/kidImageProfile.jpg');

const KidProfile = ({source, size}) => {
  const imageSize = size || 50;

  const renderProfileImage = () => {
    if (source) {
      return (
        <Image
          source={source}
          style={[styles.image, {height: imageSize, width: imageSize}]}
          resizeMode="cover"
        />
      );
    } else {
      return (
        <Image
          source={defaultImageSource}
          style={[styles.image, {height: imageSize, width: imageSize}]}
          resizeMode="contain"
        />
      );
    }
  };

  return (
    <View style={[styles.container, {height: imageSize, width: imageSize}]}>
      {renderProfileImage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 50,
  },
});

export default KidProfile;
