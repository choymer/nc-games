import axios from 'axios';

const gamesApi = axios.create({
    baseURL:"https://games-choym.herokuapp.com/api/"
})

export const getReviews = async () => {
const { data } = await gamesApi.get('/reviews')
console.log(data.reviews)
return data.reviews;
}

