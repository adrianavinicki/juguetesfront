import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
// import PureComponent from './Chart';
import PieChart from './Chart';

export default function StatsGridWithImage() {
  return (
    <Box bg={'blue.900'} h={'400px'} w={'1050px'} marginTop={'45px'} marginLeft={'100px'} border={'4px solid'}
    borderColor={'white'}
    rounded={'lg'}>
      <Container maxW={'7xl'} maxH={'500px'} zIndex={10} position={'relative'}>
        <Flex>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={30}
            color={'gray.400'}
            justify={{ lg: '' }}
            py={{ base: 4, md: 5, xl: 30 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                STATS
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                Wonder Toys
              </Heading>
              <PieChart></PieChart>
            </Box>
          </Stack>
          <Flex flex={1} />
        </Stack>
        </Flex>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '12',
    content: (
      <>
        <StatsText>Sales</StatsText> in the last 24hs
      </>
    ),
  },
  {
    title: '40',
    content: (
      <>
        <StatsText>Toys</StatsText> available for selling
      </>
    ),
  },
  {
    title: '13%',
    content: (
      <>
        <StatsText>Increase</StatsText> in sales in the last Month
      </>
    ),
  },
  {
    title: '10.000+',
    content: (
      <>
        <StatsText>Sales</StatsText> currently dispatched to clients
      </>
    ),
  },
];