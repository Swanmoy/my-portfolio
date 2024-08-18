import React from 'react';

const Header=()=>{
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero">
        <h1>Hi, I'm Swanmoy Nag</h1>
        <p>Fullstack Developer</p>
      </div>
    </header>
  );
}

export default Header;
