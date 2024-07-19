import React from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
//jaha jaha outlet likhoke wo same rahega baaki sab change hoga for exmale agar footer and header ko outlet kikhoge to wonsae rahega baakij sab change hoga
import { Outlet } from "react-router-dom";

function Layout(){
     return(
          <>
          <Header/>//same rahega
          <Outlet/>//header and footer ke andar ki chijein same rahegi
          <Footer/>//same rahega
          </>

     )
}

export default Layout