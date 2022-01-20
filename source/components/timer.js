import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import convertSecondsToHMSFormat from '../helper/format-change';

const Timer = props => {
  const [seconds, setSeconds] = useState(0),
    [activeFlag, setActiveFlag] = useState(props.activeFlag);

  useEffect(() => {
    setActiveFlag(props.activeFlag);
  }, [props.activeFlag]);

  useEffect(() => {
    let interval = null;
    if (activeFlag) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!activeFlag && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [activeFlag, seconds]);

  return <Text style={props.style}>{convertSecondsToHMSFormat(seconds)}</Text>;
};

export default Timer;
