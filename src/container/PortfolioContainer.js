import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";




const PortfolioContainer = () => {



return (
    <Router>
        <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about-me' element= {<AboutMe />} />
                <Route path='projects' element= {<Projects />} />

            </Routes>
    </Router>

)}

export default PortfolioContainer;