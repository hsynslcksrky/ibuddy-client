// import axios from "axios";
// let axiosInstance = null;

// function initializeHttpService(tokenFactory, baseUrl) {
//     axiosInstance = axios.create({
//         baseURL: baseUrl
//     })

//     axiosInstance.interceptors.request.use(async (config) => {
//         const accessToken = await tokenFactory();
//         config.headers.Authorization = `Bearer ${accessToken}`;
//         return config;
//     });

// }

// export { axiosInstance as api, initializeHttpService };

import axios from "axios";

let axiosInstance = null;

function initializeHttpService(tokenFactory, baseUrl) {
  axiosInstance = axios.create({
    baseURL: baseUrl
  });

  axiosInstance.interceptors.request.use(async (config) => {
    const accessToken = await tokenFactory();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });
}

// Define tokenFactory and baseUrl
const tokenFactory = async () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
};

const baseUrl = "http://localhost:3040/api/v1/"; // Set your desired base URL

// Call initializeHttpService with the defined arguments
initializeHttpService(tokenFactory, baseUrl);

export {axiosInstance as api,initializeHttpService } ;
