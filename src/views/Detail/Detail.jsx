import { Link } from "react-router-dom";
import {Button, Flex, Box, Image, Card, Stack, CardBody, Heading, CardFooter, Text} from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Detail = ()=>{

    const params = useParams()
    
    const productDetail = useSelector((state)=>state.productDetail)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct(params.id))   
    },[dispatch, params.id])


    return(
        <Box
        backgroundImage="url('/BG2.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        height="100vh"
        >
            <Flex justify="space-around" direction="column" align="center">
                <Image src='BG4.png' alt='Wonder Toys Detail' />
                <Link to={"/"}>
                    <Button colorScheme='teal' variant='solid'>Home</Button>
                </Link>
                <div>
                    {productDetail ? (
                        <div>
                            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                bg={"transparent"}
                w={'800px'}
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '500px' }}
                    src={productDetail.image} 
                    alt={productDetail.name}
                />

                <Stack>
                    <CardBody>
                    <Heading color={'white'} size='md'>{productDetail.name}</Heading>

                    <Text color={'white'} py='2'>
                        {productDetail.description}
                        <h2>{productDetail.brand}</h2>
                        <h2>{productDetail.category}</h2>
                        <h2>{productDetail.minimun_age}</h2>
                        <h2>{productDetail.quantity}</h2>
                        <h2>{productDetail.price}</h2>
                    </Text>
                    </CardBody>
                    <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy {productDetail.name}
                    </Button>
                    </CardFooter>
                </Stack>
            </Card>
                        </div>
                    ):('')}
                </div>
            </Flex> 
        </Box>
        
    )
}



export default Detail;