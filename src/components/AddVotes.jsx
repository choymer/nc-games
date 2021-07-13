import React, { useState } from 'react';
import { patchVotes } from '../utils/api';

const AddVotes = ({votes,reviewId}) => {

  const [incVotes, setIncVotes] = useState(0);
  const [hasError, setHasError] = useState(false);

  const incrementVotes= () => {
    setHasError(false);  
    setIncVotes((currentVotes) => {
        return currentVotes + 1;
      })
      patchVotes(reviewId, 1).catch((err)=>{
        setHasError(true);
        setIncVotes(0);
      })
  }
    return (
        <div>
        <p>Votes: {votes + incVotes}</p>
        {hasError && <p>Oops! Something wrong happened, check your connection and try again!</p>}
        <button onClick={incrementVotes}>Add votes</button>
        </div>
    );
};

export default AddVotes;