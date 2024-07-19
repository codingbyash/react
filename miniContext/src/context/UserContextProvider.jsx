import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) =>{
     const [user, setUser] = React.useState(null);
     return(
          <UserContext.Provider value={{user, setUser}}>
          {children}
          </UserContext.Provider>
     )
}

export default UserContextProvider



//iska access app.jsx mei diya hua hai(you can also give in main.jsx)