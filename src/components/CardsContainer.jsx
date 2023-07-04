import Cards from "./Cards";
import Cards2 from "./Cards2";
import {
  Flex,
  Box,
  Button,
  Image,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FilterAndOrder from "./Filters";
import SearchBar from "./SearchBar";
import axios from "axios";
import { getProductsFiltered, getProductsFilteredPage } from "../redux/actions";
import { useDispatch } from "react-redux";

const CardsContainer = (props) => {

  const dispatch = useDispatch()
  const productsData = useSelector(state=>state.filteredProducts)
  let currentPageData = Number(productsData.currentPage)
  const prueba = productsData.data
  const pages = Number(productsData.totalPages)



  const handlePageState = (pageNumber) => {
    dispatch(getProductsFilteredPage({pageNumber:pageNumber}))
    // currentPageData = pageNumber
  }

  return (
    <div>
      <div>
        <Box bg={""} w={"1663px"}>
          <Flex direction={"column"} paddingTop={"60px"} align={"center"}>
            <div>
              <Button
                w={"100px"}
                _hover={""}
                color={"white"}
                bg={"#0E1A40"}
                onClick={() => handlePageState(currentPageData - 1)}
              >
                Anterior
              </Button>
              <span>
                Página {currentPageData} de {pages}
              </span>
              <Button
                w={"100px"}
                _hover={""}
                color={"white"}
                bg={"#0E1A40"}
                onClick={() => handlePageState(currentPageData + 1)}
              >
                Siguiente
              </Button>
            </div>

            <Box>
              <Flex>
                <Box
                  bg={"gray.400"}
                  marginLeft={""}
                  rounded={"20px"}
                  w={"250px"}
                  h={"530px"}
                >
                  <Flex direction={"column"} align={"center"}>
                    <FilterAndOrder />
                  </Flex>
                </Box>
                <div>
                  <SimpleGrid columns={5} bg={''} w={'1300px'} h={'730px'}>
                    {productsData.payload?.map((product) => {
                          return (
                                  <Cards2
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    description={product.description}
                                    productoCarrito={product}
                                  />
                          );
                        })}
                  </SimpleGrid>
                </div>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default CardsContainer;
