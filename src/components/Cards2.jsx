import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Flex,
  Image,
  Badge,
  Tooltip,
  VStack,
  Button,
  Collapse,
  Icon,
  Input,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { addProductToCart } from "../redux/actions";
import Rating from "./Rating";
import { useAuth0 } from "@auth0/auth0-react";

const ProductAddToCart = ({ id, image, name, price, rating, numReviews }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const { isAuthenticated, user } = useAuth0();
  const userId = isAuthenticated ? user.sub : null; // Obtener el ID de usuario si está autenticado

  const [ratingValue, setRatingValue] = useState(rating);
  const [comment, setComment] = useState("");

  const addProductToCartHandler = (product) => {
    dispatch(addProductToCart(product));
  };

  const getProductQuantityInCart = () => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const cartIconVisible = getProductQuantityInCart() > 0;

  const handleRatingClick = (value) => {
    setRatingValue(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  console.log("Desde Card: 1 " + userId); 
  return (
    <Box
      bg="white"
      w="250px"
      h="340px"
      borderWidth="3px"
      rounded="lg"
      shadow="lg"
      position="relative"
      margin="10px"
      gridAutoRows="1"
    >
      <Flex direction="column">
        <VStack>
          <Box h="220px">
            <Flex>
              <Link to={`/detail/${id}`}>
                <Image
                  src={image}
                  alt={`Picture of ${name}`}
                  roundedTop="lg"
                  maxH="200px"
                />
              </Link>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Box>
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                >
                  <Box
                    fontSize="13px"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    h="30px"
                    w="200px"
                  >
                    {name}
                  </Box>
                </Flex>

                <Flex>
                  <Button
                    colorScheme="facebook"
                    size="sm"
                    onClick={() =>
                      addProductToCartHandler({ id, image, name, price })
                    }
                  >
                    <Icon as={FiShoppingCart} />
                    Add to Cart
                  </Button>

                  <Collapse in={cartIconVisible}>
                    <Tooltip
                      label="Go to cart"
                      bg="white"
                      placement="top"
                      color="gray.800"
                      fontSize="1.2em"
                    >
                      <Flex>
                        <Link to="/cart">
                          <Icon
                            as={FiShoppingCart}
                            h={7}
                            w={7}
                            alignSelf="center"
                          />
                          <Badge
                            ml={1}
                            colorScheme="red"
                            position="absolute"
                            borderRadius="full"
                          >
                            {getProductQuantityInCart()}
                          </Badge>
                        </Link>
                      </Flex>
                    </Tooltip>
                  </Collapse>
                </Flex>
                <Flex justifyContent="space-between" alignContent="center">
                  <Rating
                    ratingValue={ratingValue}
                    handleRatingClick={handleRatingClick}
                    productId={id}
                    userId={userId} // Pasar el ID del usuario como prop
                  />
                  <Box fontSize="2xl" color="gray.800">
                    <Box as="span" color="gray.600" fontSize="lg">
                      $
                    </Box>
                    {price.toFixed(2)}
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProductAddToCart;
