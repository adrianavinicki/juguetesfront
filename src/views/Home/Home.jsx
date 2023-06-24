import {Button, Flex, Heading} from "@chakra-ui/react"
import CardsContainer from "../../components/CardsContainer";
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
            <Flex justify="space-around">
            <Link to={"/form"}>
                <Button colorScheme='teal' variant='solid'>Form</Button>
            </Link>
            <Link to={"/detail"}>
                <Button colorScheme='teal' variant='solid'>Detail</Button>
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