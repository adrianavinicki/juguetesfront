// import React, { useState, useEffect } from "react";
// import { Flex, Box, Alert, AlertIcon, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, Button, Textarea } from "@chakra-ui/react";
// import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
// import { useAuth0 } from "@auth0/auth0-react";

// const Rating = ({ ratingValue, numRatings, handleRating }) => {
//   const { isAuthenticated, loginWithRedirect, user } = useAuth0();
//   const [hoverRating, setHoverRating] = useState(0);
//   const [showAlert, setShowAlert] = useState(false);
//   const [userData, setUserData] = useState({});
//   const [reviewText, setReviewText] = useState("");
//   const [selectedRating, setSelectedRating] = useState(0);

//   useEffect(() => {
//     if (isAuthenticated) {
//       setUserData(user);
//     }
//   }, [isAuthenticated, user]);

//   const renderStars = (ratingValue) => {
//     const roundedRating = Math.round(ratingValue * 2) / 2;
//     return (
//       <Flex>
//         {Array(5)
//           .fill("")
//           .map((_, i) => {
//             let starColor = "gray.300";
//             if (hoverRating >= i + 1) {
//               starColor = "yellow";
//             } else if (roundedRating >= i + 1) {
//               starColor = "yellow";
//             }
//             return (
//               <Box
//                 key={i}
//                 ml={1}
//                 onMouseEnter={() => setHoverRating(i + 1)}
//                 onMouseLeave={() => setHoverRating(0)}
//                 onClick={isAuthenticated ? () => handleStarClick(i + 1) : handleNotAuthenticated}
//                 style={{ cursor: isAuthenticated ? "pointer" : "not-allowed" }}
//               >
//                 {roundedRating - i >= 1 ? (
//                   <BsStarFill style={{ marginLeft: "1" }} color={starColor} />
//                 ) : roundedRating - i === 0.5 ? (
//                   <BsStarHalf style={{ marginLeft: "1" }} color={starColor} />
//                 ) : (
//                   <BsStar style={{ marginLeft: "1" }} color={starColor} />
//                 )}
//               </Box>
//             );
//           })}
//       </Flex>
//     );
//   };

//   const handleNotAuthenticated = () => {
//     setShowAlert(true);
//   };

//   const handleStarClick = (rating) => {
//     setSelectedRating(rating);
//   };

//   const handleReviewChange = (e) => {
//     setReviewText(e.target.value);
//   };

//   const handleRatingClick = () => {
//     const data = {
//       rate: selectedRating,
//       review: reviewText,
//       productId: "1008",
//       id: 3,
//     };

//     console.log(data);

//     fetch("http://localhost:3010/rating/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userData.token}`,
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <Flex alignItems="center">
//       <Popover>
//         <PopoverTrigger>
//           <div>{renderStars(ratingValue)}</div>
//         </PopoverTrigger>
//         <PopoverContent>
//           <PopoverHeader>Rate this product</PopoverHeader>
//           <PopoverBody>
//             <Textarea
//               value={reviewText}
//               onChange={handleReviewChange}
//               placeholder="Write a review..."
//               mb={3}
//             />
//             <Button colorScheme="blue" onClick={handleRatingClick}>
//               Submit Rating
//             </Button>
//           </PopoverBody>
//         </PopoverContent>
//       </Popover>
//       {showAlert && (
//         <Alert status="warning" ml={2}>
//           <AlertIcon />
//           Please log in to rate this product.
//         </Alert>
//       )}
//     </Flex>
//   );
// };

// export default Rating;


import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Alert,
  AlertIcon,
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
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const [hoverRating, setHoverRating] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [userData, setUserData] = useState({});
  const [reviewText, setReviewText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

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
                onClick={isAuthenticated ? () => handleStarClick(i + 1) : handleNotAuthenticated}
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

  const handleNotAuthenticated = () => {
    setShowAlert(true);
  };

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
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
      <Popover>
        <PopoverTrigger>
          <div>{renderStars(ratingValue)}</div>
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
      {showAlert && (
        <Alert status="warning" ml={2}>
          <AlertIcon />
          Please log in to rate this product.
        </Alert>
      )}
    </Flex>
  );
};

export default Rating;
