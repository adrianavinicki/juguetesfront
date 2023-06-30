import Cards from "./Cards"
import { Flex, Box, Button, Image } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import FilterAndOrder from "./Filters"
import SearchBar from "./SearchBar"


const CardsContainer = () => {

    
    const products = useSelector(state=>state.filteredProducts)

    const [page, setPage] = useState(getSavedPage() || 1); //creo un estado para el paginado.

    const CARDS_PER_PAGE = 5; //le digo cuantos productos por pagina quiero

    const maxPage = Math.ceil(products.length / CARDS_PER_PAGE);//divido la cantidad de products por los que me quiero en pagina, 12

    const indexOfLastCard = page * CARDS_PER_PAGE;
    const indexOfFirstCard = indexOfLastCard - CARDS_PER_PAGE;
    const displayedProducts = products.slice( //estos son los products que se muestran.
        indexOfFirstCard,
        indexOfLastCard
    );

    const handlePrevPage = () => {//pagina actual menos 1
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {//pagina actual mas 1
        if (page < maxPage) {
            setPage(page + 1);
        }
    };

    const handleFirstPage = () => {//seteo la pagina en 1
        setPage(1);
    };

    const handleLastPage = () => {//seteo la pagina en el maximo que me de acorde a la cantidad de productos
        setPage(maxPage);
    };

    useEffect(() => {
        // Guarda la página actual en localStorage
        savePage(page);
    }, [page]);

    function savePage(page) {
        localStorage.setItem('currentPage', page.toString()); //le guardo en el local storage la current page
    }

    function getSavedPage() {
        const savedPage = localStorage.getItem('currentPage'); //le pido la current page
        return savedPage ? parseInt(savedPage, 10) : null;
    }

    const goToPage = (pageNumber) => { //voy a la pagina que le diga
        setPage(pageNumber);
    };

    return (
      <div>

        <div>
        <Box marginTop={"100px"}>
          <Flex direction={"column"}>
            
            <Box>
              <Flex direction={"row"} justify={"center"}>
                {page > 1 && ( //lt = lower than
                  <Button
                    onClick={handleFirstPage}
                    disabled={page === 1}
                    boxSize={"40px"}
                    colorScheme="facebook"
                  >
                    &lt;&lt; 1
                  </Button>
                )}
                <Button
                  onClick={handlePrevPage}
                  disabled={page === 1}
                  boxSize={"40px"}
                  colorScheme="facebook"
                >
                  Prev
                </Button>
                {Array.from({ length: maxPage }, (_, index) => (
                  <Button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    className={page === index + 1}
                    boxSize={"40px"}
                    colorScheme="facebook"
                  >
                    {index + 1}
                  </Button>
                ))}

                <Button
                  onClick={handleNextPage}
                  disabled={page === maxPage}
                  boxSize={"40px"}
                  colorScheme="facebook"
                >
                  Next
                </Button>
                {page < maxPage && ( //gt = greater than
                  <Button
                    onClick={handleLastPage}
                    disabled={page === maxPage}
                    boxSize={"40px"}
                    colorScheme="facebook"
                  >
                    {maxPage} &gt;&gt;
                  </Button>
                )}
              </Flex>
            </Box>
            <Box marginTop={"30px"}>
              <Flex>
                <Box
                  bg={"gray.400"}
                  marginLeft={"60px"}
                  rounded={"20px"}
                  w={"200px"}
                  h={"530px"}
                >
                  <Flex direction={"column"} align={"center"}>
                    <FilterAndOrder setPage={setPage} />
                  </Flex>
                </Box>
                <div>
                  <Box h={"600px"} w={"00px"} marginLeft={"60px"}>
                    <Flex>
                      {displayedProducts.map((product) => {
                        return (
                          <Cards
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            description={product.description}
                          />
                        );
                      })}
                    </Flex>
                  </Box>
                </div>
              </Flex>
            </Box>
          </Flex>
        </Box>
        </div>
      </div>
    );
}

export default CardsContainer