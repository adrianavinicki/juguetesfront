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
  HStack,
  Link,
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
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import NavBar2 from "../../components/NavBar2";
import { LiaStarSolid } from "react-icons/lia"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { emptyCart, getProduct } from "../../redux/actions";
import { addProductToCart, emptyDetail } from "../../redux/actions";
import React from "react";
import RatingDisplay from "../../components/RatingDisplay";

export default function Simple() {
  const params = useParams();

  const productDetail = useSelector(state => state.productDetail);

  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getProduct(params.id));
    dispatch(emptyCart())
  }, [dispatch, params.id]);

  dispatch(emptyCart())

  const addProductCarrito = (product) => {
    dispatch(addProductToCart(product));
  };


  const falsasReviews = [{
    id:1,
    name: "Juan Sapo",
    stars: 3,
    text: "Un adorable peluche de osito marrón con una bufanda roja.",
  },
  {
    id:2,
    name: "Martin Fenix",
    stars: 4,
    text: "Cumplio las espectativas.",
  },
  {
    id:3,
    name: "Carlos SinTac",
    stars: 5,
    text: "Le encanto al nene.",
  },
]

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
      <Container maxW={"7xl"} bg={""}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 6 }}
        >
          <Flex mt={"20%"} ml={"20%"}>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={productDetail.image}
              align={"center"}
              maxH={"350px"}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 8 }}>
            <Box as={"header"} bg={""}>
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
                fontWeight={"bold"}
                fontSize={"2xl"}
              >
                ${productDetail.price}
              </Text>
            </Box>
            <Flex justifyContent="space-between" alignContent="center">
                  <div>
                    {productDetail?.id && <RatingDisplay
                      productId={productDetail.id}
                    />}
                  </div>
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
                <Text fontWeight={'bold'} fontSize={"lg"} color={"white"}>
                  {productDetail.description}
                </Text>
              </VStack>
              <Box>
                <Flex>
                  <Box bg={""} w={'40%'} mt={'9%'}>
                    <Text
                      fontSize={{ base: "30px", lg: "30px" }}
                      color={useColorModeValue("white", "yellow.300")}
                      fontWeight={"bold"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Data
                    </Text>

                    <List spacing={2}>
                      <ListItem>
                        <Text
                          fontSize={"20px"}
                          color={"white"}
                          as={"span"}
                          fontWeight={"500"}
                        >
                          Minimum Age: {productDetail.minimun_age}
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize={"20px"}
                          color={"white"}
                          as={"span"}
                          fontWeight={"500"}
                        >
                          Quantity: {productDetail.quantity}
                        </Text>{" "}
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize={"20px"}
                          color={"white"}
                          as={"span"}
                          fontWeight={"500"}
                        >
                          Brand: {productDetail.brand}
                        </Text>{" "}
                      </ListItem>
                      <ListItem>
                        <Text
                          fontSize={"20px"}
                          color={"white"}
                          as={"span"}
                          fontWeight={"500"}
                        >
                          Category: {productDetail.category}
                        </Text>{" "}
                      </ListItem>
                    </List>
                  </Box>
                  <Box bg={''} w={'70%'}>
                    <Text color={'white'} fontWeight={'bold'} fontSize={'30px'}>Reviews</Text>
                    <Box mt={'15px'} bg={"gray.800"} h={'100%'} overflowY="auto" maxH={'250'} maxW={'370px'}>
                      {falsasReviews.map((review) => (
                        <HStack  key={review.id} align={'center'} w={'330px'} h={'100px'} bg={'white'}  m={'10px'} rounded={'5px'}>
                        <VStack ml={'10px'} align={'start'}>
                        <Text fontWeight={600}>{review.name}</Text>
                        <Box>
                          <Flex>
                          <Text color={'gray.600'}>Rating: {review.stars}</Text>
                          <LiaStarSolid size="1.4em"/>
                          </Flex>
                        </Box>
                        <Text color={'gray.600'}>Comment: {review.text}</Text>
                        </VStack>
                    </HStack>
                      ))}
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Stack>

            <Button
              onClick={() => addProductCarrito(productDetail)}
              rounded={"none"}
              w={"full"}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add to cart
            </Button>
            <Link href="/">
            <Button ml={'42%'}>Go Back</Button>
            </Link>
            {/* <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping color="white" />
              <Text color={"white"}>2-3 business days delivery</Text>
            </Stack> */}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
