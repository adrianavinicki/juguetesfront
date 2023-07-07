import React, { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const Review = ({ productId, userId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleRatingSubmit = () => {
    onRatingSubmit(productId, userId, rating);
  };

  return (
    <Box mt={4} p={4} borderWidth="1px" borderRadius="md">
      <Text fontSize="lg" fontWeight="bold">Calificar producto</Text>
      <Box>
        <Button size="sm" onClick={() => handleRatingChange(1)}>1</Button>
        <Button size="sm" onClick={() => handleRatingChange(2)}>2</Button>
        <Button size="sm" onClick={() => handleRatingChange(3)}>3</Button>
        <Button size="sm" onClick={() => handleRatingChange(4)}>4</Button>
        <Button size="sm" onClick={() => handleRatingChange(5)}>5</Button>
      </Box>
      <Button mt={2} onClick={handleRatingSubmit}>Enviar calificación</Button>
    </Box>
  );
};

export default Review;
