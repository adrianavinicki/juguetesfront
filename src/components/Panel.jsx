import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { GET_PRODUCTS_FILTERED_PAGE, getProducts, getProductsFilteredPage } from "../redux/actions";
import CardsContainer from "./CardsContainer";
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Flex,
    Link,
    Button,
  } from '@chakra-ui/react';
  import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

  

  
  export default function GridListWithHeading(props) {

    

    const dispatch = useDispatch()
    const productsData = useSelector(state=>state.filteredProducts)
    let currentPageData = Number(productsData.currentPage)
    const prueba = productsData.data
    const pages = Number(productsData.totalPages)
    console.log(productsData)

    useEffect(()=>{
      dispatch(getProducts());
  },[dispatch])
  
  

    const handlePageState = (pageNumber) => {
      dispatch(getProductsFilteredPage({pageNumber:pageNumber}))
      // currentPageData = pageNumber
    }


    return (
      
      <Box>
        <Stack spacing={4} as={Container} maxW={'3x3'} textAlign={'center'}>
          <Heading color={'white'} fontSize={'3xl'}>Product Edit</Heading>
          <Text color={'white'} fontSize={'xl'}>
            Panel for editing products. Here you can delete, update and modify all the products.
          </Text>
        </Stack>
        <Flex justify={'center'}
        marginTop={'10px'}>
        <div>
            <Button
              w={"100px"}
              _hover={""}
              color={"white"}
              bg={"blue.900"}
              onClick={() => handlePageState(currentPageData - 1)}
            >
              Anterior
            </Button>
            <span>
              Página {currentPageData} de {pages}
            </span>
            <Button
              w={"100px"}
              _hover={""}
              color={"white"}
              bg={"blue.900"}
              onClick={() => handlePageState(currentPageData + 1)}
            >
              Siguiente
            </Button>
          </div>
        </Flex>

        <Box>
            <Flex just>
            <Container maxW={'2xl'} h={'550px'} mt={10} bg={'gray.200'}
            paddingTop={'10px'}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
                {productsData.payload?.map((feature) => (
                <HStack  key={feature.id} align={'center'} w={'300px'} h={'73px'} bg={'gray.300'}>
                    <Box color={'red.500'} px={3}>
                      <Link>
                      <Icon as={DeleteIcon} />
                      </Link>
                    </Box>
                    <Box color={'blue.500'} px={3}>
                    <Link key={feature.id} href={`/edit/${feature.id}`}>
                    <Icon as={EditIcon} />
                    </Link>
                    </Box>
                    <VStack align={'start'}>
                    <Text fontWeight={600}>{feature.name}</Text>
                    <Text color={'gray.600'}>{feature.brand}</Text>
                    <Text color={'gray.600'}>{feature.category}</Text>
                    </VStack>
                </HStack>
                ))}
            </SimpleGrid>
            </Container>
            </Flex>
        </Box>
      </Box>
    );
  }