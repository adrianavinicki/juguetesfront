import { Link } from "react-router-dom";
import {Button, Flex, Heading, VStack} from "@chakra-ui/react"

const Form = ()=>{
    return(
        <>
        <VStack>
            <Flex justify="space-around" direction="column" align="center">
                <Heading>Aca creas tu Juguete</Heading>
                <hr />
                <Link to={"/"}>
                    <Button colorScheme='teal' variant='solid'>Home</Button>
                </Link>
            </Flex>
        </VStack>
        
            
        </>
    )
}



export default Form;