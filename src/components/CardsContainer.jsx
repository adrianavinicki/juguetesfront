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
  const [data, setData] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;
  const productsData = useSelector(state=>state.filteredProducts)
  let currentPageData = Number(productsData.currentPage)
  const prueba = productsData.data
  // console.log(data)

  // useEffect(() => {
  //   // Función para obtener los datos paginados desde el backend
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3010/products?pageNumber=${currentPage}&pageSize=${pageSize}`
  //       );
  //       const { data, totalElements, totalPages } = response.data;
  //       setData(data);
  //       setTotalElements(totalElements);
  //       setTotalPages(totalPages);
  //     } catch (error) {
  //       console.error("Error al obtener los datos paginados:", error);
  //     }
  //   };

  //   fetchData();
  // }, [currentPage]);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                // disabled={currentPage === 1}
                onClick={() => handlePageState(currentPageData - 1)}
              >
                Anterior
              </Button>
              {/* <span>
                Página {currentPage} de {totalPages}
              </span> */}
              <Button
                w={"100px"}
                _hover={""}
                color={"white"}
                bg={"#0E1A40"}
                disabled={currentPageData === totalPages}
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
                  <SimpleGrid columns={5} bg={''} w={'1300px'} h={'750px'}>
                    {productsData.payload?.map((product) => {
                          return (
                            <Cards2
                              key={product.id}
                              id={product.id}
                              name={product.name}
                              price={product.price}
                              image={product.image}
                              description={product.description}
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
