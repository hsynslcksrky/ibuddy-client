import api from "./baseUrl"



const getCommentsByPostId = async () => {
    try {
      const response = await api.get("/comments");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  



const commentService = {
    getCommentsByPostId
}
export default commentService;