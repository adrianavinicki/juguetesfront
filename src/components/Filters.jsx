import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts, filterByAge, filterByPrice, filterByCategory, filterByBrand, orderByPrice, getProductsFiltered } from "../redux/actions";
import { Box, Flex, Button, FormLabel, Select, Input } from '@chakra-ui/react'
import SearchBar from "./SearchBar";

const FilterAndOrder = ({ setPage }) => {
    const dispatch = useDispatch();

    // const [filteredObject, setFilteredObject] = useState({});

    // const filtersHandler = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setFilteredObject({...filteredObject, [name]:value})

    //     const prueba = {...filteredObject, [name]:value}
    //     dispatch(combinedFilters(prueba))
    // }

    // const handleAgeFilter = (e) => {
    //     const selectedAge = e.target.value;
    //     dispatch(filterByAge(selectedAge));
    //     setPage(1);
    // };

    // const handleCategoryFilter = (e) => {
    //     const category = e.target.value;
    //     dispatch(filterByCategory(category));
    //     setPage(1);
    // };

    // const handleBrandFilter = (e) => {
    //     const brand = e.target.value;
    //     dispatch(filterByBrand(brand));
    //     setPage(1);
    // };

    const clickHandlerPrice = (e) => {
        const method = e.target.value
        dispatch(orderByPrice(method))
    };

    const resetInput = () => {
        //  const selects = document.querySelectorAll(".resetSelect");
        //      selects.forEach((select) => (select.selectedIndex = 0 ));
        var dropDown = document.getElementById("ageSelect");
        var dropDown2 = document.getElementById("brandSelect");
        var dropDown3 = document.getElementById("categorySelect");
        dropDown.selectedIndex = "All";
        dropDown2.selectedIndex = "All";
        dropDown3.selectedIndex = "All";

    }


    const ages = [
        'All',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
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
        "Mattel",
        "ToysRUs",
        "SportsWorld",
        "Toyland",
        "ScienceKids",
        "Playtime",
        "Berjuan",
        "Nerf",
        "Hasbro",
        "Makeblock",
        "Barbie",
        "Meccano",
        "ToyZone",
        "Puzzlemaster",
        "Juguetitos",
        "VTech",
        "Melissa & Doug",
        "Hot Wheels",
    ];

    const [input, setInput] = useState('');


    const inputHandler = (e) => {
        const value = e.target.value;
        setInput(value)
    }


    const handleFilters = (e) => {
            const name = e.target.name
            const value = e.target.value
            dispatch(getProductsFiltered(name, value));
            setInput('')
        };

    return (
        <div>
            <Box w={'200px'} h={'550px'}>
                <br />
                <Flex direction={'column'} align={'center'}>
                <Button _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} bg={'blue.900'} color={'white'} w={'100px'} onClick={()=>{
                    setPage(1)
                    dispatch(getProducts())
                    dispatch(filterByAge('all'))
                    resetInput()
                }}>Reset All</Button>
                <br />
                <Box>
                    <SearchBar />
                </Box>
                <br />
                <FormLabel>Filter Age</FormLabel>
                <Select w={'130px'} id="ageSelect" onChange={handleFilters} bg={'gray.200'} color={'black'} name="minimun_age">
                {ages.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>

                 <FormLabel>Filter Categories</FormLabel>
                <Select w={'130px'} id="categorySelect" onChange={handleFilters} bg={'gray.200'} color={'black'} name="category">
                {categoriesData.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>

                 <FormLabel>Filter Brands</FormLabel>
                <Select w={'130px'} id="brandSelect" onChange={handleFilters} bg={'gray.200'} color={'black'} name="brand" >
                {brandsData.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>
                 <br />
                <div>
                    <FormLabel>Max Price: </FormLabel>
                    <Input type='number' name='price' value={`${input}`} onChange = {inputHandler} w={'110px'} bg={'blue.900'} color={'white'}></Input>
                    <Button _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} bg={'blue.900'} color={'white'} onClick={handleFilters} value={`${input}`} name='price'>Search</Button>
                </div>
                <br />
                <Box>
                    <Button _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} bg={'green.500'} color={'white'} value='Asc' onClick={clickHandlerPrice}>Higher</Button>
                    <Button _hover={{transform: 'translateY(-2px)',boxShadow: 'lg',}} bg={'red.500'} color={'white'} value='Desc' onClick={clickHandlerPrice}>Lower</Button>
                </Box>
                </Flex>
            </Box>
        </div>
    )

}

export default FilterAndOrder;