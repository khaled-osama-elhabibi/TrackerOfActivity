import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNav from './tabsStackNavigators/home-nav/homeNav';
import HistoryNav from './tabsStackNavigators/history-nav/historyNav';
import TabIcon from './components/tabIcon';

const Tab = createBottomTabNavigator();

export default function AppNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} content={'Record'} />
            ),
          }}
          name="HomeNav"
          component={HomeNav}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TabIcon focused={focused} content={'History'} />
            ),
          }}
          name="HistoryNav"
          component={HistoryNav}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
