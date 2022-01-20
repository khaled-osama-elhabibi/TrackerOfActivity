import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import History from '../../../screens/history';
import ActivityDetails from '../../../screens/activityDetails';

const Stack = createNativeStackNavigator();

const HistoryNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="ActivityDetails" component={ActivityDetails} />
    </Stack.Navigator>
  );
};

export default HistoryNav;
