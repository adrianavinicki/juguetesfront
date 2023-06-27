import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { postProduct } from "../../redux/actions"
import NavBar from "../../components/NavBar";
import {
    Button,
    Flex,
    VStack,
    FormControl,
    FormLabel,
    FormHelperText,
    Select,
    Input,
    Box,
    RadioGroup,
    HStack,
    Radio,
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

    function handleSelect (e) { //hago una funcion para cuando cambia el select
        setForm({
            ...form,
            [e.target.value] : e.target.value //agrega los tipos al estado
        })
    }


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
            <Flex direction="column" align={'center'}>
                <NavBar />
                <form onSubmit={(e)=>handleSubmit(e)}>
                        <FormControl>
                            <Flex direction={'column'} align={'center'} >
                                <FormLabel color={'white'}>Name</FormLabel>
                                    <Input type='text' value={form.name} name="name" bg={'white'} onChange={handleChange} />
                                <FormHelperText color={'white'}>We'll never share your name.</FormHelperText>
                                <FormLabel color={'white'}>Brands</FormLabel>
                                    <Select bg={'white'} placeholder='Select Brand'>
                                        <option>Juguetelandia</option>
                                        <option>LEGO</option>
                                        <option>Mattel</option>
                                        <option>ToysRUs</option>
                                        <option>SportsWorld</option>
                                    </Select>
                                <FormLabel color={'white'}>Category</FormLabel>
                                    <Select bg={'white'} placeholder='Select Category'>
                                        <option>Vehículos</option>
                                        <option>Muñecas</option>
                                        <option>Bloques de construcción</option>
                                        <option>Peluches</option>
                                        <option>Deportes</option>
                                    </Select>
                                <FormLabel color={'white'}>Minimum Age</FormLabel>
                                    <RadioGroup color={'white'} defaultValue='Itachi'>
                                        <HStack spacing='24px'>
                                        <Radio value='+2'>+2</Radio>
                                        <Radio value='+4'>+4</Radio>
                                        <Radio value='+6'>+6</Radio>
                                        <Radio value='+8'>+8</Radio>
                                        <Radio value='+10'>+10</Radio>
                                        <Radio value='+12'>+12</Radio>
                                        </HStack>
                                    </RadioGroup>
                                <FormLabel color={'white'}>Description</FormLabel>
                                    <Input type='text' value={form.description} name="description" bg={'white'} onChange={(e)=>handleChange(e)} />
                                <FormLabel color={'white'}>Quantity</FormLabel>
                                    <Input type='text' value={form.quantity} name="quantity" bg={'white'} onChange={(e)=>handleChange(e)} />
                                <FormLabel color={'white'}>Price</FormLabel>
                                    <Input type='text' value={form.price} name="price" bg={'white'} onChange={(e)=>handleChange(e)} />
                                <FormLabel color={'white'}>Image</FormLabel>
                                <Input type='file' border={'black'} />
                                <Button type="submit" >Create Toy</Button>
                            </Flex>
                        </FormControl>
                </form>
            </Flex>
        </VStack>
        
            
        </Box>
    )
}



export default Form;