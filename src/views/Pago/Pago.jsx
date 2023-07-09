import {Button, Flex, Heading, Image, Box, Center, Text} from "@chakra-ui/react"
import NavBar2 from "../../components/NavBar2";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY;

//const {VITE_MERCADO_PAGO_PUBLIC_KEY} = process.env;
initMercadoPago(apiUrl);


//global state

export default function Payment (props) {

    const navigate = useNavigate()
    const detailOrderIdsArray = useSelector(state => state.detailOrdersUsersID);
    const detailCarrito = useSelector(state => state.cartItems);


    //sacar detailIds y el userId
    const [finalOrder, setFinalOrder] = useState(null);
    const [preferenceId, setPreferenceId] = useState(null);
    
        
       const handleOrder = async() => {
            //esto se podria hacer con un useEffect
        const orderID = await axios.post("http://localhost:3010/orders/create",{detailIds: detailOrderIdsArray, userId: 1});

        setFinalOrder(orderID.data);
        }; 
    
    

    const handlePayment = async() => {
        //aqui se mandaria la data a mercado pago

        //IMPORTANTE, una vez dado el OK de la orden, antes de mandar se borra el array de ids y carrito para que no haya duplicados, zaqui se borra el carrito
        const response = await axios.post("http://localhost:3010/payments/generate", {orderId: finalOrder.order.id})
        console.log(response.data.init_point)
        setPreferenceId(response.data.init_point)
        navigate(response.data.init_point)
        alert("mandado a mercado pago")

    };

    return (
    <Box 
    backgroundImage="url(public\BG4.jpg)"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    bg={'green'}
    >
    <Box>
        <NavBar2 />
    </Box>
    {console.log( finalOrder)}

    <Box bg={'aquamarine'}>
        <Text></Text>
        <Text>please check your order:</Text>
        {detailCarrito.map((product, index) =>(
            <div key={index}>
            <p >nombre: {product.name}</p>
            <p>cantidad: {product.quantity} unidades</p>

            
            </div>
        ))}

        

        <Button onClick={handleOrder}>seguro de su compra?</Button>
        <button onClick={handlePayment} >mandar a mercado pago</button>

        {/*<div id="wallet_container">
           {preferenceId ? <Wallet initialization={{ preferenceId: preferenceId }} />: null} 
        </div>*/}
        
    </Box>
    </Box>
    )
}