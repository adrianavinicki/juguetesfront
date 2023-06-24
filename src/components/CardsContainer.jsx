import Cards from "./Cards"
import { Flex, Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"


const CardsContainer = () => {

    const products = useSelector(state=>state.products)

    return(
        <div>
          <Flex>
          {products.map(product=>{
                return <Cards 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                />
            })}
          </Flex>
            
        </div>
    )
}

export default CardsContainer