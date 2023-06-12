import { useAuth0 } from "@auth0/auth0-react";
import { createContext } from "react";
import { initializeHttpService } from "../services/httpService";
import useCheckUser from "../hooks/useCheckUser";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    const { getAccessTokenSilently } = useAuth0();
    initializeHttpService(getAccessTokenSilently, "http://localhost:3040/api/v1/");
    let user = useCheckUser();

    return (
        <UserContext.Provider value={user}>
            {console.log("user in context",user)}
            {children}
        </UserContext.Provider>
    )
}

// import { useAuth0 } from "@auth0/auth0-react";
// import { createContext, useEffect, useState } from "react";
// import { initializeHttpService } from "../services/httpService";
// import useCheckUser from "../hooks/useCheckUser";

// export const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const { getAccessTokenSilently } = useAuth0();
//   initializeHttpService(getAccessTokenSilently, "http://localhost:3040/api/v1/");

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       // Call the API or perform any necessary logic to fetch the user data
//       // For example, you can use the `useCheckUser` hook to fetch user data
//       const userData = await useCheckUser();

//       setUser(userData);
//     };

//     fetchUserData();
//   }, []);

//   const refreshUserData = async () => {
//     const refreshedUserData = await useCheckUser();
//     setUser(refreshedUserData);
//   };

//   return (
//     <UserContext.Provider value={{ user, refreshUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
