import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/mylivewallpapers.com-8-Bit-Night-City.mp4' autoPlay loop muted />
      <h1>NUMERICAL METHODS</h1>
      <p>need someone help your homework?</p>
      <div className='hero-btns'>
      </div>
    </div>
  );
}

export default HeroSection;