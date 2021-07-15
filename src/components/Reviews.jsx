import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews } from "../utils/api";
import AddVotes from "./AddVotes";
import SortBy from "./SortBy";

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

  if (isLoading) return <p>Loading ...</p>;
  return (
    <div className="content">
      {categories !== undefined ? null : <SortBy setSortBy={setSortBy} />}
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <p>Title:{review.title}</p>
              <img src={review.review_img_url} alt={review.title} />
              <p>Category: {review.category}</p>
              <p>Owner: {review.owner}</p>
              <AddVotes votes={review.votes} reviewId={review.review_id} />
              <p>Date: {review.created_at}</p>
              <p>Number of comments: {review.comment_count}</p>
              <Link to={`../../reviews/${review.review_id}`}>See review</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
