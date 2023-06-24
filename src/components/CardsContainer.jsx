import Cards from "./Cards"
import { Flex, Box } from "@chakra-ui/react"


const CardsContainer = () => {
    const toys = [
        {
            id: 1001,
            name: "Peluche de osito",
            brand: "Juguetelandia",
            category: "Peluches",
            minimun_age: 3,
            description: "Un adorable peluche de osito marrón con una bufanda roja.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxjgX_Wu5dfBDX5m9YGH12YZ4LisG8q3pEg&usqp=CAU",
            product_status: true,
            quantity: 2000,
            price: 1999,
          },
          {
            id: 1002,
            name: "Set de lego clásico",
            brand: "LEGO",
            category: "Bloques de construcción",
            minimun_age: 5,
            description:
              "Un set de bloques de construcción LEGO clásicos para construir diferentes estructuras.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbp4765aENZ5WnZRjDlSgigsy3_8_Q8QcCVr-omKgWSMtsnZlEps8cetju0tiXN9ysNk&usqp=CAU",
            product_status: true,
            quantity: 2000,
            price: 1999,
          },
          {
            id: 1003,
            name: "Muñeca Barbie",
            brand: "Mattel",
            category: "Muñecas",
            minimun_age: 4,
            description: "Una muñeca Barbie con ropa elegante y accesorios.",
            image:
              "https://m.media-amazon.com/images/I/61ZvnbbbfdL._AC_UF894,1000_QL80_.jpg",
            product_status: true,
            quantity: 2000,
            price: 1999,
          },
          {
            id: 1004,
            name: "Camión de bomberos de juguete",
            brand: "ToysRUs",
            category: "Vehículos",
            minimun_age: 3,
            description:
              "Un camión de bomberos de juguete con luces y sonidos realistas.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdTKo6TOfY51by5TGHCj7pQhlq7kpguoPHQ&usqp=CAU",
            product_status: true,
            quantity: 2000,
            price: 1999,
          },
          {
            id: 1005,
            name: "Pelota de fútbol",
            brand: "SportsWorld",
            category: "Deportes",
            minimun_age: 6,
            description: "Una pelota de fútbol de tamaño estándar con diseño colorido.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLtZNuCiWSCZQKw3JwAHP1gJJYRnvkZZbwwt5k2Xx5H-uAxsTjsY-EG-i7-AMaQXQZ9c&usqp=CAU",
            product_status: true,
            quantity: 2000,
            price: 1999,
          },
          {
            id: 1006,
            name: "Puzzle de animales",
            brand: "Toyland",
            category: "Puzzles",
            minimun_age: 4,
            description: "Un puzzle de 100 piezas con ilustraciones de animales.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kx8UICMPlClIVLqpbLkQ42kuzHvXX_K7lrR-FYeWnjnF8jukCJIPdHMEmREv-4_J408&usqp=CAU",
            product_status: true,
            quantity: 2000,
            price: 1999,
          },
    ]

    return(
        <div>
          <Flex>
          {toys.map(toy=>{
                return <Cards 
                    id={toy.id}
                    name={toy.name}
                    price={toy.price}
                    image={toy.image}
                    description={toy.description}
                />
            })}
          </Flex>
            
        </div>
    )
}

export default CardsContainer