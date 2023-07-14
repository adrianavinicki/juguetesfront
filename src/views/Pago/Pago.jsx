import {Button, Flex, Heading, Image, Box, Center, Text} from "@chakra-ui/react"
import NavBar2 from "../../components/NavBar2";
import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useNavigate } from "react-router-dom";
import { getDetailOrdersIDArray } from "../../redux/actions";
const apiUrl = import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY;
const POST_NEW_ORDER = import.meta.env.VITE_POST_NEW_ORDER;
const POST_PAYMENT = import.meta.env.VITE_POST_PAYMENT;

initMercadoPago(apiUrl);


//global state

export default function Payment (props) {

    const navigate = useNavigate()
    const detailOrderIdsArray = useSelector(state => state.detailOrdersUsersID);
    const detailCarrito = useSelector(state => state.cartItems);

   

    const totalPrice = detailCarrito.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log(detailOrderIdsArray);

    //sacar detailIds y el userId
    const [finalOrder, setFinalOrder] = useState(null);
    const [preferenceId, setPreferenceId] = useState(null);
    const [activateButton, setActivateButton] = useState(false);
    
        
       const handleOrder = async() => {
            //esto se podria hacer con un useEffect
       const orderArray = detailOrderIdsArray[0];
        const userId = 1; // ojo recordar arreglar con lo de user de kervys
        const orderID = await axios.post(POST_NEW_ORDER/*"http://localhost:3010/orders/create"*/,{detailIds:orderArray, userId});

       setFinalOrder(orderID.data.order)
       setActivateButton(true);
    }; 
    
    

    const handlePayment = async() => {
        //aqui se mandaria la data a mercado pago

        //IMPORTANTE, una vez dado el OK de la orden, antes de mandar se borra el array de ids y carrito para que no haya duplicados, zaqui se borra el carrito
        console.log(finalOrder)
        const response = await axios.post(POST_PAYMENT/*"http://localhost:3010/payments/generate"*/, {orderId: finalOrder.id})
        console.log(response.data.init_point)
        setPreferenceId(response.data.init_point)
        window.location.href = response.data.init_point
        //navigate(response.data.init_point)
        

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
        
        <Text>please check your order:</Text>

        {detailCarrito.map((product, index) =>(
            <div key={index}>
            <p >nombre: {product.name}</p>
            <p>cantidad: {product.quantity} unidades</p>

            
            </div>
        ))}

        <h3>total: ${totalPrice}</h3> 
            {/*que pasa si le doy a OK purchase y luego regreso?. que pasa si no estoy de acuerdo con la compra?*/}
        <Button onClick={handleOrder}>OK Purchase?</Button>
        {activateButton && <Button onClick={handlePayment} >Payment</Button>}

        {/*<div id="wallet_container">
           {preferenceId ? <Wallet initialization={{ preferenceId: preferenceId }} />: null} 
        </div>*/}
        
    </Box>
    </Box>
    )
}