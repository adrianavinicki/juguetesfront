import {Button, Flex, Heading, Image, Box, Center, Text} from "@chakra-ui/react"
import NavBar2 from "../../components/NavBar2";
import React from "react";



export default function Payment () {
    return (
    <Box 
    backgroundImage="url(public\BG4.jpg)"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    bg={'green'}
    >
    <Box>
        <NavBar2 />
    </Box>
    <Box bg={'green'}>
        <Text>aca es el payment , dsps va a mercado pago</Text>
    </Box>
    </Box>
    )
}