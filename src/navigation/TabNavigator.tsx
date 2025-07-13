import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import LocationsScreen from '../screens/LocationsScreen';
import BottomTabBar from '../components/BottomTabBar';
import PostStack from './PostStack';

const Tab = createBottomTabNavigator();

const renderTabBar = (props: BottomTabBarProps) => <BottomTabBar {...props} />;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'الرئيسية' }} />
      <Tab.Screen name="Posts" component={PostStack} options={{ tabBarLabel: 'الأخبار' }} />
      <Tab.Screen name="Locations" component={LocationsScreen} options={{ tabBarLabel: 'الخريطة' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
