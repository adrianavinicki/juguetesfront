import { Link } from "react-router-dom";
import {Button, Flex, Heading, VStack} from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Detail = ()=>{

    const params = useParams()
    
    const productDetail = useSelector((state)=>state.productDetail)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProduct(params.id))   
    },[dispatch, params.id])


    return(
        <>
        <VStack>
            <Flex justify="space-around" direction="column" align="center">
                <Link to={"/"}>
                    <Button colorScheme='teal' variant='solid'>Home</Button>
                </Link>
                <div>
                    {productDetail ? (
                        <div>
                            <h1>{productDetail.name}</h1>
                            <h2>{productDetail.brand}</h2>
                            <h2>{productDetail.category}</h2>
                            <h2>{productDetail.minimun_age}</h2>
                            <h2>{productDetail.description}</h2>
                            <h2>{productDetail.quantity}</h2>
                            <h2>{productDetail.price}</h2>
                            <img src={productDetail.image} alt={productDetail.name} />
                        </div>
                    ):("")}
                </div>
                {console.log(productDetail)}
            </Flex>
        </VStack>
        
            
        </>
    )
}



export default Detail;