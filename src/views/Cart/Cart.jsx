import { useSelector, useDispatch } from "react-redux";
import { Box, Heading, Text, UnorderedList, ListItem, Image, Button, Card } from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { removeProductFromCart, decreaseProductQuantity, increaseProductQuantity } from "../../redux/actions";
export default function Cart() {

    const dispatch = useDispatch();
    const productsToBuy = useSelector(state => state.cartItems);

    const totalPrice = productsToBuy.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveProduct = (productId) => {
        dispatch(removeProductFromCart(productId));
      };
    
    const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseProductQuantity(productId));
    };

    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseProductQuantity(productId));
    };

    return (
        <Box backgroundImage="url('/BG3.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        height="100vh"
        p={12}>
            <Heading as="h2" size="lg" mb={4}>
                Carrito
            </Heading>

            <Link to="/"> <Button variant='solid' colorScheme='facebook' mb={4}>volver</Button></Link>
            {productsToBuy.length === 0? (

        <Text>el carrito esta vacio.</Text>

      ): (
          
        <UnorderedList listStyleType="none" pl={0}>
          {productsToBuy.map((item) => (
            <ListItem key={item.id} mb={2}>
                <Card boxShadow="lg" borderRadius="md">
                    <Box p={4}>
                    <Image src={item.image} alt={item.name} objectFit="contain" maxHeight={200} mb={2}/>
                    <Text>
                        <strong>articulo: </strong>{item.name}
                    </Text>
                     <Text>
                     <strong>cantidad: </strong>{item.quantity}
                     </Text>
                     <Text>
                      <strong>precio: </strong> ${item.price}
                     </Text>
                     <Button variant="outline" colorScheme="red" size="sm" onClick={() => handleDecreaseQuantity(item. id)} mt={2}>
                        -
                      </Button>

                      <Button variant="outline" colorScheme="red" size="sm" onClick={() => handleIncreaseQuantity(item.id)} mt={2}>
                        +
                      </Button>

                     <Button variant="outline" colorScheme="red" size="sm" onClick={() => handleRemoveProduct(item.id)} mt={2}>
                       Eliminar
                     </Button>

                    <br />
                     {console.log(productsToBuy)}
                    </Box>
                </Card>
            </ListItem>
          ))}

        </UnorderedList>

      )}
        
        <Text mt={4} color='blue.600'>
            <b>Total: ${totalPrice}</b>
        </Text>

        <Link to="/"> <Button variant='solid' colorScheme='facebook'>volver</Button></Link>
        </Box>
    )
}