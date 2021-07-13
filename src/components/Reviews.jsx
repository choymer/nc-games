import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getReviews } from '../utils/api';
import AddVotes from './AddVotes';


const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {categories} = useParams();
    // console.log(categories)

    useEffect(()=>{
        getReviews(categories).then(reviewsFromApi => {
            setReviews(reviewsFromApi)
            setIsLoading(false)
        })
    },[categories])

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
                  <AddVotes votes = {review.votes} reviewId = {review.review_id}/>
                  <p>Date: {review.created_at}</p>
                  <Link to={`../../reviews/${review.review_id}`}>
                  See review
                  </Link>    
              </li>)
             })} 
            </ul>
        </div>
    );
};

export default Reviews;