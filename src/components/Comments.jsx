import React, { useEffect, useState } from 'react';
import { getCommentsByReviewId } from '../utils/api';

const Comments = ({review_id}) => {
    console.log(review_id, 'commentes')

    const [comments, setComments] = useState([]);

    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        getCommentsByReviewId(review_id).then(getCommentsFromApi => {
            setComments(getCommentsFromApi)
            setIsLoading(false)
        })

    }, [review_id])
    if (isLoading) return <p>Loading ...</p>
    return (
        <div>
            <h1>Comments:</h1>
            <ul>
                {comments.map(comment=> {
                    return(
                        <li key={comment.comment_id}>
                            <h2>Author: {comment.author}</h2>
                            <p>Comment: {comment.body}</p>
                        </li>
                    )
                })}

            </ul>
            
        </div>
    );
};

export default Comments;