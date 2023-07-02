import { Link } from "react-router-dom";
import {Button, Flex, Box, Image, Card, Stack, CardBody, Heading, CardFooter, Text} from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import NavBar2 from "../../components/NavBar2";


const Detail = ()=>{

    const params = useParams()
    
    const productDetail = useSelector((state)=>state.productDetail)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct(params.id))   
    },[dispatch, params.id])


    return(
        <Box
        backgroundImage="url('/BG3.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        height="100vh"
        >
            <Flex justify="space-around" direction="column" align="center">
                <NavBar2 />
                <div>
                    {productDetail ? (
                        <div>
                            <Box  w={'1000px'} h={'600px'}>
                                <Flex>
                                    <Box>
                                        <Flex direction={'column'}>
                                            <br />
                                            <br />
                                            <br />
                                            <Heading color={'white'} fontSize={'50px'} size='md'>{productDetail.name}</Heading>
                                            <Text color={'white'} fontSize={'35px'} py='5' fontWeight={'600'}>Price: ${productDetail.price}</Text>
                                            <Text color={'white'} fontSize={'25px'} py='2' fontWeight={'600'}>{productDetail.description}</Text>
                                            <Text color={'white'} fontSize={'25px'} py='2' fontWeight={'600'}>Category: {productDetail.category}</Text>
                                            <Text color={'white'} fontSize={'25px'} py='2' fontWeight={'600'}>Minimum Age: {productDetail.minimun_age}</Text>
                                            <Text color={'white'} fontSize={'25px'} py='2' fontWeight={'600'}>Brand: {productDetail.brand}</Text>
                                            <Text color={'white'} fontSize={'25px'} py='2' fontWeight={'600'}>Quantity: {productDetail.quantity}</Text>
                                            <Button variant='solid' colorScheme='facebook' w={'500px'}>
                                                Add To Cart: {productDetail.name}
                                            </Button>
                                        </Flex>
                                    </Box>
                                    <Box>   
                                    <Image
                                        boxSize='500px'
                                        objectFit={'contain'}
                                        src={productDetail.image} 
                                        alt={productDetail.name}
                                    />
                                    </Box>
                                </Flex>
                            </Box>
                            {/* <Card
                            direction={{ base: 'column', sm: 'row-reverse' }}
                            overflow='hidden'
                            bg={"transparent"}
                            w={'900px'}
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '500px' }}
                    src={productDetail.image} 
                    alt={productDetail.name}
                />

                <Stack >
                    <CardBody>
                    <Heading color={'white'} size='md'>{productDetail.name}</Heading>

                    <Text color={'white'} fontSize={'15px'} py='2'>
                        <h1>Description: {productDetail.description}</h1>
                        <p>Brand: {productDetail.brand}</p>
                        <h2>Category: {productDetail.category}</h2>
                        <h2>Minimum Age: {productDetail.minimun_age}</h2>
                        <h2>Quantity: {productDetail.quantity}</h2>
                        <h2>Price: ${productDetail.price}</h2>
                    </Text>
                    </CardBody>
                    <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy {productDetail.name}
                    </Button>
                    </CardFooter>
                </Stack>
            </Card> */}
                        </div>
                    ):('')}
                </div>
            </Flex> 
        </Box>
        
    )
}



export default Detail;