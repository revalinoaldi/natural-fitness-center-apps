import { AlertCircleIcon, Box, Button, ButtonIcon, ButtonText, Center, CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel, EyeIcon, EyeOffIcon, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, HStack, Input, InputField, InputIcon, InputSlot, StatusBar, VStack } from '@gluestack-ui/themed'
import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../../assets'
import { TouchableOpacity } from 'react-native'
import { CustomButton } from '../../atoms'

const Login = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  return (
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, paddingHorizontal: 20}}>

        <Center>
          <Image source={Logo} />
        </Center>
        <VStack space="lg">
          <VStack space="sm">
          <FormControl
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
          >
            <FormControlLabel mb="$1">
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField type="text" defaultValue="" placeholder="Enter Email" />
            </Input>
            {/* <FormControlHelper>
              <FormControlHelperText>
                Must be atleast 6 characters.
              </FormControlHelperText>
            </FormControlHelper> */}
            <FormControlError>
              <FormControlErrorIcon as={AlertCircleIcon} />
              <FormControlErrorText>
                Atleast email validation are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          </VStack>
          <VStack space="sm">
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
            >
              <FormControlLabel mb="$1">
                <FormControlLabelText>Password</FormControlLabelText>
              </FormControlLabel>
              <Input textAlign="center">
                <InputField type={showPassword ? "text" : "password"} defaultValue="" placeholder="Enter Password" />
                <InputSlot pr="$3" onPress={handleState}>
                  {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                  <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color="$indigo600" />
                </InputSlot>
              </Input>
              <FormControlHelper>
                <FormControlHelperText>
                  Must be atleast 6 characters.
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  Atleast 6 characters are required.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          </VStack>

          {/* <Checkbox value='1' aria-checked="false" aria-labelledby='remember-me' size="md" isInvalid={false} isDisabled={false}>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Remember me?</CheckboxLabel>
          </Checkbox> */}

          <VStack>
            <CustomButton size="md" disabled={false} tinyColor="$indigo600">
              Login
            </CustomButton>
          </VStack>

          <HStack justifyContent='center'>
            <Text>Don't Have Account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{ color:'#7367f0' }}>Create an Account</Text>
            </TouchableOpacity>
          </HStack>
        </VStack>

      </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({})