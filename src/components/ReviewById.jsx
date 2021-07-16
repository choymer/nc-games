import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getReviewById } from "../utils/api";
import Comments from "./Comments";
import SpinnerLoad from "./SpinnerLoad";

const ReviewById = () => {
  const [reviewById, setReviewById] = useState([]);
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    getReviewById(review_id)
      .then((getReviewIdFromApi) => {
        setReviewById(getReviewIdFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrMessage(err.response.data.msg);
        setIsLoading(false);
      });
  }, [review_id]);

  if (isLoading) return <SpinnerLoad />;
  return (
    <div className="content">
      {errMessage ? (
        <p className="errMsg">{errMessage}😥</p>
      ) : (
        <>
          <h1>REVIEW</h1>
          <h2>{reviewById.title}</h2>
          <p className="review-body">{reviewById.review_body}</p>
          <Comments review_id={review_id} />
        </>
      )}
    </div>
  );
};

export default ReviewById;
