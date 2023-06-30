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
                <Select id="ageSelect" onChange={handleFilters} bg='white' name="minimun_age">
                {ages.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>

                 <FormLabel>Filter Categories</FormLabel>
                <Select id="categorySelect" onChange={handleFilters} bg='white' name="category">
                {categoriesData.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>

                 <FormLabel>Filter Brands</FormLabel>
                <Select id="brandSelect" onChange={handleFilters} bg='white' name="brand" >
                {brandsData.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
                 </Select>
                <div>
                    <FormLabel>Max Price: </FormLabel>
                    <Input type='number' name='price' value={`${input}`} onChange = {inputHandler} w={'110px'} bg='white'></Input>
                    <Button onClick={handleFilters} value={`${input}`} name='price'>Search</Button>
                </div>
                    <Button value='Asc' onClick={clickHandlerPrice}>Higher</Button>
                    <Button value='Desc' onClick={clickHandlerPrice}>Lower</Button>
                </Flex>
            </Box>
        </div>
    )

}

export default FilterAndOrder;