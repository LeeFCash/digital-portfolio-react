import React, { useState } from 'react';
import MeIMG from './IMG/MeIMG.jpg'
import diploma from './IMG/diploma.jpg'
import awardDC from './IMG/awardDC.png'
import clickHere from './IMG/clickHere.gif'
import awardTeaching from './IMG/rewardTeaching.jpg'
import './App.css';

function App() {
  const [tab, setTab] = useState(0);
  function tab1() {
    setTab(1);
    //tab = 1;
  };
  function tab2() {
    setTab(2);
    //tab = 2;
  };
  function tab3() {
    setTab(3);
    //tab = 3;
  };
  var blog1 = document.getElementById(blog1);
  var blog2 = document.getElementById(blog2);
  var blog3 = document.getElementById(blog3);
  var blog4 = document.getElementById(blog4);
  var blog5 = document.getElementById(blog5);
  var blog6 = document.getElementById(blog6);
  var blog7 = document.getElementById(blog7);
  var blog8 = document.getElementById(blog8);
  var blogs = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8];
  for (let i = 0; i < blogs.length; i++) {
    blogs[i].addEventListener('click', function() {
      window.open('https://youtu.be/H8eIcx-YAtE?si=BrL7t0uukwtAA6PR');
    });
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
  <main hidden={tab !== 1}>
      <div class="main1"> 
        <section class="mainSection1">
            <img class="meimg" src={MeIMG} alt='404'></img>
            <div class="Pinfo">
                <div class="PinfoC1"><p>Name: </p><p class="PinfoC1Space">Lee Cash</p></div>
                <div class="PinfoC1"><p>Age: </p><p class="PinfoC1Space">19</p></div>
                <div class="PinfoC1"><p>Education: </p><p class="PinfoC1Space"> High school Diploma</p></div>
            </div>
        </section>
        <section class="mainSection2">
            <div>
                <img class="section2imgs" src={diploma} alt='404'></img>
                <p class="IMGD"> I've received this diploma as a result of graduating.</p>
            </div>
            <div>
                <img class="section2imgs" src={awardDC} alt='404'></img>
                <p class="IMGD"> The Teachers at Hixson High School anonymously voted 3 people to receive a reward for self discipline.</p>
            </div>
            <div>
                <img class="section2imgs" src={awardTeaching} alt='404'></img>
                <p class="IMGD">I got the Denise Burt-Turner Special Needs P.E award for taking a small group of special needs students to a classroom and teaching them.</p>
            </div>
        </section>
      </div>
  </main>
  <main hidden={tab !== 2}>
    <section class="mainC">
      <section class="mainC1">
        <h1 class="">Skill set</h1>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>Css</li>
        </ul>
        <h1>Links</h1>
        <ul>
          <li><a href="https://docs.google.com/document/d/11U-PeRWKpVxDgFKCo7N4ncxbx-QHA7CDqgkC0bXaRfo/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> Click this to see Resume</a></li>
          <li><a href="https://github.com/LeeFCash" target="_blank" rel="noopener noreferrer"> Click this to see my github</a></li>
          <li><a href="https://youtube.com/playlist?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7&si=XAfIlmkHPb5N08BR" target="_blank" rel="noopener noreferrer"> Click this to see my updated blog</a></li>
        </ul>
      </section>
      <section class="mainC2">
        <h1 class="">Skill set</h1>
        <div id="blog8" class="cV"><img class="vIMG" src={clickHere} alt="404"></img><p class="vText">Blog#8</p></div>
        <div id="blog7" class="cV"><img class="vIMG" src={clickHere} alt="404"></img><p class="vText">Blog#7</p></div>
        <div id="blog6" class="cV"><img class="vIMG" src={clickHere} alt="404"></img><p class="vText">Blog#6</p></div>
        <div id="blog5" class="cV"><img class="vIMG" src={clickHere} alt="404"></img><p class="vText">Blog#5</p></div>
        <div id="blog4" class="cV"><img class="vIMG" src={clickHere} alt="404"></img><p class="vText">Blog#4</p></div>
        <div id="blog3" class="cV"><img class="vIMG" src={clickHere} alt="404"></img><p class="vText">Blog#3</p></div>
        <div id="blog2" class="cV"><img class="vIMG" src={clickHere} alt="404"></img><p class="vText">Blog#2</p></div>
        <div id="blog1" class="cV"><img class="vIMG" src={clickHere} alt="404"></img><p class="vText">Blog#1</p></div>
      </section>
      <section class="mainC3">
        <h1 class="">Skill set</h1>
        <p class="mainC3P">So far the only experience I have is teaching at hixson high school shown by the Denise Burt-Turner Special Needs P.E award also some mentoring at chattanooga state community college for TN promise.</p>
        <img class="mainC3IMG" src={awardTeaching} alt="404"></img>
      </section>
    </section>
  </main>
  <main hidden={tab !== 3}>
    <div  class="contactMeMain">
    <p class="beforeTabinfo">If you're interested here's how to contact me and some information.</p>
    <section class="ResumeSection">
      <div class="ResumeSectionContactInfo">
        <p class="ResumeSectionContactInfoC">Lee F. Cash</p>
        <p class="ResumeSectionContactInfoC">leecash133@gmail.com</p>
        <p class="ResumeSectionContactInfoC">+1 762 222-3156</p>
      </div>
      <h1>Profile - </h1>
      <p class="profileInfo">Highly motivated and creative college student dedicated to obtaining a degree in Web Design. Proficient in HTML, CSS, and JavaScript, with a commitment to staying abreast of industry trends and emerging technologies. Currently developing skills in Node.js and React JS. Seeking an opportunity to collaborate with cross-functional teams, eager to apply skills and contribute to innovative web design projects. Excited to bring technical skills and design sensibilities to a challenging and rewarding role in web design.</p>
    </section>
    </div>
  </main>
    </div>
  );
}

export default App;
