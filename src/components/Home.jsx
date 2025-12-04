import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    /* Student's Name: CYRILLE YANNIS SONFACK
  Student ID: 301514181
  Date: September 24, 2025 */
    <div className="home">
      <h1>Welcome to My Personal Portfolio</h1>
      <p>
        I am a passionate developer dedicated to creating impactful solutions through technology.
      </p>
      <p>
        My mission is to leverage my skills in programming and design to build applications that enhance user experiences and solve real-world problems.
      </p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
};

export default Home;