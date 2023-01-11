import React from 'react';
import people from '../../assets/people.png';
import raguel from '../../assets/raguel.jfif';
import rgl from '../../assets/rgl.avif';

import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Welcome,</h1>
      <p>Keep Visiting </p>
      <p> <b>DEBRE HAIL KIDUS RAGUEL Church</b></p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Be a Member</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>20 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={rgl} />
    </div>
  </div>
);

export default Header;
