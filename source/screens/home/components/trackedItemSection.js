import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import R from '../../../resources/R';
const TrackedItemSection = props => {
  return (
    <View style={[props.style, styles.trackedItemSection]}>
      <Text style={{textTransform: 'uppercase'}}>{props.name}</Text>
      <View>
        <Text
          style={{
            fontSize: 52,
            fontWeight: '600',
            color: R.colors.black,
          }}>
          {props.children}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trackedItemSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderBottomWidth: 1,
    borderColor: R.colors.gray,
  },
});

export default TrackedItemSection;
