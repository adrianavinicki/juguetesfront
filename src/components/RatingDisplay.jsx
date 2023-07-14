import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const RatingDisplay = () => {

    return(
        <Flex alignItems="center">
            {[...Array(5)].map((star, i) => {
               return <Box key={i} ml={1} mt={2} >
                  <BsStar/>
                </Box>
            })}
        </Flex>
    )


};


export default RatingDisplay;