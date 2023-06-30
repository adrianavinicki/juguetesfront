import {Button, Flex, Heading, Image, Box, Center} from "@chakra-ui/react"
import CardsContainer from "../../components/CardsContainer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import NavBar from "../../components/NavBar";



const Home = ()=>{

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    return(
        <Box 
        backgroundImage="url('/BG5.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        //height="100vh"
        >
            <Box>
                <Flex direction={"row"} align={'center'} justify={'space-evenly'}>
                <NavBar />
                </Flex>
                <Box>
                    <Flex direction={'column'}>
                        <Image src='/BG4.png'  alt='School Bus' />
                    </Flex>
                </Box>
            </Box>
            <Box bg={'transparent'} w={'100vw'} h={'1000px'}>
                <CardsContainer/>
            </Box>
            
        </Box>
    )
}



export default Home;