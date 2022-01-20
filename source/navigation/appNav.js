import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNav from './tabsStackNavigators/home-nav/homeNav';
import HistoryNav from './tabsStackNavigators/history-nav/historyNav';

const Tab = createBottomTabNavigator();

export default function AppNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Text>Home</Text>
              </View>
            ),
          }}
          name="HomeNav"
          component={HomeNav}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Text>History</Text>
              </View>
            ),
          }}
          name="HistoryNav"
          component={HistoryNav}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
