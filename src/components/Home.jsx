import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Personal Portfolio</h1>
      <p>
        I am a passionate developer dedicated to creating impactful solutions through technology.
      </p>
      <p>
        My mission is to leverage my skills in programming and design to build applications that enhance user experiences and solve real-world problems.
      </p>
      <a href="/about" className="btn">Learn More About Me</a>
    </div>
  );
};

export default Home;