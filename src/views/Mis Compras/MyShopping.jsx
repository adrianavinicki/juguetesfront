import  ShoppingCard  from "../../components/ShoppingCard";
import NavBar2 from '../../components/NavBar2';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

const user = {
    name: 'Juan Carlos',
    purchase_history: [
        {
			id: 1007,
			name: "Kit de experimentos científicos",
			brand: "ScienceKids",
			category: "Ciencia",
			minimun_age: 8,
			description: "Un kit de experimentos científicos para aprender y divertirse.",
			quantity: 2000,
			price: 3999,
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukLij0hFUkDdh7kL6qSbAg3LZDU6FhurZY4zMOrKtped6ngL2DP2atpgps-J5wUH14nE&usqp=CAU",
			product_status: true
		},
        {
			id: 1006,
			name: "Puzzle de animales",
			brand: "Toyland",
			category: "Puzzles",
			minimun_age: 4,
			description: "Un puzzle de 100 piezas con ilustraciones de animales.",
			quantity: 2000,
			price: 1999,
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kx8UICMPlClIVLqpbLkQ42kuzHvXX_K7lrR-FYeWnjnF8jukCJIPdHMEmREv-4_J408&usqp=CAU",
			product_status: true
		},
        {
			id: 1009,
			name: "Lego City - Estación de Policía",
			brand: "LEGO",
			category: "Bloques de construcción",
			minimun_age: 5,
			description: "Construye una estación de policía con los bloques de construcción LEGO, incluye vehículos y figuras de policías.",
			quantity: 2000,
			price: 10999,
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR966ukW5XMpLHIumMLi4nm7EY4hDBGsUoyweB7nrm-Ekdt-Yu4qd24RRGjcayOoWI9t8M&usqp=CAU",
			product_status: true
		},
		{
			id: 1025,
			name: "Hot Wheels Pista de Choques Criss Cross",
			brand: "Hot Wheels",
			category: "Pista de carreras",
			minimun_age: 5,
			description: "La Pista de Choques Criss Cross de Hot Wheels es una pista de carreras de alta velocidad con múltiples zonas de choque y cuatro lanzadores para que hasta cuatro jugadores compitan al mismo tiempo.",
			quantity: 2000,
			price: 21999,
			image: "https://m.media-amazon.com/images/I/71291zjlclL.jpg",
			product_status: true
		},
		{
			"id": 1024,
			"name": "Nerf N-Strike Elite Disruptor Blaster",
			"brand": "Nerf",
			"category": "Pistola",
			"minimun_age": 8,
			"description": "La pistola Nerf N-Strike Elite Disruptor puede disparar seis dardos seguidos a una distancia de hasta 27 metros. Tiene un tambor giratorio que permite recargar rápidamente durante las batallas intensas.",
			"quantity": 2000,
			"price": 39999,
			"image": "https://i.ytimg.com/vi/oPGv5t_FbWA/maxresdefault.jpg",
			"product_status": true
		}
    ]
};



const MyShopping = () => {
  return (
	<Flex direction={"column"} paddingTop={""} align={"center"}>
		<Box
		backgroundImage="url('/BG3.jpg')"
		backgroundPosition="center"
		backgroundRepeat="no-repeat"
		backgroundSize="cover"
		width="100vw"
		height="100vh"
		>
		<NavBar2></NavBar2>
		<Heading ml={'10px'}>Mis Compras</Heading>
		<SimpleGrid columns={5} bg={""} w={"100%"} h={"100%"}>
			{user.purchase_history.map((product) => {
			return (
				// <p>{product.name}</p>
				<ShoppingCard
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
		</Box>
	</Flex>
  );
};

export default MyShopping;
