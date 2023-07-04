import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { GET_PRODUCTS_FILTERED_PAGE, getProducts } from "../redux/actions";
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

  
  // Replace test data with your own
//   const features = products.map(function (x, i) {
//     return {
//       id: i,
//       title: 'Lorem ipsum dolor sit amet',
//       text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
//     };
//   });

  
  export default function GridListWithHeading(props) {

    const [data, setData] = useState([]);
    const [totalElements, setTotalElements] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const productsData = useSelector(state=>state.filteredProducts)
  
  
    // useEffect(() => {
    //   // Función para obtener los datos paginados desde el backend
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(
    //         `http://localhost:3010/products?pageNumber=${currentPage}&pageSize=${pageSize}`
    //       );
    //       console.log(response);
    //       const { data, totalElements, totalPages } = response.data;
    //       setData(data);
    //       setTotalElements(totalElements);
    //       setTotalPages(totalPages);
    //     } catch (error) {
    //       console.error("Error al obtener los datos paginados:", error);
    //     }
    //   };
  
    //   fetchData();
    // }, [currentPage]);
  
    // Función para cambiar de página
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    console.log(productsData)

    return (
      
      <Box p={10}>
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
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Anterior
            </Button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            <Button
              w={"100px"}
              _hover={""}
              color={"white"}
              bg={"blue.900"}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Siguiente
            </Button>
          </div>
        </Flex>

        <Box>
            <Flex just>
            <Container maxW={'2xl'} h={'500px'} mt={10} bg={'gray.200'}
            paddingTop={'10px'}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
                {productsData.map((feature) => (
                <HStack  key={feature.id} align={'center'} w={'300px'} h={'90px'} bg={'gray.300'}>
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