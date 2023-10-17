import { useAuth0 } from "@auth0/auth0-react";
import NavBar2 from "../../components/NavBar2";
import { Box, Button, Text, Input, Select, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getIdEmailUser,
  PostUser,
  putUser,
  getUser,
} from "../../redux/actions";
import { useToast } from "@chakra-ui/react";

const GET_USERS = import.meta.env.VITE_GET_USERS;
const POST_NEW_USER = import.meta.env.VITE_POST_NEW_USER;

export default function UserProfile() {
  const dispatch = useDispatch();
  //const usuario = useSelector((state) => state.idUser); //el back manda el id del user y el user entero
  const actualUser = useSelector((state) => state.actualUser);
  const { user, isAuthenticated } = useAuth0();
  //console.log("userCreate", user, isAuthenticated);
  const toast = useToast();

  const userMail = user?.email;

  //console.log(userMail, "holaa");

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    mobile: "",
    delivery_address: "",
    role_id: "Cliente",
    email: user?.name,
  });

  const [update, setUpdate] = useState(false);

  //console.log(form);

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

  const handleUpdateUser = () => {
    try {
      if (updateUser.first_name === "") {
        updateUser.first_name = actualUser.first_name;
      }
      if (updateUser.last_name === "") {
        updateUser.last_name = actualUser.last_name;
      }
      if (updateUser.delivery_address === "") {
        updateUser.delivery_address = actualUser.delivery_address;
      }

      dispatch(putUser(updateUser));

      toast({
        title: "Usuario Actualizado",
        description: "El Usuario a sido actualizado con exito.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      setUpdateUser({
        first_name: "",
        last_name: "",
        delivery_address: "",
        email: user?.email,
      });
      dispatch(getUser(userMail));
      setUpdate(false);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const [updateUser, setUpdateUser] = useState({
    first_name: "",
    last_name: "",
    delivery_address: "",
    email: user?.email,
  });

  const handleUserChange = (event) => {
    let { name, value } = event.target;
    setUpdateUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleModifyData = (e) => {
    setUpdate(true);
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
          {actualUser.id ? (
            <>
              {" "}
              <Box>
                <Text fontSize="xl" fontWeight="bold" mb={"4vh"} display={'flex'} justifyContent={'center'}>
                  Datos Del Usuario
                </Text>
                <Text mb={"1vh"}>
                  Nombre: <span style={{fontWeight:'bold'}}>{actualUser?.first_name}</span>
                  {update ? (
                    <Input
                      w={"60%"}
                      onChange={handleUserChange}
                      name="first_name"
                      value={updateUser.first_name}
                    ></Input>
                  ) : (
                    ""
                  )}
                </Text>
                <Text mb={"1vh"}>
                  Apellido: <span style={{fontWeight:'bold'}}>{actualUser?.last_name}</span>
                  {update ? (
                    <Input
                      w={"60%"}
                      onChange={handleUserChange}
                      name="last_name"
                      value={updateUser.last_name}
                    ></Input>
                  ) : (
                    ""
                  )}
                </Text>
                <Text mb={"1vh"}>Email: <span style={{fontWeight:'bold'}}>{actualUser?.email}</span></Text>
                <Text mb={"1vh"}>
                  Direccion: <span style={{fontWeight:'bold'}}>{actualUser?.delivery_address}</span>
                  {update ? (
                    <Input
                      w={"60%"}
                      onChange={handleUserChange}
                      name="delivery_address"
                      value={updateUser.delivery_address}
                    ></Input>
                  ) : (
                    ""
                  )}
                </Text>
              </Box>
            </>
          ) : (
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
          )}
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Link to="/">
            <Button>seguir comprando</Button>
          </Link>
          {update ? (
            <Link to={'/'}>
            <Button ml={"2vh"} onClick={handleUpdateUser}>
              Guardar
            </Button>
            </Link>
          ) : (
            <Button ml={"2vh"} onClick={handleModifyData}>
              Modificar los Datos
            </Button>
          )}
        </Box>
      </Flex>
      {/*aqui incluir la data de las compras de cada user*/}
    </Box>
  );
}
