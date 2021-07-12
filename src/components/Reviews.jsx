import React, { useState, useEffect } from 'react';
import { getReviews } from '../utils/api';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        getReviews().then(reviewsFromApi => {
            setReviews(reviewsFromApi)
            setIsLoading(false)
        })
    },[])

    if (isLoading) return <p>Loading ...</p>
    return (
        <div className="content">
            <ul>
            {reviews.map(review => { return(
              <li key={ review.review_id }>
                  <p>Title:{ review.title }</p>
                  <img src={ review.review_img_url} alt={ review.title } />
                  <p>Category: {review.category}</p>
                  <p>Owner: {review.owner}</p>
                  <p>Votes: {review.votes}</p>
                  <p>Date: {review.created_at}</p>
              </li>)
             })} 
            </ul>
        </div>
    );
};

export default Reviews;