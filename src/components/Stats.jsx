import React from 'react';
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import { Link } from 'react-router-dom';
  import StatsGridWithImage from "./StatsGrid"
  
  //interface StatsCardProps {
  //  title: string;
  //  stat: string;
  //  icon: ReactNode;
  //}
  function StatsCard(props /*StatsCardProps*/) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'8'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('white', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated  color={'white'}>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'} color={'white'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('white', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box maxW="7xl"  mx={'auto'} pt={30} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={1}
          fontWeight={'bold'}
          color={'white'}>
          Wonder Toys Statistics
        </chakra.h1>
        <br />
        <br />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Users'}
            stat={'5,000'}
            icon={<BsPerson size={'3em'} />}
          />
          <Link to= "/admin/orders">
            <StatsCard
            title={'Sales'}
            stat={'1,000'}
            icon={<FiServer size={'3em'} />}
            />
          </Link>
          
          <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
        <StatsGridWithImage />
      </Box>
    );
  }