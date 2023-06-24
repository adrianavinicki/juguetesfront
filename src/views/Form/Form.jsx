import { Link } from "react-router-dom";
//import {Button, Flex, Heading, VStack} from "@chakra-ui/react"
import {
    Button,
    Flex,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

const Form = ()=>{
    return(
        <>
        <VStack>
            <Flex justify="space-around" direction="column" align="center">
                <Link to={"/"}>
                    <Button colorScheme='teal' variant='solid'>Home</Button>
                </Link>
                <FormControl>
                <FormLabel>Name</FormLabel>
                    <Input type='text' />
                <FormHelperText>We'll never share your name.</FormHelperText>
                <FormLabel>Brands</FormLabel>
                <Select placeholder='Select Brand'>
                    <option>KidToys</option>
                    <option>WonderToys</option>
                </Select>
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select Category'>
                    <option>Peluches</option>
                    <option>Autos</option>
                </Select>
                </FormControl>
                <FormControl>
                <FormLabel>Minimum Age</FormLabel>
                <NumberInput max={15} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                </FormControl>
                <FormLabel>Description</FormLabel>
                    <Input type='text' />
                    <FormControl>
                <FormLabel>Quantity</FormLabel>
                <NumberInput max={10000} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                </FormControl>
                <FormControl>
                <FormLabel>Price</FormLabel>
                <NumberInput max={10000} min={0}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                </FormControl>
                <FormLabel>Image</FormLabel>
                    <Input type='file' />
            </Flex>
        </VStack>
        
            
        </>
    )
}



export default Form;