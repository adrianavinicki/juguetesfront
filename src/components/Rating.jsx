import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ ratingValue, handleRatingClick }) => {
  const renderStars = (ratingValue) => {
    const roundedRating = Math.round(ratingValue * 2) / 2;
    return Array(5)
      .fill("")
      .map((_, i) => {
        if (roundedRating - i >= 1) {
          return (
            <Box key={i} ml={1}>
              <BsStarFill
                style={{ marginLeft: "1" }}
                color={i < ratingValue ? "black" : "gray.300"}
                onClick={() => handleRatingClick(i + 1)}
              />
            </Box>
          );
        }
        if (roundedRating - i === 0.5) {
          return (
            <Box key={i} ml={1}>
              <BsStarHalf style={{ marginLeft: "1" }} />
            </Box>
          );
        }
        return (
          <Box key={i} ml={1}>
            <BsStar style={{ marginLeft: "1" }} />
          </Box>
        );
      });
  };

  return (
    <Flex alignItems="center">
      {renderStars(ratingValue)}
    </Flex>
  );
};

export default Rating;
