// import React from "react";
// import { Box, Flex } from "@chakra-ui/react";
// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

// const Rating = ({ ratingValue, handleRatingClick }) => {
//   const renderStars = (ratingValue) => {
//     const roundedRating = Math.round(ratingValue * 2) / 2;
//     return Array(5)
//       .fill("")
//       .map((_, i) => {
//         if (roundedRating - i >= 1) {
//           return (
//             <Box key={i} ml={1}>
//               <BsStarFill
//                 style={{ marginLeft: "1" }}
//                 color={i < ratingValue ? "black" : "gray.300"}
//                 onClick={() => handleRatingClick(i + 1)}
//               />
//             </Box>
//           );
//         }
//         if (roundedRating - i === 0.5) {
//           return (
//             <Box key={i} ml={1}>
//               <BsStarHalf style={{ marginLeft: "1" }} />
//             </Box>
//           );
//         }
//         return (
//           <Box key={i} ml={1}>
//             <BsStar style={{ marginLeft: "1" }} />
//           </Box>
//         );
//       });
//   };

//   return (
//     <Flex alignItems="center">
//       {renderStars(ratingValue)}
//     </Flex>
//   );
// };

// export default Rating;



import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ ratingValue, numRatings, handleRatingClick }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const renderStars = (ratingValue) => {
    const roundedRating = Math.round(ratingValue * 2) / 2;
    return Array(5)
      .fill("")
      .map((_, i) => {
        let starColor = "gray.300";
        if (hoverRating >= i + 1) {
          starColor = "yellow";
        } else if (roundedRating >= i + 1) {
          starColor = "yellow";
        }
        return (
          <Box
            key={i}
            ml={1}
            onMouseEnter={() => setHoverRating(i + 1)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRatingClick(i + 1)}
          >
            {roundedRating - i >= 1 ? (
              <BsStarFill style={{ marginLeft: "1" }} color={starColor} />
            ) : roundedRating - i === 0.5 ? (
              <BsStarHalf style={{ marginLeft: "1" }} color={starColor} />
            ) : (
              <BsStar style={{ marginLeft: "1" }} color={starColor} />
            )}
          </Box>
        );
      });
  };

  return (
    <Flex alignItems="center">
      {renderStars(ratingValue)}
      <Text ml={2} fontSize="sm" color="gray.500">
        ({numRatings} Ratings)
      </Text>
    </Flex>
  );
};

export default Rating;
