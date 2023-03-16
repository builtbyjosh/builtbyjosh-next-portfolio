import React from 'react'
import { Text } from '@chakra-ui/react'

const FormErrorMsg = ({msg}) => {
  return (
    <Text width={'full'} role="alert" textColor="red.400" fontSize={"12px"} align={'start'} >
      {msg}
    </Text>
  )
}

export default FormErrorMsg