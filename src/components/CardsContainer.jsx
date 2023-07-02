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

const CardsContainer = (props) => {
  const [data, setData] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const productsData = useSelector(state=>state.filteredProducts)

  useEffect(() => {
    // Función para obtener los datos paginados desde el backend
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3010/products?pageNumber=${currentPage}&pageSize=${pageSize}`
        );
        console.log(response);
        const { data, totalElements, totalPages } = response.data;
        setData(data);
        setTotalElements(totalElements);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error al obtener los datos paginados:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(data);
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
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Anterior
              </Button>
              <span>
                Página {currentPage} de {totalPages}
              </span>
              <Button
                w={"100px"}
                _hover={""}
                color={"white"}
                bg={"#0E1A40"}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
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
                  {data.map((product) => {
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
                    {/* <Box h={"750px"} w={"1440px"} bg={"green"}>
                      <Flex direction={"row"}> */}
                        
                        {/* {data.map((product) => {
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
                        })} */}
                      {/* </Flex> */}
                    {/* </Box> */}
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
