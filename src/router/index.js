import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Login, Register } from "../components/page";
import TabRoute from "./tab";
// import Login from '../components/page/Login'

const Stack = createStackNavigator();

const Router = () => {
  const screenOption = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'} screenOptions={screenOption}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Tab" component={TabRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;