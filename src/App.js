import React, { useState } from 'react';
import './IMG/MeIMG.jpg'
import './IMG/diploma.jpg'
import './IMG/awardDC.png'
import './IMG/rewardTeaching.jpg'
import './App.css';

function App() {
  const [tab, setTab] = useState(0);
  function tab1() {
    setTab(1);
  };
  function tab2() {
    setTab(2);
  };
  function tab3() {
    setTab(3);
  };
  return (
    <div>
  <header>
    <nav><ul>
      <li><button onClick={tab1}>About me</button></li>
      <li><button onClick={tab2}>skills</button></li>
      <li><button onClick={tab3}>contact me</button></li>
    </ul></nav>
  </header>
  <main hidden={tab !== 0}>
    <p class="beforeTabinfo">Hello, my name is Lee Cash, and you can get to know me better by clicking any of the 3 tabs at the top.</p>
  </main>
  <main class="main1" hidden={tab !== 1}>
        <section class="mainSection1">
            <img class="meimg" src="./IMG/MeIMG.jpg" alt='404'></img>
            <div class="Pinfo">
                <div class="PinfoC1"><p>Name: </p><p class="PinfoC1Space">Lee Cash</p></div>
                <div class="PinfoC1"><p>Age: </p><p class="PinfoC1Space">19</p></div>
                <div class="PinfoC1"><p>Education: </p><p class="PinfoC1Space"> High school Diploma</p></div>
            </div>
        </section>
        <section class="mainSection2">
            <div>
                <img class="section2imgs" src="./IMG/diploma.jpg" alt='404'></img>
                <p class="IMGD"> I've received this diploma as a result of graduating.</p>
            </div>
            <div>
                <img class="section2imgs" src="./IMG/awardDC.png" alt='404'></img>
                <p class="IMGD"> The Teachers at Hixson High School anonymously voted 3 people to receive a reward for self discipline.</p>
            </div>
            <div>
                <img class="section2imgs" src="./IMG/rewardTeaching.jpg" alt='404'></img>
                <p class="IMGD">I got the Denise Burt-Turner Special Needs P.E award for taking a small group of special needs students to a classroom and teaching them.</p>
            </div>
        </section>
  </main>
    </div>
  );
}

export default App;
