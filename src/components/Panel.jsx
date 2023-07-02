import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getProducts } from "../redux/actions";
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
  
    useEffect(() => {
      // Función para obtener los datos paginados desde el backend
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3010/products?pageNumber=${currentPage}&pageSize=${pageSize}`
          );
          console.log(response);
          const { data, totalElements, totalPages } = response.data;
          setData(data);
          setTotalElements(totalElements);
          setTotalPages(totalPages);
        } catch (error) {
          console.error("Error al obtener los datos paginados:", error);
        }
      };
  
      fetchData();
    }, [currentPage]);
  
    // Función para cambiar de página
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    // const products = useSelector(state=>state.filteredProducts)
    // const productsData = products.data

    // const listProducts = [
    //   {
    //     id: 1001,
    //     name: "Peluche de osito",
    //     brand: "Juguetelandia",
    //     category: "Peluches",
    //     minimun_age: 3,
    //     description: "Un adorable peluche de osito marrón con una bufanda roja.",
    //     image:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxjgX_Wu5dfBDX5m9YGH12YZ4LisG8q3pEg&usqp=CAU",
    //     product_status: true,
    //     quantity: 2000,
    //     price: 2999,
    //   },
    //   {
    //     id: 1002,
    //     name: "Set de lego clásico",
    //     brand: "LEGO",
    //     category: "Bloques de construcción",
    //     minimun_age: 5,
    //     description:
    //       "Un set de bloques de construcción LEGO clásicos para construir diferentes estructuras.",
    //     image:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbp4765aENZ5WnZRjDlSgigsy3_8_Q8QcCVr-omKgWSMtsnZlEps8cetju0tiXN9ysNk&usqp=CAU",
    //     product_status: true,
    //     quantity: 2000,
    //     price: 5999,
    //   },
    //   {
    //     id: 1003,
    //     name: "Muñeca Barbie",
    //     brand: "Mattel",
    //     category: "Muñecas",
    //     minimun_age: 4,
    //     description: "Una muñeca Barbie con ropa elegante y accesorios.",
    //     image:
    //       "https://m.media-amazon.com/images/I/61ZvnbbbfdL._AC_UF894,1000_QL80_.jpg",
    //     product_status: true,
    //     quantity: 2000,
    //     price: 9999,
    //   },
    //   {
    //     id: 1004,
    //     name: "Camión de bomberos de juguete",
    //     brand: "ToysRUs",
    //     category: "Vehículos",
    //     minimun_age: 3,
    //     description:
    //       "Un camión de bomberos de juguete con luces y sonidos realistas.",
    //     image:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdTKo6TOfY51by5TGHCj7pQhlq7kpguoPHQ&usqp=CAU",
    //     product_status: true,
    //     quantity: 2000,
    //     price: 8999,
    //   },
    //   {
    //     id: 1005,
    //     name: "Pelota de fútbol",
    //     brand: "SportsWorld",
    //     category: "Deportes",
    //     minimun_age: 6,
    //     description: "Una pelota de fútbol de tamaño estándar con diseño colorido.",
    //     image:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLtZNuCiWSCZQKw3JwAHP1gJJYRnvkZZbwwt5k2Xx5H-uAxsTjsY-EG-i7-AMaQXQZ9c&usqp=CAU",
    //     product_status: true,
    //     quantity: 2000,
    //     price: 2499,
    //   },
    //   {
    //     id: 1006,
    //     name: "Puzzle de animales",
    //     brand: "Toyland",
    //     category: "Puzzles",
    //     minimun_age: 4,
    //     description: "Un puzzle de 100 piezas con ilustraciones de animales.",
    //     image:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kx8UICMPlClIVLqpbLkQ42kuzHvXX_K7lrR-FYeWnjnF8jukCJIPdHMEmREv-4_J408&usqp=CAU",
    //     product_status: true,
    //     quantity: 2000,
    //     price: 1999,
    //   },
    //   {
    //     id: 1007,
    //     name: "Kit de experimentos científicos",
    //     brand: "ScienceKids",
    //     category: "Ciencia",
    //     minimun_age: 8,
    //     description:
    //       "Un kit de experimentos científicos para aprender y divertirse.",
    //     image:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukLij0hFUkDdh7kL6qSbAg3LZDU6FhurZY4zMOrKtped6ngL2DP2atpgps-J5wUH14nE&usqp=CAU",
    //     product_status: true,
    //     quantity: 2000,
    //     price: 3999,
    //   },
    //   {
    //     id: 1008,
    //     name: "Cocina de juguete",
    //     brand: "Playtime",
    //     category: "Imitación",
    //     minimun_age: 2,
    //     description:
    //       "Una cocina de juguete con utensilios y accesorios para jugar a ser chef.",
    //     image:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgutQ9hONo_tlf35fKVWekPtpe6So7_ZQkAQ&usqp=CAU",
    //     product_status: true,
    //     quantity: 2000,
    //     price: 11999,
    //   },
    // ];

    // const dispatch = useDispatch();
    
    // useEffect(()=>{
    //     dispatch(getProducts());
    // },[dispatch])

    // console.log(listProducts)
    // console.log(productsData)
    console.log(data)

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
              bg={"#0E1A40"}
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
              bg={"#0E1A40"}
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
                {data.map((feature) => (
                <HStack  key={feature.id} align={'center'} w={'300px'} h={'90px'} bg={'gray.400'}>
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