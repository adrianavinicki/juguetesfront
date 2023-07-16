import {Button, Flex, Heading, Image, Box, Center} from "@chakra-ui/react"
import CardsContainer from "../../components/CardsContainer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIdEmailUser, getProducts } from "../../redux/actions";
import NavBar2 from "../../components/NavBar2";
import CaptionCarousel from "../../components/Carousel"
import SmallWithLogoLeft from "../../components/Footer"
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


const Home = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user, isLoading } = useAuth0();
  

    useEffect(()=>{
        //aqui se puedde poner un if que verifique si el array de products no es cero para no llamar tanto al back
        dispatch(getProducts());
    },[dispatch])

    useEffect(() => {
        const getUserId = async() => {
            //if(isAuthenticated && !user?.given_name || !user?.family_name){
            //    alert("bienvenido a wonderToys, para proseguir con su experiencia, por favor llene los ultimos campos en su profile");
            //    navigate("/Profile");
            //} aqui tratart de crear al usuario, si el given name y el family name estan vacios (esto para los ratings!!!) (REDIRIGIR AL USUARIO AL PROFILE PARA QUE COMPLETE LOS DATOS QuE FALTAN, tanto para usar los ratings como para comprar en el carrito), redirigirlo al profile para que complete esos datos. Los campos gender y address pueden ser nulos, verificarlos en el cart
            try {
                console.log(user)
                const idUser = await axios.post("http://localhost:3010/users/userEmail", {email: user?.email});
                dispatch(getIdEmailUser(idUser.data.idUser));
                console.log(idUser.data.idUser)
                

            } catch (error) {
                console.log("cargando el id del user")
            }
        }

        getUserId();

  }, [user])

    return(
        <Box 
        backgroundImage="url('/BG6.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100%"
        height="100%"
        >
            {console.log(user)}
            <Box bg={''}>
                <Flex direction={"row"} align={'center'} justify={'space-evenly'}>
                <NavBar2 />
                </Flex>
                <CaptionCarousel></CaptionCarousel>
                <Box bg={''} h={'100vh'} maxW={'97%'}>
                    <CardsContainer/>
                </Box>
                <Box mt={''}>
                    <SmallWithLogoLeft />
                </Box>
            </Box>
            {/* <SmallWithLogoLeft /> */}
            
        </Box>
    )
}



export default Home;
