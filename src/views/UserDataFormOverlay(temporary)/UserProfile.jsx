import { useAuth0 } from "@auth0/auth0-react";
import NavBar2 from "../../components/NavBar2"
import { Box, Button, Text, Input, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getIdEmailUser } from "../../redux/actions";

export default function UserProfile() {

    const dispatch = useDispatch();
    const usuario = useSelector(state => state.idUser); //el back manda el id del user y el user entero
    const {user} = useAuth0();

    const [userDB, setUserDB] = useState(null);

    useEffect(() => {
        const getUser = async() => {
            if(usuario){
              try {
                const user = await axios.get(`http://localhost:3010/users/${usuario}`);
                setUserDB(user.data);
                } catch (error) {
                    console.error(error);
                }  
            }
            
        }

        getUser();
    }, [])

    const [userCreate, setUserCreate] = useState({
        first_name: user?.given_name,
        last_name: user?.family_name,
        email: user?.email,
        gender: "",
        delivery_address: "",
        role_id: "Cliente",
        mobile: "",

    });

    const handleChange = (e) => {
        setUserCreate((prevUserCreate) => ({
          ...prevUserCreate,
          [e.target.name]: e.target.value,
        }));
      };

    const handleSubmitUser = async() => {
        console.log(userCreate);
        try {
           const id = await axios.post("http://localhost:3010/users/create", userCreate);
            dispatch(getIdEmailUser(id.data.userID));
            alert("data actualizada con exito!")
        } catch (error) {
            console.log(error);
            alert("a ocurrido un error, por favor intente mas tarde");
            return;
        }
        
    };
    return (
        <Box 
        backgroundImage="url('/BG3.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="100vw"
        height="100vh">
            <NavBar2/>
           {console.log(usuario)}
            <Box
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            maxWidth="400px"
            mx="auto"
            my={4}
            >
            {/* el condicional espera a que cargue la data de user*/ }
            {user && (
                <>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Datos Del Usuario
                </Text>
                <Text fontWeight="bold">Nombre: {user.given_name}</Text>
                <Text fontWeight="bold">Apellido: {user.family_name}</Text>
                <Text fontWeight="bold">Email: {user.email}</Text>
               { !usuario? (<><Text fontWeight="bold" mt={4}>
              Formulario
            </Text>
            <Select
              name="gender"
              placeholder="Seleccionar género"
              value={userCreate.gender}
              onChange={handleChange}
              mt={2}
            >
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="X">Otro</option>
            </Select>
            <Input
              name="delivery_address"
              placeholder="Dirección de entrega"
              value={userCreate.delivery_address}
              onChange={handleChange}
              mt={2}
            />
            <Input
              name="mobile"
              placeholder="Número de teléfono"
              value={userCreate.mobile}
              onChange={handleChange}
              mt={2}
            />
            <Button onClick={handleSubmitUser} mt={4}>
              Guardar
            </Button>
            </>) : 
            (
            <>
            
            </>
            )}
                </>
            )}

        </Box>
        <Link to="/"><Button>seguir comprando</Button></Link>
        </Box>
    )
};