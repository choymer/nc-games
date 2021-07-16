import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews } from "../utils/api";
import AddVotes from "./AddVotes";
import SortBy from "./SortBy";
import SpinnerLoad from "./SpinnerLoad";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(undefined);
  const { categories } = useParams();

  useEffect(() => {
    getReviews(categories, sortBy).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [categories, sortBy]);

  if (isLoading) return <SpinnerLoad />;
  return (
    <div className="content review-content">
      <h1>REVIEWS</h1>
      {categories !== undefined ? null : <SortBy setSortBy={setSortBy} />}
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <p className="date">Date: {review.created_at}</p>
              <img
                className="review-img"
                src={review.review_img_url}
                alt={review.title}
              />
              <h2>{review.title}</h2>
              <p>Category: {review.category}</p>
              <p>Owner: {review.owner}</p>
              <AddVotes votes={review.votes} reviewId={review.review_id} />

              {/* <p>Number of comments: {review.comment_count}</p> */}
              <Link to={`../../reviews/${review.review_id}`}>
                See full review...
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
