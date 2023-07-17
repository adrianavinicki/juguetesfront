import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    Input,
  

  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import NavBar2 from "../../components/NavBar2"
  import { useParams } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import { getProduct } from "../../redux/actions";
  import { addProductToCart } from "../../redux/actions"
  import React from 'react';
  import RatingDisplay from "../../components/RatingDisplay";

  
  export default function Simple() {

    const params = useParams()
    
    const productDetail = useSelector((state)=>state.productDetail)

    const [isOpen, setIsOpen] = useState(false);
    const [ratingValue, setRatingValue] = useState(0);
    const [comment, setComment] = useState("");

     const handleRatingSubmit = (productId, userId, rate) => {
    // Aquí puedes hacer la llamada a la API para enviar la calificación y actualizar el estado según sea necesario
    console.log(`Producto: ${productId}, Usuario: ${userId}, Calificación: ${rate}`);
  };


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct(params.id))   
    },[dispatch, params.id])

    const addProductCarrito = (product) => {
      dispatch(addProductToCart(product));
  };

     // Manejador para el clic en una estrella de calificación
    const handleRatingClick = (value) => {
    setRatingValue(value);
    setIsOpen(false); // Cerrar el popover después de hacer clic en una estrella
  };

  // Manejador para el cambio de comentario
    const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

    return (
      <Box
        backgroundImage="url('/BG3.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        height="100vh"
      >
        <NavBar2></NavBar2>
        <Container maxW={"7xl"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 6 }}
          >
            <Flex mt={"20%"} ml={"30%"}>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={productDetail.image}
                align={"center"}
                maxH={"300px"}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                  color={"white"}
                >
                  {productDetail.name}
                </Heading>
                <Text
                  color={useColorModeValue("white", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                >
                  ${productDetail.price}
                </Text>
              </Box>
              <Flex justifyContent="space-between" alignContent="center">
                <div onClick={() => setIsOpen(true)}>
                  {/* Contenido visible del PopoverTrigger */}
                  <RatingDisplay
                    productId={productDetail.id}
                    ratingValue={ratingValue}
                    handleRatingClick={handleRatingClick}
                  />
                </div>
                {/* <Box fontSize="2xl" color="gray.800">
                    <Box as="span" color="gray.600" fontSize="lg">
                      $
                    </Box>
                    {price.toFixed(2)}
                  </Box> */}
              </Flex>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={"lg"} color={"white"}>
                    {productDetail.description}
                  </Text>
                </VStack>
                <Box>
                  <Flex align={"center"} justify={"space-around"}>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={useColorModeValue("white", "yellow.300")}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Brand: {productDetail.brand}
                    </Text>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={useColorModeValue("white", "yellow.300")}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Category: {productDetail.category}
                    </Text>
                  </Flex>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("white", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Data
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Minimum Age:
                      </Text>{" "}
                      {productDetail.minimun_age}
                    </ListItem>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Quantity:
                      </Text>{" "}
                      {productDetail.quantity}
                    </ListItem>
                  </List>
                </Box>
              </Stack>

              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("gray.900", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={addProductCarrito(productDetail)}
              >
                Add to cart
              </Button>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping color="white" />
                <Text color={"white"}>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }