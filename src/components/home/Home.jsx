import React from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from "./ScrollDown"

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="container grid home_container">
                <div className="grid home_content">
                    <Social/>
                    <div className="home_img"></div>
                    <Data/>
                </div>

                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home;
