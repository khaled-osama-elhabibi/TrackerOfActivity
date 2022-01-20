import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from './components/btn';

const Home = () => {
  const [activityIsOnGoingFlag, setActivityIsOnGoingFlag] = useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.sectionTrackingTime}></View>
      <View style={styles.sectionTrackingDistance}></View>
      <View style={styles.sectionTrackingFeetSteps}></View>
      <View style={styles.sectionTrackingBtns}>
        {activityIsOnGoingFlag ? (
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Btn btnText="Pause" />
            <Btn btnText="Finish" />
          </View>
        ) : (
          <Btn btnText="Start" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTrackingTime: {
    flex: 0.25,
    width: '100%',
    backgroundColor: 'black',
  },
  sectionTrackingDistance: {
    flex: 0.35,
    width: '100%',
    backgroundColor: 'red',
  },
  sectionTrackingFeetSteps: {
    flex: 0.25,
    width: '100%',
    backgroundColor: 'blue',
  },
  sectionTrackingBtns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.15,
    width: '100%',
    backgroundColor: 'white',
  },
});
export default Home;
