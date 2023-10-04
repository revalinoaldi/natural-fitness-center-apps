import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ButtonIcon, ButtonText } from '@gluestack-ui/themed'

const CustomButton = ({ size, disabled, tinyColor, children, icon }) => {
  return (
    <Button
        size={size}
        variant="solid"
        
        isDisabled={disabled}
        isFocusVisible={false}
        bg={tinyColor}
        borderColor={tinyColor}
    >
        <ButtonText>{children}</ButtonText>
        { icon ? <ButtonIcon as={icon} /> : [] }
    </Button>
  )
}

export default CustomButton

const styles = StyleSheet.create({})