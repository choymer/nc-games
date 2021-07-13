import React, { useState } from 'react';
import { patchVotes } from '../utils/api';

const AddVotes = ({votes,reviewId}) => {

    // console.log(votes, '<<<votes')
    // console.log(votes, '<<<reviewid')
  const [incVotes, setIncVotes] = useState(0);

  const incrementVotes= () => {
      patchVotes(reviewId, 1).then(()=>{
      setIncVotes((currentVotes) => {
        return currentVotes + 1;
      })
      })
  }

  
 
    return (
        <div>
        <p>Votes: {votes + incVotes}</p>
        <button onClick={incrementVotes}>Add votes</button>
        </div>
    );
};

export default AddVotes;