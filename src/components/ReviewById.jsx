import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getReviewById } from '../utils/api';

const ReviewById = () => {

const [reviewById, setReviewById] = useState([]);
const {review_id} = useParams();
const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
    getReviewById(review_id).then(getReviewIdFromApi => {
        setReviewById(getReviewIdFromApi)
        setIsLoading(false)
    })
},[review_id])

if (isLoading) return <p>Loading ...</p>
    return (
        <div>
           <h2>{reviewById.title}</h2>
           <p>{reviewById.review_body}</p>
        </div>
    );
};

export default ReviewById;