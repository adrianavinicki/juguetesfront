import {Button, Flex, Heading, Image, Box, Center} from "@chakra-ui/react"
import CardsContainer from "../../components/CardsContainer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import NavBar2 from "../../components/NavBar2";
import CaptionCarousel from "../../components/Carousel"
import SmallWithLogoLeft from "../../components/Footer"



const Home = ()=>{

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    return(
        <Box 
        backgroundImage="url('/BG5.jpg.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        height="100%"
        >
            <Box>
                <Flex direction={"row"} align={'center'} justify={'space-evenly'}>
                <NavBar2 />
                </Flex>
                <CaptionCarousel></CaptionCarousel>
                <Box w={'100vw'}>
                    <CardsContainer/>
                </Box>
                <SmallWithLogoLeft />
            </Box>
            {/* <SmallWithLogoLeft /> */}
            
        </Box>
    )
}



export default Home;