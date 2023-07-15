import { useAuth0 } from "@auth0/auth0-react";
import NavBar2 from "../../components/NavBar2"
import { Box, Button, Text, Input, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getIdEmailUser } from "../../redux/actions";

const GET_USERS = import.meta.env.VITE_GET_USERS;
const POST_NEW_USER = import.meta.env.VITE_POST_NEW_USER;

export default function UserProfile() {
    const dispatch = useDispatch();
    const usuario = useSelector(state => state.idUser); //el back manda el id del user y el user entero
    const {user} = useAuth0(); // si no esta el nombre y el apellido, que el formulario muestre llenar esos campos

    const [userDB, setUserDB] = useState(null);
  console.log(user)

    useEffect(() => {
        const getUser = async() => {
            if(usuario){
              try {
                const user = await axios.get(`${GET_USERS}/${usuario}`/*`http://localhost:3010/users/${usuario}`*/);
                setUserDB(user.data);
                } catch (error) {
                    console.error(error);
                }  
            }
            
        }

        getUser();
    }, [usuario])

    const [userCreate, setUserCreate] = useState({
        first_name: userDB?.first_name,
        last_name: userDB?.last_name,
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
           const id = await axios.post(POST_NEW_USER/*"http://localhost:3010/users/create"*/, userCreate);
            dispatch(getIdEmailUser(id.data.userID));
<<<<<<< HEAD
            alert("data actualizada con exito!");
            Navigate("/")
=======
            alert("User Created")
>>>>>>> develop
        } catch (error) {
            console.log(error);
            alert("There is an error, please try later");
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
           {console.log(usuario, user?.email)}
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
            {usuario && (
            <Box>
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Datos Del Usuario
                </Text>
                <Text fontWeight="bold">Nombre: {userDB?.first_name}</Text>
                <Text fontWeight="bold">Apellido: {userDB?.last_name}</Text>
                <Text fontWeight="bold">Email: {userDB?.email}</Text>
                <Text fontWeight="bold">Direccion: {userDB?.delivery_address}</Text>
            </Box>)}
              {console.log(userDB)}
            {user && (
                <>
                
               { !userDB?.first_name || !userDB?.last_name /*|| !user?.given_name || !user?.family_name*/ ? (<><Text fontWeight="bold" mt={4}>
                <h3>por favor ingrese sus datos</h3>
              Formulario
            </Text>
            <Input name="first_name" placeholder="nombre" value={userCreate.first_name} onChange={handleChange}/>
            <Input name="last_name" placeholder="apellido" value={userCreate.last_name} onChange={handleChange}/>
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
            </>) : !usuario ?
            (
            
            <Box><Text fontWeight="bold" mt={4}>
              <h3>por favor ingrese sus datos</h3>
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
            </Box>
            ) :null}
                </>
            )}

        </Box>
        {/*aqui incluir la data de las compras de cada user*/}
        <Link to="/"><Button>seguir comprando</Button></Link>
        </Box>
    )
};