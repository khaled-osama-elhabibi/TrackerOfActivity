import * as React from 'react';
import {View, Text} from 'react-native';
import R from '../../resources/R';

const TabIcon = props => {
  return (
    <View>
      <Text
        style={{
          color: props.focused ? R.colors.orange : R.colors.black,
          fontSize: 16,
          fontWeight: '400',
        }}>
        {props.content}
      </Text>
    </View>
  );
};

export default TabIcon;
