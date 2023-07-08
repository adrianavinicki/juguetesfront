import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { CartItem } from './Cartitem'
  import { CartOrderSummary } from './CartOrderSummary'
  import { cartData } from './_data'
  import NavBar2 from "../../components/NavBar2"
  
  export default function Cart2 () {
    return (
    <Box 
    backgroundImage="url('/BG3.jpg')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    width="100vw"
    height="100vh"
    >
    <NavBar2/>
    <Box bg={'white'} margin={'70px'} padding={'30px'} rounded={'20px'}>
        {/* <Flex> */}
            <Stack
            direction={{
            base: 'column',
            lg: 'row',
            }}
            align={{
            lg: 'flex-start',
            }}
            spacing={{
            base: '8',
            md: '16',
            }}
        >
            <Stack
            spacing={{
                base: '8',
                md: '10',
            }}
            flex="2"
            >
            <Heading fontSize="2xl" fontWeight="extrabold">
                Toy Cart (3 items)
            </Heading>
    
            <Stack spacing="6">
                {cartData.map((item) => (
                <CartItem key={item.id} {...item} />
                ))}
            </Stack>
            </Stack>
    
            <Flex direction="column" align="center" flex="1" marginTop={'30px'}>
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
            </HStack>
            </Flex>
        </Stack>
        {/* </Flex> */}
    </Box>
    </Box>
    )
  }