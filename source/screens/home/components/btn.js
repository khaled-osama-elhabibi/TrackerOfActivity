import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import R from '../../../resources/R';

const Btn = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn}>
      <Text style={styles.btnText}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: R.colors.orange,
    width: 90,
    height: 90,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default Btn;
