import React from 'react';
import blog2 from '../../assets/blog2.jpg';
import './possiblity.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={blog2} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <p className="gradient__text">
"አንተ የማትገለጽ ዉበት ሆይ በእዉነት አንተን ከመዉደድ በጣም ዘግይቻለሁ”
<br/>
~|| ቅዱስ አዉግስጢኖስ</p>
      <p>I prayed for a pure heart,
      it took me a long time and hard struggle to discover that prayer 
      itself is the only road to a pure heart.
<br/>
~|| St Pope Kyrillos
</p>
   
    </div>
  </div>
);

export default Possibility;
