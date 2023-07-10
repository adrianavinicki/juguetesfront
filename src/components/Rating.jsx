import React, { useState, useEffect } from "react";
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
import { useAuth0 } from "@auth0/auth0-react";

const Rating = ({ ratingValue, numRatings, handleRating, productId }) => {
  const { isAuthenticated, user } = useAuth0();
  const [hoverRating, setHoverRating] = useState(0);
  const [userData, setUserData] = useState({});
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      setUserData(user);
    }
  }, [isAuthenticated, user]);

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
                onClick={isAuthenticated ? () => handleStarClick(i + 1) : undefined}
                style={{ cursor: isAuthenticated ? "pointer" : "not-allowed" }}
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
    setIsOpen(false);
  };

  const handleReviewChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleRatingClick = () => {
    const data = {
      rate: selectedRating,
      review: reviewText,
      productId: productId,
      id: 5,
    };

    console.log(data);

    fetch("http://localhost:3010/rating/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Flex alignItems="center">
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PopoverTrigger>
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={{ cursor: "pointer" }}
          >
            {renderStars(selectedRating || ratingValue)}
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Rate this product</PopoverHeader>
          <PopoverBody>
            <Textarea
              value={reviewText}
              onChange={handleReviewChange}
              placeholder="Write a review..."
              mb={3}
            />
            <Button colorScheme="blue" onClick={handleRatingClick}>
              Submit Rating
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default Rating;


// import React, { useState } from "react";
// import { Flex, Box, Button, Textarea } from "@chakra-ui/react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Rating = ({ ratingValue, numRatings, handleRating, productId }) => {
//   const { isAuthenticated, user } = useAuth0();
//   const [hoverRating, setHoverRating] = useState(0);
//   const [userData, setUserData] = useState({});
//   const [selectedRating, setSelectedRating] = useState(ratingValue);
//   const [reviewText, setReviewText] = useState("");
//   const [showRatingForm, setShowRatingForm] = useState(false);

//   const handleStarClick = (rating) => {
//     if (isAuthenticated) {
//       setSelectedRating(rating);
//       setShowRatingForm(true);
//     }
//   };

//   const handleReviewChange = (e) => {
//     setReviewText(e.target.value);
//   };

//   const handleRatingClick = () => {
//     const data = {
//       rate: selectedRating,
//       review: reviewText,
//       productId: productId,
//       id: 5,
//     };

//     console.log(data);

//     // Aquí puedes realizar la llamada al backend para enviar la calificación

//     setShowRatingForm(false);
//   };

//   return (
//     <Flex alignItems="center">
//       <Flex>
//         {Array(5)
//           .fill("")
//           .map((_, i) => {
//             let starColor = "gray.300";
//             if (hoverRating >= i + 1) {
//               starColor = "yellow";
//             } else if (selectedRating >= i + 1) {
//               starColor = "yellow";
//             }
//             return (
//               <Box
//                 key={i}
//                 ml={1}
//                 onMouseEnter={() => setHoverRating(i + 1)}
//                 onMouseLeave={() => setHoverRating(0)}
//                 onClick={() => handleStarClick(i + 1)}
//                 style={{ cursor: isAuthenticated ? "pointer" : "not-allowed" }}
//               >
//                 <span role="img" aria-label="star" style={{ marginRight: "0.2em" }}>
//                   {selectedRating >= i + 1 ? "⭐️" : "☆"}
//                 </span>
//               </Box>
//             );
//           })}
//       </Flex>

//       {showRatingForm && (
//         <div>
//           <p>Rating: {selectedRating}</p>
//           <Textarea
//             value={reviewText}
//             onChange={handleReviewChange}
//             placeholder="Write a review..."
//             mb={3}
//           />
//           <Button colorScheme="blue" onClick={handleRatingClick}>
//             Submit Rating
//           </Button>
//           <Button variant="ghost" onClick={() => setShowRatingForm(false)}>
//             Cancel
//           </Button>
//         </div>
//       )}
//     </Flex>
//   );
// };

// export default Rating;
