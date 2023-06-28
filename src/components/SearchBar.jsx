import { Input, InputGroup, InputLeftElement, Flex, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { getProductsName } from '../redux/actions';
import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const dispatch = useDispatch();
  
  const [searchNames, setSearchNames] = useState('');
  const handleInputChange = (event) => {
    const {value} = event.target; 
    setSearchNames(value)
  };

  const handleSearch = () => {
    dispatch(getProductsName(searchNames))
    setSearchNames("");
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
      <Input type="text" placeholder="Search..." value={searchNames} bg={'white'} onChange={handleInputChange} />
      <Button onClick={handleSearch}>Search</Button>
    </InputGroup>
  );
};

export default SearchBar;