import React from "react";
import Navbar from "./Navbar";
import MainContent from "./mainContent"

const Page = ()=>{
    return(
        <div className="container-fluid">
            <div className="background"></div>
            <Navbar/>
            <MainContent/>
        </div>
    )
};

export default Page;