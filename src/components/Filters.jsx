import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts, filterByAge, filterByPrice } from "../redux/actions";
import { Box, Flex, Button, FormLabel, Select, Input } from '@chakra-ui/react'
import SearchBar from "./SearchBar";

const FilterAndOrder = ({ setPage }) => {
    const dispatch = useDispatch();

    const handleAgeFilter = (e) => {
        const selectedAge = e.target.value;
        dispatch(filterByAge(selectedAge));
        setPage(1);
    };

    const resetInput = () => {
        const selects = document.querySelectorAll(".resetSelect");
            selects.forEach((select) => (select.selectedIndex = 0));
    }

    const ages = [
        'all',
        '+2',
        '+3',
        '+4',
        '+5',
        '+6',
        '+7',
        '+8',
        '+9',
        '+10',
        '+11',
        '+12',
    ];
    const categoriesData = [
        "All",
        "Peluches",
        "Bloques de construcción",
        "Muñecas",
        "Vehículos",
        "Puzzles",
        "Ciencia",
        "Imitación",
        "Juegos de exterior",
        "Juegos de mesa",
        "Robótica",
        "Juegos de imitación",
        "Pistola",
        "Arte y manualidades",
        "Construction toys",
        "Electronic toys",
        "Vehicle Toys",
        "Playsets",
        "Kitchen Playsets",
        "Deportes",
        "Pista de carreras",
        "Art and Craft Toys"
    ];
    const brandsData = [
        "All",
        "Juguetelandia",
        "LEGO",
        'Mattel',
        "ToyRUs",
        "SportsWorld",
        "Toyland",
        "ScienceKids",
        "Playtime"
    ];

    const [input, setInput] = useState('');

    const inputHandler = (e) => {
        const value = e.target.value;
        setInput(value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(filterByPrice(input));
    };

    return (
        <div>
            <Box>
                <br />
                <Flex direction={'column'}>
                <Button onClick={()=>{
                    setPage(1)
                    dispatch(getProducts())
                    dispatch(filterByAge('all'))
                    resetInput()
                }}>Reset All</Button>
                <br />
                <SearchBar />
                <br />
                <FormLabel>Filter Age</FormLabel>
                <Select  onChange={handleAgeFilter} bg='white'>
                {ages.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>

                 <FormLabel>Filter Categories</FormLabel>
                <Select  onChange={handleAgeFilter} bg='white'>
                {categoriesData.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>

                 <FormLabel>Filter Brands</FormLabel>
                <Select  onChange={handleAgeFilter} bg='white'>
                {brandsData.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>
                <div>
                    <FormLabel>Max Price: </FormLabel>
                    <Input type='number' name='input' value={`${input}`} onChange = {inputHandler} w={'110px'} bg='white'></Input>
                    <Button onClick={submitHandler}>Search</Button>
                </div>
                </Flex>
            </Box>
        </div>
    )

}

export default FilterAndOrder;