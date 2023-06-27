import Cards from "./Cards"
import { Flex, Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import FilterAndOrder from "./Filters"
import SearchBar from "./SearchBar"


const CardsContainer = () => {

    
    const products = useSelector(state=>state.filteredProducts)

    const [page, setPage] = useState(getSavedPage() || 1); //creo un estado para el paginado.

    const CARDS_PER_PAGE = 6; //le digo cuantos productos por pagina quiero

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

    return(
        <div>
            <Box marginTop={'100px'}>
                <Flex>
                    <Box bg={'gray.400'} marginLeft={'30px'} rounded={'20px'} w={'200px'} h={'600px'}
                    marginTop={'100px'}>
                        <Flex direction={'column'} align={'center'} >
                        <div>
                            {page > 1 && ( //lt = lower than
                                    <button  onClick={handleFirstPage} disabled={page === 1}>
                                        &lt;&lt; 1 
                                    </button>
                                )}
                            <button onClick={handlePrevPage} disabled={page === 1}>
                                Prev
                            </button>

                            {Array.from({ length: maxPage }, (_, index) => ( 
                                <button key={index} onClick={() => goToPage(index + 1)} 
                                className={page === index + 1 }>
                                    {index + 1}
                                </button>
                            ))}

                            <button onClick={handleNextPage} disabled={page === maxPage}>
                                Next
                            </button>
                            {page < maxPage && ( //gt = greater than
                                <button onClick={handleLastPage} disabled={page === maxPage}>
                                    {maxPage} &gt;&gt;
                                </button>
                            )}
                        </div>
                        <FilterAndOrder setPage={setPage}/>
                        <SearchBar />

                        </Flex>
                    </Box>
            <div>
                <Box bg={'red'} h={'600px'} w={'00px'} marginTop={'100px'}>
                    <Flex>
                        {displayedProducts.map(product=>{
                            return <Cards
                            key={product.id} 
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            description={product.description}
                    />
                    })}
                    </Flex>
                </Box>
            </div>
                </Flex>
            </Box>
           
            
        </div>
    )
}

export default CardsContainer