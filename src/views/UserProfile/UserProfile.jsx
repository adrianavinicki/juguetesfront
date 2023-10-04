import { useAuth0 } from "@auth0/auth0-react";
import NavBar2 from "../../components/NavBar2";
import { Box, Button, Text, Input, Select, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getIdEmailUser, PostUser } from "../../redux/actions";
import { useToast } from "@chakra-ui/react";

const GET_USERS = import.meta.env.VITE_GET_USERS;
const POST_NEW_USER = import.meta.env.VITE_POST_NEW_USER;

export default function UserProfile() {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.idUser); //el back manda el id del user y el user entero
  const actualUser = useSelector((state) => state.actualUser);
  const { user, isAuthenticated } = useAuth0();
  console.log("userCreate", user, isAuthenticated);
  const toast = useToast();

  //
  //ACOMODAR USUARIO, AHORA ES EL USER ENTERO
  //const [userDB, setUserDB] = useState(null);
  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      if (usuario) {
        try {
          const user = await axios.get(`${GET_USERS}/${usuario}`);
          setUserDB(user.data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    getUser();
  }, [usuario]);

  const userMail = user?.email;

  console.log(userMail, "holaa");

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    mobile: "",
    delivery_address: "",
    role_id: "Cliente",
    email: user?.name,
  });

  console.log(form);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmitUser = (e) => {
    toast({
      title: "Se ha registrado con exito.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    dispatch(PostUser(form));
  };

  return (
    <Box
      backgroundImage="url('/BG3.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      height="100vh"
      display={"flex"}
      flexDirection={"column"}
    >
      <NavBar2 />
      <Flex bg={""} h={"70vh"} justify={"center"} direction={"column"}>
        <Box
          bg="white"
          p={4}
          borderRadius="md"
          boxShadow="md"
          width="400px"
          mx="auto"
          my={4}
        >
          {/* el condicional espera a que cargue la data de user*/}
          {usuario && (
            <Box>
              <Text fontSize="xl" fontWeight="bold" mb={"4vh"}>
                Datos Del Usuario
              </Text>
              <Text fontWeight="bold">Nombre: {actualUser?.first_name}</Text>
              <Text fontWeight="bold">Apellido: {actualUser?.last_name}</Text>
              <Text fontWeight="bold">Email: {actualUser?.email}</Text>
              <Text fontWeight="bold">
                Direccion: {actualUser?.delivery_address}
              </Text>
            </Box>
          )}
          {user && (
            <>
              {!actualUser?.first_name || !actualUser.last_name ? (
                <>
                  <Text fontWeight="bold" mt={4}>
                    <h3>Por favor ingrese sus datos</h3>
                  </Text>
                  <Input
                    name="first_name"
                    placeholder="nombre"
                    value={form.first_name}
                    onChange={handleChange}
                  />
                  <Input
                    name="last_name"
                    placeholder="apellido"
                    value={form.last_name}
                    onChange={handleChange}
                  />
                  <Select
                    name="gender"
                    placeholder="Seleccionar género"
                    value={form.gender}
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
                    value={form.delivery_address}
                    onChange={handleChange}
                    mt={2}
                  />
                  <Input
                    name="mobile"
                    placeholder="Número de teléfono"
                    value={form.mobile}
                    onChange={handleChange}
                    mt={2}
                  />

                  <Link to="/">
                    {" "}
                    <Button onClick={handleSubmitUser} mt={4}>
                      Guardar
                    </Button>
                  </Link>
                </>
              ) : !actualUser ? (
                <Box>
                  <Text fontWeight="bold" mt={4}>
                    <h3>por favor ingrese sus datos</h3>
                    Formulario
                  </Text>
                  <Select
                    name="gender"
                    placeholder="Seleccionar género"
                    value={form.gender}
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
                    value={form.delivery_address}
                    onChange={handleChange}
                    mt={2}
                  />
                  <Input
                    name="mobile"
                    placeholder="Número de teléfono"
                    value={form.mobile}
                    onChange={handleChange}
                    mt={2}
                  />
                  <Button onClick={handleSubmitUser} mt={4}>
                    Guardar
                  </Button>
                </Box>
              ) : null}
            </>
          )}
        </Box>
        <Box ml={"45%"}>
          <Link to="/">
            <Button>seguir comprando</Button>
          </Link>
        </Box>
      </Flex>
      {/*aqui incluir la data de las compras de cada user*/}
    </Box>
  );
}
