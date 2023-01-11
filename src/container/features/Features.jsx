import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'ቀን /ሰዓት',
    text: 'መርሐ ግብር',
  },
  {
    title: 'ሰኞ - ቅዳሜ (7AM – 10AM)',
    text: 'ጸሎተ ኪዳንና መንፈሳዊ የምክር አገልግሎት.',
  },
  {
    title: 'አርብ (6PM – 8PM)',
    text: 'የሠርክ ጸሎትና ትምህርተ ወንጌል',
  },
  {
    title: 'እሑድ (4AM – 11AM)',
    text: 'ጸሎተ ቅዳሴና ትምህርተ ወንጌል',
  }, {
    title: 'እሑድ (12PM – 2PM)',
    text: 'የሰንበት ት/ቤት መርሐ ግብር'
    ,
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"> ሳምንታዊ የአገልግሎት መርሐ ግብር</h1>
      <p>ቤተ ክርስቲያናችን ሳምንታዊ የኪዳን ጸሎት፣ የሰርክ ጉባዔና የቅዳሴ አገልግሎት ይሰጣል።
         እንዲሁም በየወሩ ወር በገባ በ፩ኛው ቀን የቅዱስ ራጉኤልን በዓል፤ በ፲፱ኛው ቀን የቅዱስ ገብርኤልን በዓል እንዲሁም በ፳፩ኛው 
         ቀን የእመቤታችን የቅድስት ድንግል ማርያምን በዓል በማሰብ ቅዳሴ ይቀደሳል። 
        እነዚህን ሳምንታዊና ወርሃዊ የአገልግሎት መርሐ ግብሮቻችንን ለመመልከት ከዚህ በታች የቀረበውን ሰሌዳ ይመልከቱ።</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
