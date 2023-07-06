// // import React from "react";
// // import { useAuth0 } from "@auth0/auth0-react";

// // import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

// // export const Profile = () => {
// //   const { user, isAuthenticated, isLoading } = useAuth0();

// //   if (isLoading) {
// //     // return <div>Loading...</div>;
// //   }

// //   return (
// //     isAuthenticated && ( 
// //   <Flex>
// //   <Avatar src={user.picture} alt={user.name} />
// //   <Box ml='3'>
// //     <h2>{user.name}</h2>
// //     {/* <p>Email: {user.email}</p> */}
// //   </Box>
// // </Flex>
// //     )
// //   );
// // };

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Flex, Box, Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

// export const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     // return <div>Loading...</div>;
//   }

//   return (
//     isAuthenticated && (
//       // <Menu>
//       //   <MenuButton as={Flex} alignItems="center">
//       //     <Avatar src={user.picture} alt={user.name} />
//       //     <Box ml="3">
//       //       <h2>{user.name}</h2>
//       //     </Box>
//       //   </MenuButton>
//       //   <MenuList>
//       //     <MenuItem>Mi Perfil</MenuItem>
//       //     <MenuItem>Mis Órdenes</MenuItem>
//       //     <MenuItem>Cerrar Sesión</MenuItem>
//       //   </MenuList>
//       // </Menu>
//       <Menu>
//       <MenuButton
//         py={2}
//         transition="all 0.3s"
//         _focus={{ boxShadow: 'none' }}>
//         <HStack>
//         <Avatar src={user.picture} alt={user.name} />
//           <VStack
//             display={{ base: 'none', md: 'flex' }}
//             alignItems="flex-start"
//             spacing="1px"
//             ml="2">
//             <Text fontSize="sm">Justina Clark</Text>
//             <Text fontSize="xs" color="gray.600">
//               Admin
//             </Text>
//           </VStack>
//           <Box display={{ base: 'none', md: 'flex' }}>
//             <FiChevronDown />
//           </Box>
//         </HStack>
//       </MenuButton>
//       <MenuList
//         bg={useColorModeValue('white', 'gray.900')}
//         borderColor={useColorModeValue('gray.200', 'gray.700')}>
//         <MenuItem>Profile</MenuItem>
//         <MenuItem>Settings</MenuItem>
//         <MenuItem>Billing</MenuItem>
//         <MenuDivider />
//         <MenuItem>Sign out</MenuItem>
//       </MenuList>
//     </Menu>
//     )
//   );
// };
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Box, Text, Avatar, Menu, MenuButton, MenuList, MenuItem, HStack } from '@chakra-ui/react';

export const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    // return <div>Loading...</div>;
  }
  // const handleLogout = () => {
  //   logout({ returnTo: window.location.origin });
  // };


  return (
    isAuthenticated && (
      <Menu>
      <MenuButton as={Flex} alignItems="center">
        <HStack spacing={2}>
          <Text>{user.name}</Text>
          <Avatar src={user.picture} alt={user.name} />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>Mi Perfil</MenuItem>
        <MenuItem>Mis Órdenes</MenuItem>
        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</MenuItem>
      </MenuList>
    </Menu>
    )
  );
};
