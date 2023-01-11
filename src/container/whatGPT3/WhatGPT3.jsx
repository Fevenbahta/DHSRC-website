import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.css';


const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About" text=" The Church of the Archangel Raguel in the Merkato 
      district of Addis Ababa. It is located next to the Grand Anwar Mosque, the principal 
      house of worship for Muslims in Addis Ababa. The peaceful co-existance of this church
      and the mosque has long been a symbol of the peaceful interfaith relations in Ethiopia.
      " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">What do you want to know about?</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="History" text=" This church was the site of the first anti-communist 
      uprising in Addis Ababa during the rule of the Derg, when the government tried to remove
       the Ark of the church at night and close the building and move the church back to it's remote 
        original building on Mount Entoto outside the city in 1987. Both Christian and Muslim 
        residents of the Merkato district poured into the streets and prevented the closure
         of the church and then beat back the security forces out of the neighborhood,
       preventing the government from carrying out it's plans." />
      <Feature title="contributor" text="This church was built by Empress Menen, 
      wife of Emperor Haile Selassie as part of her pledge
       of thanks for the liberation of Ethiopia from fascist Italian occupation." />
      <Feature title="When" text="
      ደብረ ኃይል ቅዱስ ራጉኤል ቤተ ክርስቲያን በ፲፱፻፵፰ ዓ.ም ተመሠረተ" />
    </div>
  </div>
);

export default WhatGPT3
