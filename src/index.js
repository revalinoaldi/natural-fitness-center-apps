
import React from 'react'
import { config, GluestackUIProvider, Text, View } from "@gluestack-ui/themed"
import Router from './router'

const Src = () => {
  return (
    <GluestackUIProvider config={config.theme}>
        <Router />
    </GluestackUIProvider>
  )
}

export default Src