import React, { useState } from 'react';
import MeIMG from './IMG/MeIMG.jpg';
import diploma from './IMG/diploma.jpg';
import awardDC from './IMG/awardDC.png';
import clickHere from './IMG/clickHere.gif';
import awardTeaching from './IMG/rewardTeaching.jpg';
import meG from './IMG/meG.jpg';
import './App.css';
function App() {
  const [tab, setTab] = useState(0);
  const [check, setCheck] = useState(0);
  // for function terminal start 
    var homePath = true;
    var aboutPath = false;
    var skillsPath = false;
    var contactMePath = false;
    var IMGsPath = false;
  //end 
  function terminal(e) {
    var terminalType = document.getElementById('terminalType');
    var terminalStuff = document.getElementById('terminalStuff');
    /*var inputQ = document.querySelector(#terminalType);
    console.log(inputQ)
    terminalType.onload = function(e) {*/
    if(e.key === "Enter"){
      switch(true) {
        case terminalType.value === "help":
          var helpCOutput = document.createElement('p');
          helpCOutput.innerHTML = 'type \"clear\" to clear the terminal screen.<br>type \"whoareyou\" to get info about Lee Cash.<br>type \"pwd\" to know where you are in the file system.<br>type \"ls\" to know what is in the directory you are located in.<br>type \"cd \'name of dir or ~ to return to home dir\'\" to go into a directory.<br>type \"cat \'name of dir\'\" to get info about Lee Cash.<br>type \"Xdg-open \'fileName\'\" to open a IMG in the terminal.<br>commands are cap sensitive';
          terminalStuff.appendChild(helpCOutput);
          terminalType.value = "";
          break;
          case terminalType.value === "clear":
            terminalStuff.innerHTML = "";
            terminalType.value = "";
            break;
          case terminalType.value === "ls":
            if(homePath === true){
              var lsOutPut = document.createElement('p');
              lsOutPut.innerHTML = 'about<br>skills<br>contactMe<br>IMGs';
              terminalStuff.appendChild(lsOutPut);
            }
            if(aboutPath === true){
              var lsOutPut = document.createElement('p');
              lsOutPut.innerHTML = 'age.txt<br>name.txt<br>education.txt';
              terminalStuff.appendChild(lsOutPut);
            }
            if(skillsPath === true){
              var lsOutPut = document.createElement('p');
              lsOutPut.innerHTML = 'javaScript.txt<br>html.txt<br>css.txt<br>BlogsVideos';
              terminalStuff.appendChild(lsOutPut);
            }
            if(contactMePath === true){
              var lsOutPut = document.createElement('p');
              lsOutPut.innerHTML = 'email.txt<br>phone#.txt';
              terminalStuff.appendChild(lsOutPut);
            }
            if(IMGsPath === true){
              var lsOutPut = document.createElement('p');
              lsOutPut.innerHTML = 'teachingAward.jpg<br>discipline.png<br>diploma.jpg';
              terminalStuff.appendChild(lsOutPut);
            }
            terminalType.value = "";
            break;
            case terminalType.value === "cd about":
              if(homePath === true && terminalType.value === "cd about"){
                homePath = false;
                aboutPath = true;
                skillsPath = false;
                contactMePath = false;
                IMGsPath = false;
                terminalType.value = "";
              }
              break;
            case terminalType.value === "cd skils":
                if(homePath === true && terminalType.value === "cd skils"){
                  homePath = false;
                  aboutPath = false;
                  skillsPath = true;
                  contactMePath = false;
                  IMGsPath = false;
                  terminalType.value = "";
                }
                break;
              case terminalType.value === "cd contactMe":
                if(homePath === true && terminalType.value === "cd contactMe"){
                  homePath = false;
                  aboutPath = false;
                  skillsPath = false;
                  contactMePath = true;
                  IMGsPath = false;
                  terminalType.value = "";
                }
                  break;
                case terminalType.value === "cd IMGs":
                  if(homePath === true && terminalType.value === "cd IMGs"){
                    homePath = false;
                    aboutPath = false;
                    skillsPath = false;
                    contactMePath = false;
                    IMGsPath = true;
                    terminalType.value = "";
                  }
                    break;
                case terminalType.value === "cd ~":
                  homePath = true;
                  aboutPath = false;
                  skillsPath = false;
                  contactMePath = false;
                  IMGsPath = false;
                  terminalType.value = "";
                  break;
              case terminalType.value === "Xdg-open teachingAward.jpg":
                if(IMGsPath === true){
                  var XdgOpenOutPut = document.createElement('div');
                  //XdgOpenOutPut.src = {awardTeaching};
                  //XdgOpenOutPut.innerHTML = '<img src="./IMG/awardDC.png"></img>';
                  XdgOpenOutPut.innerHTML = '<img src=' + {awardTeaching} + '></img>';
                  //XdgOpenOutPut.src = './IMG/awardDC.png';
                  terminalStuff.appendChild(XdgOpenOutPut);
                }
                break;
              case terminalType.value === "Xdg-open discipline.png":
                if(IMGsPath === true){
                  var XdgOpenOutPut = document.createElement('img');
                  XdgOpenOutPut.src = {awardDC};
                  terminalStuff.appendChild(XdgOpenOutPut);
                }
                break;
              case terminalType.value === "Xdg-open diploma.jpg":
                if(IMGsPath === true){
                  var XdgOpenOutPut = document.createElement('img');
                  XdgOpenOutPut.src = {diploma};
                  terminalStuff.appendChild(XdgOpenOutPut);
                }
                break;
          default:
            var defaultOutPut = document.createElement('p');
            defaultOutPut.innerHTML = 'Unkown command try \"help\" command';
            terminalStuff.appendChild(defaultOutPut);
            terminalType.value = "";
      }
    }
  }
  //terminal();

  function tab1() {
    setTab(1);
  };
  function tab2() {
    setTab(2);
  };
  function tab3() {
    setTab(3);
  };
  function blogs() {
    var blog1 = document.getElementById("blog1");
    blog1.addEventListener("click", function(){window.open('https://youtu.be/r-h2IPPMpBo?si=ve_G_GOLVm1CXINw');});
    var blog2 = document.getElementById("blog2");
    blog2.addEventListener("click", function(){window.open('https://youtu.be/bSdCY3ay8Qk?si=qaWul1NhYZoThcEC');});
    var blog3 = document.getElementById("blog3");
    blog3.addEventListener("click", function(){window.open('https://youtu.be/_WRFMGZHrGs?si=pbDky5_15M7e_-zZ');});
    var blog4 = document.getElementById("blog4");
    blog4.addEventListener("click", function(){window.open('https://youtu.be/ryfU13Vkmls?si=NZ-43wWE_-l__Buk');});
    var blog5 = document.getElementById("blog5");
    blog5.addEventListener("click", function(){window.open('https://youtu.be/s7Ih4r3CFsE?si=4pxEeuve15IUIEXJ');});
    var blog6 = document.getElementById("blog6");
    blog6.addEventListener("click", function(){window.open('https://youtu.be/L2SW84Q7L2I?si=4H3hfV1qTwPzlEmi');});
    var blog7 = document.getElementById("blog7");
    blog7.addEventListener("click", function(){window.open('https://youtu.be/H8eIcx-YAtE?si=BrL7t0uukwtAA6PR');});
    var blog8 = document.getElementById("blog8");
    blog8.addEventListener("click", function(){window.open('https://youtu.be/gG2aYsNgx88?si=PaKMnsNRQQ3qHG8f');});
  };
  return (
    <div>
  <header>
    <nav><ul>
      <li><button type="button" onClick={tab1}>About me</button></li>
      <li><button type="button" onClick={tab2}>skills</button></li>
      <li><button type="button" onClick={tab3}>contact me</button></li>
    </ul></nav>
  </header>
  <main hidden={tab !== 0}>
    <div className='main0'>
    <p className="beforeTabinfo">Hello, my name is Lee Cash, and you can get to know me better by clicking any of the 3 tabs at the top.</p>
    <section>
      <div className='tab0Split'>
        <div className='tab0SplitD'>
          <img className='tab0SplitDImg' src={meG} alt='404'></img>
        </div>
        <div className='tab0SplitD2'>
          <div id='terminalStuff'><p><pre>
            Type "help" to get a list of things to do or see in the box below.<br></br>
            _________________________________________________________________________ <br></br>
            |  |   | ____| | ____|      | ___|      / /\ \       |  ____|  | |    | |<br></br>
            |  |   | |___  | |___       | |        / /__\ \      | |____   | |____| |<br></br>
            |  |   |  ___| |  ___|      | |       / /____\ \     |_____ |  | _____  |<br></br>
            |  |__ | |___  | |___       | |__    / /      \ \     ____| |  | |    | |<br></br>
            |_____||_____| |_____|      |____|  /_/        \_\   |______|  |_|    |_|<br></br>
            </pre></p></div>
          <input id='terminalType' className='helpText1' onKeyDown={terminal}></input>
        </div>
      </div>
    </section>
    </div>
  </main>
  <main hidden={tab !== 1}>
      <div className="main1"> 
        <section className="mainSection1">
            <img className="meimg" src={MeIMG} alt='404'></img>
            <div className="Pinfo">
                <div className="PinfoC1"><p>Name: </p><p className="PinfoC1Space">Lee Cash</p></div>
                <div className="PinfoC1"><p>Age: </p><p className="PinfoC1Space">19</p></div>
                <div className="PinfoC1"><p>Education: </p><p className="PinfoC1Space"> High school Diploma</p></div>
            </div>
        </section>
        <section className="mainSection2">
            <div className='tab1imgsC'>
                <img className="section2imgs" src={diploma} alt='404'></img>
                <p className="IMGD"> I've received this diploma as a result of graduating.</p>
            </div>
            <div className='tab1imgsC'>
                <img className="section2imgs" src={awardDC} alt='404'></img>
                <p className="IMGD"> The Teachers at Hixson High School anonymously voted 3 people to receive a reward for self discipline.</p>
            </div>
            <div className='tab1imgsC tab1imgsC3'>
                <img className="section2imgs section2imgs2" src={awardTeaching} alt='404'></img>
                <p className="IMGD">I got the Denise Burt-Turner Special Needs P.E award for taking a small group of special needs students to a classroom and teaching them.</p>
            </div>
        </section>
      </div>
  </main>
  <main hidden={tab !== 2}>
    <section className="mainC">
      <section className="mainC1">
        <h1 className="mainCTitles">Skill set</h1>
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
      <section className="mainC2">
        <h1 className="mainCTitles">blogs</h1>
        <div onMouseOver={blogs} id="blog8" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p className="vText">Blog#8</p></div>
        <div onMouseOver={blogs} id="blog7" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p className="vText">Blog#7</p></div>
        <div onMouseOver={blogs} id="blog6" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p className="vText">Blog#6</p></div>
        <div onMouseOver={blogs} id="blog5" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p className="vText">Blog#5</p></div>
        <div onMouseOver={blogs} id="blog4" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p className="vText">Blog#4</p></div>
        <div onMouseOver={blogs} id="blog3" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p className="vText">Blog#3</p></div>
        <div onMouseOver={blogs} id="blog2" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p className="vText">Blog#2</p></div>
        <div onMouseOver={blogs} id="blog1" className="cV"><img className="vIMG" src={clickHere} alt="404"></img><p className="vText">Blog#1</p></div>
      </section>
      <section className="mainC3">
        <h1 className="mainCTitles">proof</h1>
        <p className="mainC3P">So far the only experience I have is teaching at hixson high school shown by the Denise Burt-Turner Special Needs P.E award also some mentoring at chattanooga state community college for TN promise.</p>
        <img className="mainC3IMG" src={awardTeaching} alt="404"></img>
      </section>
    </section>
  </main>
  <main hidden={tab !== 3}>
    <div  className="contactMeMain">
    <p className="beforeTabinfo">If you're interested here's how to contact me and some information.</p>
    <section className="ResumeSection">
      <div className="ResumeSectionContactInfo">
        <p className="ResumeSectionContactInfoC">Lee F. Cash</p>
        <p className="ResumeSectionContactInfoC">leecash133@gmail.com</p>
        <p className="ResumeSectionContactInfoC">+1 762 222-3156</p>
      </div>
      <h1>Profile - </h1>
      <p className="profileInfo">Highly motivated and creative college student dedicated to obtaining a degree in Web Design. Proficient in HTML, CSS, and JavaScript, with a commitment to staying abreast of industry trends and emerging technologies. Currently developing skills in Node.js and React JS. Seeking an opportunity to collaborate with cross-functional teams, eager to apply skills and contribute to innovative web design projects. Excited to bring technical skills and design sensibilities to a challenging and rewarding role in web design.</p>
    </section>
    </div>
  </main>
    </div>
  );
}

export default App;
