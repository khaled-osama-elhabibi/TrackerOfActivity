import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import R from '../../../resources/R';

const TrackedItem = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{props.name}</Text>
      <Text style={{fontSize: 20, fontWeight: '700'}}>00:00:00</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default TrackedItem;
