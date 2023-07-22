import {useState} from "react";
import axios from "axios";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const LoginAuth0 = () => {

    const {isAuthenticated, user, loginWithRedirect} = useAuth0();
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email:"",
        password:"", 
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setLogin(prevData => ({...prevData, [name]: value}))
    };

    const handleSubmit = async(event) => {

        event.preventDefault();
        if(!login.email || !login.password){
            alert("hace falta correo o contraseña");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3010/users/login", login);

            loginWithRedirect({ appState: { isAuthenticated: true, user:response.data } });
            navigate("/");

        } catch (error) {
            console.log("hubo un error, intente mas tarde", error)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={login.email} onChange={handleChange}/>

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" value={login.password} onChange={handleChange}/>

                <button type="submit">ingresar</button>
            </form>
            
        </div>
    )

};