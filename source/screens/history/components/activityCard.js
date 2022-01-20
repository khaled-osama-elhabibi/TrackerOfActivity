import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import R from '../../../resources/R';
import TrackedItem from './trackedItem';

const ActivityCard = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.metaDatarow}>
        <Text style={{fontSize: 18, color: R.colors.black}}>Evening Run</Text>
        <Text> </Text>
        <Text style={{fontSize: 12}}>Thursday, January 20, 2022</Text>
      </View>
      <View style={styles.actDatarow}>
        <TrackedItem name="Distance" />
        <TrackedItem name="Foot steps" />
        <TrackedItem name="Time" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: 120,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: R.colors.orange,
    marginVertical: 10,
    backgroundColor: R.colors.white,
    shadowColor: R.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  metaDatarow: {
    paddingHorizontal: 15,
    paddingBottom: 13,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actDatarow: {
    paddingBottom: 13,

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default ActivityCard;
