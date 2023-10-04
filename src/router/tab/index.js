import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Login, Register } from '../../components/page';
import { Icon } from '@gluestack-ui/themed';

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  return (
    <Tab.Navigator tabBarPosition={'bottom'} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Login} options={{
                      tabBarLabelStyle: {
                          fontSize: 12,
                      },
                      headerShown: false,
                      tabBarIcon: ({focused, tintColor, size}) => {
                        return <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
                      }
                  }}/>
        <Tab.Screen name="User" component={Register} options={{
                      tabBarLabelStyle: {
                          fontSize: 12,
                      },
                      headerShown: false,
                      tabBarIcon: ({focused, tintColor, size}) => {
                        return <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
                      }
                  }} />
    </Tab.Navigator>
  )
}

export default TabRoute