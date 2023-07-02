import React from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Box,
    Link,
  } from '@chakra-ui/react';
  import { SmallCloseIcon } from '@chakra-ui/icons';
  import { useParams } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import { getProduct } from "../redux/actions";

  
  export default function ProductProfileEdit(features)/*: JSX.Element*/ {

    const params = useParams()
    
    const productDetail = useSelector((state)=>state.productDetail)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct(params.id))   
    },[dispatch, params.id])

    return (
      <Box>
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={4}
          marginTop={'6px'}
          h={'730px'}>
          <Heading lineHeight={0} fontSize={20}>
          Update: {productDetail.name}
          </Heading>
          <br />
          <FormControl id="productName">
            <Stack direction={['column', 'row']} spacing={6}>
              <Center>
                <Avatar size="xl" src={productDetail.image}>
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                </Avatar>
              </Center>
              <Center w="full">
                <Button w="full">Change Picture</Button>
              </Center>
            </Stack>
          </FormControl>
          <FormControl id="productName" isRequired>
            <FormLabel>Current Name: {productDetail.name}</FormLabel>
            <Input
              placeholder="New Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="productBrand" isRequired>
            <FormLabel>Current Brand: {productDetail.brand}</FormLabel>
            <Input
              placeholder="New Brand"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="productCategory" isRequired>
            <FormLabel>Current Category: {productDetail.category}</FormLabel>
            <Input
              placeholder="New Category"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="productPrice" isRequired>
            <FormLabel>Current Price: ${productDetail.price}</FormLabel>
            <Input
              placeholder="New Price"
              _placeholder={{ color: 'gray.500' }}
              type="number"
            />
          </FormControl>
          <FormControl id="productCategory" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="New Description"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="productCategory" isRequired>
            <FormLabel>Current Quantity: {productDetail.quantity}</FormLabel>
            <Input
              placeholder="New Quantity"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="productCategory" isRequired>
            <FormLabel>Current Minimum Age: {productDetail.minimun_age}</FormLabel>
            <Input
              placeholder="New Minimum Age"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <Stack spacing={6} direction={['column', 'row']}>
            <Link href={'/edit'}>
              <Button
                bg={'red.400'}
                color={'white'}
                w="full"
                _hover={{
                  bg: 'red.500',
                }}>
                Cancel
              </Button>
            </Link>
            <Button
              bg={'blue.400'}
              color={'white'}
              w="full"
              _hover={{
                bg: 'blue.900',
              }}>
              Submit Update
            </Button>
          </Stack>
        </Stack>
      </Flex>
      </Box>
    );
  }