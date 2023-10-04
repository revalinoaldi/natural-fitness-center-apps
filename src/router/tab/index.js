import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Login, Register } from '../../components/page';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <Tab.Navigator tabBarPosition={'bottom'} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Login} options={{
                      tabBarLabelStyle: {
                          fontSize: 12,
                      },
                      headerShown: false,
                      tabBarIcon: ({focused, tintColor, size}) => (
                          <MaterialCommunityIcons name="home-account" size={size} color={tintColor} />
                      )
                  }}/>
        <Tab.Screen name="User" component={Register} options={{
                      tabBarLabelStyle: {
                          fontSize: 12,
                      },
                      headerShown: false,
                      tabBarIcon: ({focused, tintColor, size}) => (
                          <MaterialCommunityIcons name="account" size={size} color={tintColor} />
                      )
                  }} />
    </Tab.Navigator>
  )
}

export default TabRoute