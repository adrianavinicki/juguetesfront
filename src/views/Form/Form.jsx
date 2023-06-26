import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { postProduct } from "../../redux/actions"
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
    Box,
  } from '@chakra-ui/react'

const Form = ()=>{

    const dispatch = useDispatch()


    const [form, setForm] = useState({ //creo un estado del form.
        name:"",
        image:"",
        brands:"",
        category:"",
        minimumage:"",
        description:"",
        quantity:"",
        price:"",
    })

    function handleChange (e) {
        console.log('entre al handlechange' + e) //hago una funcion para cuando cambian los valores
        setForm({
            ...form,
            [e.target.name] : e.target.value //agrega el value al estado del form
        })
    }

    // function handleSelect (e) { //hago una funcion para cuando cambia el select
    //     setForm({
    //         ...form,
    //         types: [...form.types, e.target.value] //agrega los tipos al estado
    //     })
    // }


//con esta funcion le digo que si estan todos los datos, me haga el dispatch, pero sino no.
    function handleSubmit(e) {
        console.log('handlesubmit ok')
        try {
            axios.post("http://localhost:3010/products/create", form);
        } catch (error) {
            console.log(error)
        }
        
        
        // if(form.name && form.image && form.brands && form.category && form.minimumage && form.description && form.quantity && form.price){
        // dispatch(postProduct(form))
        // alert("Toy Created")
        // setForm({
        //     name:"",
        //     image:"",
        //     brands:"",
        //     category:"",
        //     minimumage:"",
        //     description:"",
        //     quantity:"",
        //     price:"",
        // })
    }
    // useEffect(() => {
    //     dispatch(getTypes());
    // },[]);

    return(
        <Box
        backgroundImage="url('/BG2.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        height="100vh"
        >
        <VStack>
            <Flex justify="space-around" direction="column" align="center">
                <Link to={"/"}>
                    <Button colorScheme='teal' variant='solid'>Home</Button>
                </Link>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <FormControl>
                    <FormLabel>Name</FormLabel>
                        <Input type='text' value={form.name} name="name" onChange={handleChange} />
                    <FormHelperText>We'll never share your name.</FormHelperText>
                    <FormLabel>Brands</FormLabel>
                        <Input type='text' value={form.brands} name="brands" onChange={(e)=>handleChange(e)} />
                    <FormLabel>Category</FormLabel>
                        <Input type='text' value={form.category} name="category" onChange={(e)=>handleChange(e)} />
                    <FormLabel>Minimum Age</FormLabel>
                        <Input type='text' value={form.minimumage} name="minimumage" onChange={(e)=>handleChange(e)} /> 
                    <FormLabel>Description</FormLabel>
                        <Input type='text' value={form.description} name="description" onChange={(e)=>handleChange(e)} />
                    <FormLabel>Quantity</FormLabel>
                        <Input type='text' value={form.quantity} name="quantity" onChange={(e)=>handleChange(e)} />
                    <FormLabel>Price</FormLabel>
                        <Input type='text' value={form.price} name="price" onChange={(e)=>handleChange(e)} />
                    <FormLabel>Image</FormLabel>
                    <Input type='file' />
                    <Button type="submit" >Create Toy</Button>
                    </FormControl>
                </form>
            </Flex>
        </VStack>
        
            
        </Box>
    )
}



export default Form;