
import React from 'react'
import { config, GluestackUIProvider, Text, View } from "@gluestack-ui/themed"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Router from './router'

const Src = () => {
  return (
    <GluestackUIProvider config={config.theme}>
        <Router />
        {/* <MaterialCommunityIcons name="home" size={30} color="#000" /> */}
    </GluestackUIProvider>
  )
}

export default Src