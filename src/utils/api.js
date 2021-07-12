import axios from 'axios';

const gamesApi = axios.create({
    baseURL:"https://games-choym.herokuapp.com/api/"
})

export const getCategories = async () => {
const { data } = await gamesApi.get('/categories')
return data.categories;
}


export const getReviews = async (categories) => {
    const { data } = await gamesApi.get('/reviews', {
        params: {
            category: categories,

        }
    })
    return data.reviews;
}



