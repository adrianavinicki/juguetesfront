import {Button, Flex, Heading} from "@chakra-ui/react"
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
        <>
            <Flex justify="space-around">
            <Link to={"/form"}>
                <Button colorScheme='teal' variant='solid'>Create Toy</Button>
            </Link>
            </Flex>
            
            <hr />
            <hr />
            <Flex justify="space-around">
            <Heading>Wonder Toys</Heading>
            </Flex>
            <CardsContainer/>
        </>
    )
}



export default Home;