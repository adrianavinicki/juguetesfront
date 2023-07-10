// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Box,
//   Flex,
//   Image,
//   Badge,
//   Tooltip,
//   VStack,
//   Button,
//   Collapse,
//   Icon,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   Input,
//   chakra,
// } from "@chakra-ui/react";
// import { FiShoppingCart } from "react-icons/fi";
// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
// import { addProductToCart } from "../redux/actions";
// import Rating from "./Rating";

// const ProductAddToCart = ({ id, image, name, price, rating, numReviews }) => {
//   // Dispatch para agregar productos al carrito
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cartItems);

//   // Estado local para el popover de calificación y comentario
//   const [isOpen, setIsOpen] = useState(false);
//   const [ratingValue, setRatingValue] = useState(0);
//   const [comment, setComment] = useState("");

//   // Manejador para agregar productos al carrito
//   const addProductToCartHandler = (product) => {
//     dispatch(addProductToCart(product));
//   };

//   // Obtener la cantidad del producto en el carrito
//   const getProductQuantityInCart = () => {
//     const item = cartItems.find((item) => item.id === id);
//     return item ? item.quantity : 0;
//   };

//   // Determinar si mostrar el icono del carrito en el botón
//   const cartIconVisible = getProductQuantityInCart() > 0;

//   // Manejador para el clic en una estrella de calificación
//   const handleRatingClick = (value) => {
//     setRatingValue(value);
//     setIsOpen(false); // Cerrar el popover después de hacer clic en una estrella
//   };

//   // Manejador para el cambio de comentario
//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   return (
//     <Box
//       bg="white"
//       w="250px"
//       h="340px"
//       borderWidth="3px"
//       rounded="lg"
//       shadow="lg"
//       position="relative"
//       margin="10px"
//       gridAutoRows="1"
//     >
//       <Flex direction="column">
//         <VStack>
//           <Box h="220px">
//             <Flex>
//               <Link to={`/detail/${id}`}>
//                 <Image
//                   src={image}
//                   alt={`Picture of ${name}`}
//                   roundedTop="lg"
//                   maxH="200px"
//                 />
//               </Link>
//             </Flex>
//           </Box>
//           <Box>
//             <Flex>
//               <Box>
//                 <Flex
//                   mt="1"
//                   justifyContent="space-between"
//                   alignContent="center"
//                 >
//                   <Box
//                     fontSize="13px"
//                     fontWeight="semibold"
//                     as="h4"
//                     lineHeight="tight"
//                     isTruncated
//                     h="30px"
//                     w="200px"
//                   >
//                     {name}
//                   </Box>
//                 </Flex>

//                 <Flex>
//                   <Button
//                     colorScheme="facebook"
//                     size="sm"
//                     onClick={() =>
//                       addProductToCartHandler({ id, image, name, price })
//                     }
//                   >
//                     <Icon as={FiShoppingCart} />
//                     Add to Cart
//                   </Button>

//                   <Collapse in={cartIconVisible}>
//                     <Tooltip
//                       label="Go to cart"
//                       bg="white"
//                       placement="top"
//                       color="gray.800"
//                       fontSize="1.2em"
//                     >
//                       <Flex>
//                         <Link to="/cart">
//                           <Icon
//                             as={FiShoppingCart}
//                             h={7}
//                             w={7}
//                             alignSelf="center"
//                           />
//                           <Badge
//                             ml={1}
//                             colorScheme="red"
//                             position="absolute"
//                             borderRadius="full"
//                           >
//                             {getProductQuantityInCart()}
//                           </Badge>
//                         </Link>
//                       </Flex>
//                     </Tooltip>
//                   </Collapse>
//                 </Flex>
//                 <Flex justifyContent="space-between" alignContent="center">
//                   <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
//                     <PopoverTrigger>
//                       <div onClick={() => setIsOpen(true)}>
//                         {/* Contenido visible del PopoverTrigger */}
//                         <Rating ratingValue={ratingValue} handleRatingClick={handleRatingClick} />
//                       </div>
//                     </PopoverTrigger>
//                     <PopoverContent>
//                       <PopoverHeader>Rate this product</PopoverHeader>
//                       <PopoverBody>
//                         <Flex justifyContent="center">
//                           <Rating ratingValue={ratingValue} handleRatingClick={handleRatingClick} />
//                         </Flex>
//                         <Input
//                           placeholder="Your comment"
//                           value={comment}
//                           onChange={handleCommentChange}
//                           mt={4}
//                         />
//                         <Button
//                           colorScheme="blue"
//                           mt={4}
//                           onClick={() => setIsOpen(false)}
//                         >
//                           Submit
//                         </Button>
//                       </PopoverBody>
//                     </PopoverContent>
//                   </Popover>
//                   <Box fontSize="2xl" color="gray.800">
//                     <Box as="span" color="gray.600" fontSize="lg">
//                       $
//                     </Box>
//                     {price.toFixed(2)}
//                   </Box>
//                 </Flex>
//               </Box>
//             </Flex>
//           </Box>
//         </VStack>
//       </Flex>
//     </Box>
//   );
// };

// export default ProductAddToCart;

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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Input,
  chakra,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { addProductToCart } from "../redux/actions";
import Rating from "./Rating";

const ProductAddToCart = ({ id, image, name, price, rating, numReviews }) => {
  // Dispatch para agregar productos al carrito
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  // Estado local para el popover de calificación y comentario
  const [isOpen, setIsOpen] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [comment, setComment] = useState("");

  // Manejador para agregar productos al carrito
  const addProductToCartHandler = (product) => {
    dispatch(addProductToCart(product));
  };

  // Obtener la cantidad del producto en el carrito
  const getProductQuantityInCart = () => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  // Determinar si mostrar el icono del carrito en el botón
  const cartIconVisible = getProductQuantityInCart() > 0;

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
                  <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <PopoverTrigger>
                      <div onClick={() => setIsOpen(true)}>
                        {/* Contenido visible del PopoverTrigger */}
                        <Rating
                          ratingValue={ratingValue}
                          handleRatingClick={handleRatingClick}
                          productId={id} // Pasar el id del producto como prop
                        />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader>Rate this product</PopoverHeader>
                      <PopoverBody>
                        <Flex justifyContent="center">
                          <Rating
                            ratingValue={ratingValue}
                            handleRatingClick={handleRatingClick}
                            productId={id} // Pasar el id del producto como prop
                          />
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
                  </Popover>
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
