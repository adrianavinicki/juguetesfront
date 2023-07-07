import React from 'react';
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    VStack,
   // Link,
    Button,
    Grid,
    GridItem,
    Collapse, 
    Heading, 
    Text
  } from '@chakra-ui/react';
  import { BsLinkedin, BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import { useDispatch, useSelector } from "react-redux";
  import { Link } from 'react-router-dom';
  import { addProductToCart } from '../redux/actions';
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  
  
  
  function Rating({ rating, numReviews }) {
    return (
      <Box >
        <Flex align={'center'}>
          {Array(5)
            .fill('')
            .map((_, i) => {
              const roundedRating = Math.round(rating * 2) / 2;
              if (roundedRating - i >= 1) {
                return (
                  <BsStarFill
                    key={i}
                    style={{ marginLeft: '1' }}
                    color={i < rating ? 'black' : 'gray.300'}
                  />
                );
              }
              if (roundedRating - i === 0.5) {
                return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
              }
              return <BsStar key={i} style={{ marginLeft: '1' }} />;
            })}
        </Flex>
      </Box>
    );
  } 
  
  function ProductAddToCart(props) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartItems);
    
    const addProductCarrito = (product) => {
        dispatch(addProductToCart(product));
    };

    const getProductQuantityInCart = () => {
        const item = cartItems.find((item) => item.id === props.id);
        return item ? item.quantity : 0;
      };

    const cartIconVisible = getProductQuantityInCart() > 0;

    return (
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          w={'250px'}
          h={'340px'}
          borderWidth="3px"
          rounded="lg"
          shadow="lg"
          position="relative"
          margin={'10px'}
          gridAutoRows={'1'}>
          <Flex direction={'column'}>
            <VStack>
              <Box h={'220px'}>
                <Flex>
                <Link key={props.id} to={`/detail/${props.id}`}>
                  <Image
                      src={props.image}
                      alt={`Picture of ${props.name}`}
                      roundedTop="lg"
                      maxH={'200px'}
                    />
                </Link>
                </Flex>
              </Box>
              <Box >
                <Flex>
                  <Box >
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                      <Box
                        fontSize="13px"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                        h={'30px'}
                        w={'200px'}>
                        {props.name}
                      </Box>

                      
                    </Flex>
          
                    <Flex>
                      <Button colorScheme='facebook' size="sm" onClick={() => addProductCarrito(props.productoCarrito)}>
                        <Icon as={FiShoppingCart}/>
                        Add to Cart
                      </Button>

                      <Collapse in={cartIconVisible}>
                      <Tooltip
                        label="Go to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'1.2em'}>

                        <Flex>
                        <Link to={'/cart'}>
                          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                          {<Badge ml={1} colorScheme="red"  position="absolute" borderRadius="full">{getProductQuantityInCart()}</Badge>}
                        </Link>  
                        </Flex>
                        


                      </Tooltip>
                      </Collapse>
                      
                    </Flex>
                    <Flex justifyContent="space-between" alignContent="center">
                      <Rating rating={data.rating} numReviews={data.numReviews} />
                      <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                        <Box as="span" color={'gray.600'} fontSize="lg">
                          $
                        </Box>
                        {props.price.toFixed(2)}
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Flex>
        </Box>
    );
  }
  
  export default ProductAddToCart;