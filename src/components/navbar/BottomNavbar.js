import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../../GlobalStyles';

const BottomNavbar = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        // paddingVertical: 13,
        height: 45,
        width: '100%',
        borderTopEndRadius: 14,
        borderTopStartRadius: 14,
        backgroundColor: Color.mintcream,
        marginHorizontal: 2,
        justifyContent: 'center',
        opacity: 0.5,

        shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity>
          <Feather
            name="home"
            style={{
              fontSize: 26,
              fontWeight: '100',
              // color: '#C9C5C4'
              color: '#595959'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="ios-heart-outline"
            style={{
              fontSize: 29,
              fontWeight: '700',
              color: '#595959'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            name="user"
            style={{
              fontSize: 27,
              color: '#595959'
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomNavbar