import React, { useState } from "react";
import {
  Flex,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = ({ ratingValue, numRatings, handleRating, productId, userId }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);

  const renderStars = (ratingValue) => {
    const roundedRating = Math.round(ratingValue * 2) / 2;
    return (
      <Flex>
        {Array(5)
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
                onClick={() => handleStarClick(i + 1)}
                style={{ cursor: "pointer" }}
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
          })}
      </Flex>
    );
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };
  console.log("desde rating " + userId)

  const handleRatingClick = () => {
    const data = {
      rate: selectedRating,
      review: reviewText,
      productId: productId,
      // id: userId, 
      id: userId// Usar el ID del usuario proporcionado
    };

    console.log(data);

    fetch("http://localhost:3010/rating/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Limpiar el formulario
        setSelectedRating(0);
        setReviewText("");
        setIsRatingSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Flex alignItems="center">
      <Popover>
        <PopoverTrigger>
          <div>{renderStars(ratingValue)}</div>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Rate this product</PopoverHeader>
          <PopoverBody>
            {!isRatingSubmitted ? (
              <>
                <Textarea
                  value={reviewText}
                  onChange={handleReviewChange}
                  placeholder="Write a review..."
                  mb={3}
                />
                <Button colorScheme="blue" onClick={handleRatingClick}>
                  Submit Rating
                </Button>
              </>
            ) : (
              <Box>Thank you for your rating!</Box>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default Rating;
