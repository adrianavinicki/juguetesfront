import { Box, Flex, Card, CardHeader, CardFooter, CardBody, Stack, Button, Heading, Divider, ButtonGroup, Text, Image, Icon, Badge, Collapse } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"
import { addProductToCart } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Cards = (props) => {

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

    return(
        <div>
            <Card maxW='sm' h={cartIconVisible ? "560px" : "520px"} margin={'8px'}>
                <CardBody>
                    <Image
                    src={props.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.name}</Heading>
                    <Text>
                        {props.description}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {"$" + props.price}
                    </Text>
                    </Stack>
                    <Collapse in={cartIconVisible}>
                    {getProductQuantityInCart() > 0 && (
                    <Link to="/cart">
                    <Flex align="center">
                        <Icon as={FaShoppingCart} boxSize={4} />
                            {<Badge ml={1} colorScheme="red"  position="relative" borderRadius="full">{getProductQuantityInCart()}</Badge>}
                    </Flex>
                    </Link>
                    )}
                    </Collapse>
                </CardBody>
            <Divider />
                <CardFooter display="flex" justifyContent="space-between" alignItems="center">
                    <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='facebook' onClick={() => addProductCarrito(props.productoCarrito)}>
                    <Flex align="center">
                        <Icon as={FaShoppingCart} boxSize={4} />
                    </Flex>
                        Add to Cart
                    </Button>
                    <Link key={props.id} to={`/detail/${props.id}`}>
                    <Button variant='ghost' colorScheme='facebook'>
                        Detail
                    </Button>
                    </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Cards