import React from 'react';
import './About.css'; // You can create a separate CSS file for styling
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-container">
        <h1 className="about-title">Hi, We're QueryNest Family.</h1>
        <p className="about-description">
        Welcome to QueryNest, the ultimate hub for coders to connect, collaborate, and create! <br /> Whether you're a seasoned developer or just starting your coding journey,<br /> QueryNest offers a vibrant community where ideas come to life.
        </p>
    </div>
    </>
  );
};

export default About;
