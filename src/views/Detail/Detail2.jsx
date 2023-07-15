import React from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Input,
  chakra,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../../redux/actions";
import NavBar2 from "../../components/NavBar2";
import { addProductToCart } from "../../redux/actions";
import RatingDisplay from "../../components/RatingDisplay";

export default function socialProfileWithImageHorizontal() {
  const params = useParams();

  const productDetail = useSelector((state) => state.productDetail);

  const [isOpen, setIsOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingSubmit = (productId, userId, rate) => {
    // Aquí puedes hacer la llamada a la API para enviar la calificación y actualizar el estado según sea necesario
    console.log(`Producto: ${productId}, Usuario: ${userId}, Calificación: ${rate}`);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

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
      {productDetail ? (
        <Box bg={""}>
          <Center marginTop={"50px"} py={20}>
            <Stack
              borderWidth="5px"
              borderRadius="lg"
              borderColor={"gray.800"}
              w={{ sm: "100%", md: "840px" }}
              height={{ sm: "476px", md: "30rem" }}
              direction={{ base: "column", md: "row" }}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              padding={4}
            >
              <Flex bg="" align={"center"}>
                <Image
                  objectFit="cover"
                  boxSize="100%"
                  maxH={"300px"}
                  src={productDetail.image}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={"30px"} fontFamily={"body"}>
                  {productDetail.name}
                </Heading>
                <Text fontWeight={600} color={"gray.600"} size="sm" mb={4}>
                  {productDetail.description}
                </Text>
                <Text
                  textAlign={"center"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Brand: {productDetail.brand}
                </Text>
                <br />
                <Text
                  textAlign={"center"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Category: {productDetail.category}
                </Text>
                <br />
                <Text
                  textAlign={"center"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  color={useColorModeValue("gray.700", "gray.400")}
                  px={3}
                >
                  Price: ${productDetail.price}
                </Text>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"gray.700"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bg: "blue.500",
                    }}
                    _focus={{
                      bg: "blue.500",
                    }}
                    onClick={addProductCarrito(productDetail)}
                  >
                    Add to Cart
                   </Button>
                   <br />
                   
                </Stack>
                <Flex justifyContent="space-between" alignContent="center">
                      <div onClick={() => setIsOpen(true)}>
                        {/* Contenido visible del PopoverTrigger */}
                        <RatingDisplay/>
                      </div>
                  {/* <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <PopoverTrigger>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader>Rate this product</PopoverHeader>
                      <PopoverBody>
                        <Flex justifyContent="center">
                          <Rating ratingValue={ratingValue} handleRatingClick={handleRatingClick} />
                        </Flex>
                        <Input
                          placeholder="Your comment"
                          value={comment}
                          onChange={handleCommentChange}
                          mt={4}
                        />
                        <Button
                          colorScheme="blue"
                          mt={4}
                          onClick={() => setIsOpen(false)}
                        >
                          Submit
                        </Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover> */}
                  {/* <Box fontSize="2xl" color="gray.800">
                    <Box as="span" color="gray.600" fontSize="lg">
                      $
                    </Box>
                    {price.toFixed(2)}
                  </Box> */}
                </Flex>

              </Stack>
            </Stack>
          </Center>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
