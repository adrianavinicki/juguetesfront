import { Box } from '@chakra-ui/react';
import BasicStatistics from "../../components/Stats"
import NavBar2 from "../../components/NavBar2"


const Admin = () => {
    return(
        <Box
        backgroundImage="url('/BG3.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        height="100vh"
        >
        <NavBar2></NavBar2>
        <BasicStatistics/>
        </Box>
    )
}



export default Admin;