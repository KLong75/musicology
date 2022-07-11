import React from 'react';
import guitar from '../assets/logo-images/guitar.png';
import piano from '../assets/logo-images/piano.png';
import drums_black from '../assets/logo-images/drums_black.png';
import bass from '../assets/logo-images/bass.png';
import trombone from '../assets/logo-images/trombone.png';
import trumpet from '../assets/logo-images/trumpet.png';


const LandingPage = () => {
  return (
    <main>
      <div>
        <h1>Musicology</h1>
      </div>

      <div>
       <img src={guitar} className="App-logo" alt="logo" /> 
      </div>

      <div>
       <img src={piano} className="App-logo" alt="logo" /> 
      </div>

      <div>
       <img src={bass} className="App-logo" alt="logo" /> 
      </div>

      <div>
       <img src={drums_black} className="App-logo" alt="logo" /> 
      </div>

      <div>
       <img src={trombone} className="App-logo" alt="logo" /> 
      </div>

      <div>
       <img src={trumpet} className="App-logo" id='trumpet' alt="logo" /> 
      </div>

      

      <div>
        <h2>For Those About to Rock</h2>
      </div>
    </main>
  );
};

export default LandingPage;