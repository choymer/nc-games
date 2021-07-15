import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-choym.herokuapp.com/api/",
});

export const getCategories = async () => {
  const { data } = await gamesApi.get("/categories");
  return data.categories;
};

export const getReviews = async (categories, sortBy) => {
  const { data } = await gamesApi.get("/reviews", {
    params: {
      category: categories,
      sort_by: sortBy,
    },
  });
  return data.reviews;
};

export const getReviewById = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`);
  return data.reviews[0];
};

export const getCommentsByReviewId = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}/comments`);
  return data.comments;
};

export const patchVotes = async (review_id, increment) => {
  const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: increment,
  });
  console.log(data);
};

export const getAllUsers = async () => {
  const { data } = await gamesApi.get("/users");
  return data.users;
};

export const getUserbyUsername = async (username) => {
  const { data } = await gamesApi.get(`/users/${username}`);
  return data.users[0];
};

export const postCommentByReviewId = async (review_id, comment) => {
  const { data } = await gamesApi.post(
    `/reviews/${review_id}/comments`,
    comment
  );

  return data.comment;
};
