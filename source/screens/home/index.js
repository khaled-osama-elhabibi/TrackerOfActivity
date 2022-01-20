import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timer from '../../components/timer';
import R from '../../resources/R';
import Btn from './components/btn';
import TrackedItemSection from './components/trackedItemSection';
const Home = () => {
  const [activityIsOnGoingFlag, setActivityIsOnGoingFlag] = useState(false);

  const startActivity = () => {
      setActivityIsOnGoingFlag(true);
    },
    pauseActivity = () => {
      setActivityIsOnGoingFlag(false);
    },
    stopActivity = () => {
      setActivityIsOnGoingFlag(false);
    };
  useEffect(() => {}, []);
  return (
    <View style={styles.screen}>
      <TrackedItemSection name="Time" style={styles.sectionTrackingTime}>
        <Timer style={styles.TrackingItem} activeFlag={activityIsOnGoingFlag} />
      </TrackedItemSection>
      <TrackedItemSection
        name="Distance"
        style={styles.sectionTrackingDistance}>
        <Text>00:00:00</Text>
      </TrackedItemSection>
      <TrackedItemSection
        name={'Foot Steps'}
        style={styles.sectionTrackingFeetSteps}>
        <Text>00:00:00</Text>
      </TrackedItemSection>

      <View style={styles.sectionTrackingBtns}>
        {activityIsOnGoingFlag ? (
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Btn onPress={pauseActivity} btnText="Pause" />
            <Btn onPress={stopActivity} btnText="Finish" />
          </View>
        ) : (
          <Btn btnText="Start" onPress={startActivity} />
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
    backgroundColor: R.colors.white,
  },
  sectionTrackingTime: {
    flex: 0.25,
  },
  sectionTrackingDistance: {
    flex: 0.35,
  },
  sectionTrackingFeetSteps: {
    flex: 0.25,
  },
  TrackingItem: {
    fontSize: 52,
    fontWeight: '600',
    color: R.colors.black,
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
