import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import R from '../../resources/R';
import ActivityCard from './components/activityCard';

const History = () => {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={{
          width: '100%',
        }}
        contentcontainerstyle={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: R.colors.white,
  },
});
export default History;
