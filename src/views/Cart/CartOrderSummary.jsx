import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
  import { formatPrice } from './PriceTag'
  import { useSelector, useDispatch } from "react-redux";
  import axios from 'axios';



  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = () => {


    const productsToBuy = useSelector(state => state.cartItems);
    // console.log(productsToBuy[0].quantity)

    const handleSubmit = async (quantity, productId, userId) => {
      console.log(quantity, productId, userId)
      await axios.post("http://localhost:3010/detailorders/create",{quantity, productId, userId})
    }

    const totalPrice = productsToBuy.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(totalPrice)} />
          {/* <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem> */}
          {/* <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem> */}
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(totalPrice)}
            </Text>
          </Flex>
        </Stack>
        <Link href='/payment'>
          <Button type='submit' onClick={() => handleSubmit(productsToBuy[0].quantity, productsToBuy[0].id, 1)} colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />} >
            Order
          </Button>
        </Link>
      </Stack>
    )
  }