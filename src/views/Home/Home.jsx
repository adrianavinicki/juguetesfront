import {Button, Flex, Heading, Image, Box, Center} from "@chakra-ui/react"
import CardsContainer from "../../components/CardsContainer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";


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
                <Link to={"/form"}>
                <Button  variant='solid'>Create Toy</Button>
                </Link>
                <Image src='LOGO PNG.png' boxSize={'200px'} alt='Wonder Toys' />
                <Button  variant='solid'>Contact Us</Button>
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