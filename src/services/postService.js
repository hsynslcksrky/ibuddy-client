import api from "./baseUrl";

const getPosts = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



const createPost = async (pNewPost) => {
  try {
    const response = await api.post("/users", pNewPost);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPostsByUserId = async (userId) => {
  try {
    const response = await api.get(`/user?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPostById = async (postId) => {
  try {
    const response = await api.get(`/user/${postId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const postService = {
  getPosts,
  createPost,
  getPostsByUserId,
  getPostById,
};

export default postService;
