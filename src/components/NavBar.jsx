import { Link } from "react-router-dom"
import { Image, Flex, Button } from "@chakra-ui/react"


const NavBar = () => {
    return(
        <div>
            <Flex align={'center'}>
                <Link to="/">
                    <Button colorScheme='facebook' variant='solid'>Home</Button>
                </Link>
                <Image src='/LOGO PNG.png' boxSize={'200px'} alt='Wonder Toys' />
                <Link to="/form">
                    <Button colorScheme='facebook' variant='solid'>Create Toy</Button>
                </Link>
            </Flex>
        </div>
    )
}


export default NavBar;