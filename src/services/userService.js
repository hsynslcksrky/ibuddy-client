// import { api } from "./httpService";

// const getUser = async (email) => {
//   try {
//     //TODO 
//     const response = await api.get(`/users/profile/${email}`);
//     return response.data  //user object
//   } catch (error) {
//     console.error(error.message);
//     throw error;
//   }
// };

// const saveUser = async (user) => {
//   try {
//     //TODO 
//     const response = await api.post(`/users`, user);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// const getUsers = async () => {
//   try {
//     const response = await api.get(`/users`);
    
//     return response.data
//   } catch (error) {
//     console.log("api:")
//     console.log(api)
//     console.error(error.message);
//     throw error;
//   }
// };
// const getUserById = async (userId) => {
//   try {
//     const response = await api.get(`/user/${userId}`);
//     if (response.status === 200) {
//       return response.data;
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
// const updateUserRoles = async (users) => {
//   try {
//     const response = await api.put(`/users`, users);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// const userService = {
//   getUser,
//   saveUser,
//   getUsers,
//   updateUserRoles,
//   getUserById
// };

// export default userService;

import { api } from "./httpService";

const getUser = async (email) => {
  try {
    const response = await api.get(`/users/profile/${email}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const saveUser = async (user) => {
  try {
    const response = await api.post(`/users`, user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUsers = async () => {
  try {
    const response = await api.get(`/users`);
    return response.data;
  } catch (error) {
    console.log("api:");
    console.log(api);
    console.error(error.message);
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const response = await api.get(`/user/${userId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateUserRoles = async (users) => {
  try {
    const response = await api.put(`/users`, users);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const uploadProfilePicture = async (formData) => {
  try {
    const response = await api.post(`/uploads/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const userService = {
  getUser,
  saveUser,
  getUsers,
  updateUserRoles,
  getUserById,
  uploadProfilePicture,
};

export default userService;
