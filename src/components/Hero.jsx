import React, { Component } from 'react';
import heroImage from '/images/photo-grid.png';

export default function Hero(){
    return (
        <div className='hero-section'>
            <img src={heroImage} alt='photo grid of users' className='hero--image'/>
            <div className='hero-right'>
            <h1 className='hero--title'>Online Experiences</h1>
            <p className='hero--desc'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}
