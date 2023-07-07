import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { createReview } from '../redux/actions';

function Review({ rating, numReviews }) {
  const [hoverRating, setHoverRating] = useState(0);
  const dispatch = useDispatch();

  const handleRatingChange = (value) => {
    dispatch(createReview({ rating: value }));
  };

  return (
    <Box>
      <Flex align={'center'}>
        {[1, 2, 3, 4, 5].map((i) => {
          const filledStars = Math.floor(rating);
          const hasHalfStar = rating - filledStars >= 0.5;
          const isFilled = i <= filledStars;
          const isHalfFilled = i === filledStars + 1 && hasHalfStar;

          let starColor = 'gray.300';
          if (isFilled || isHalfFilled) {
            starColor = 'yellow.400';
          }

          return (
            <Box
              key={i}
              as="button"
              onClick={() => handleRatingChange(i)}
              onMouseEnter={() => setHoverRating(i)}
              onMouseLeave={() => setHoverRating(0)}
            >
              {isFilled ? (
                <BsStarFill style={{ marginLeft: '1' }} color={starColor} />
              ) : isHalfFilled ? (
                <BsStarHalf style={{ marginLeft: '1' }} color={starColor} />
              ) : (
                <BsStar style={{ marginLeft: '1' }} color={starColor} />
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Review;
