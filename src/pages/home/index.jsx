import React, { useContext, useEffect } from "react";
import "./index.css";
import Intro from "../../components/home/intro";
import HomeContent from "../../components/home/content";
import { UserDataContext } from "../../context/UserContext";

const Home = () => {
    return (
        <div className="home-container">
            <Intro />
            <HomeContent />
        </div>
    );
}

export default Home;