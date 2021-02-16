import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { BsArrowRight, BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { SiRuby, SiReact, SiJavascript, SiRails, SiAdobexd, SiAdobe, SiPostgresql, SiHtml5, SiCss3, SiVisualstudiocode, SiLinkedin, SiGithub, SiMedium, SiTwitter, SiInstagram } from "react-icons/si"
import './App.css';
import pic from "./images/chris.png";
import {PROJECTS} from "./ProjectObjects.js"
import ProjectsContainer from './Containers/ProjectsContainer';

function App() {

  const projects = PROJECTS;

  return (
    <Fragment>
      <section className="header" id="landing">
        <div className="black-overlay">
          <div className="headline">
            <h1 className="headline-words">HELLO, MY NAME IS <span className="headline-name">CHRIS</span></h1>
            <p className="headline-paragraph">I am a junior software engineer who specializes in <span className="headline-paragraph-span">React.js</span> and <span className="headline-paragraph-span">Ruby on Rails</span>.</p>
            <p className="headline-paragraph">I do stuff</p>
            
            <HashRouter>
              <HashLink className="route-button" smooth to="#about-section">
                <button className="hero-button">
                  Read More <BsArrowRight className="hero-button-arrow" />
                </button>
              </HashLink>
            </HashRouter>
          </div>
        </div>
      </section>
      <section className="about-section" id="about-section">
        <div className="about-section-div-container">
          <div className="skills-div">
            <ul className="about-skills">
              <li><SiReact size="5.5vmin" /></li>
              <li><SiJavascript size="5.5vmin" /></li>
              <li><SiRuby size="5.5vmin" /></li>
              <li><SiRails size="5.5vmin" /></li>
              <li><SiAdobexd size="5.5vmin" /></li>
              <li><SiAdobe size="5.5vmin" /></li>
              <li><SiPostgresql size="5.5vmin" /></li>
              <li><SiHtml5 size="5.5vmin" /></li>
              <li><SiCss3 size="5.5vmin" /></li>
              <li><SiVisualstudiocode size="5.5vmin" /></li>
            </ul>
          </div>
          <div className="about-center-div">
            <div className="section-header">
              <h1>ABOUT</h1>
            </div>
            <div className="about-boxes">
              <div className="box-item1">
                  <p>Hey there!</p>
                  <p>So glad to have you on my website. I can't wait to get to know you!</p>
                  <p>I am a junior Full Stack software engineer who specializes in React.js and Ruby on Rails. My goal is to work with
                    top companies to advance my skills within the field. Flatiron School has been an integral part in my development as
                    a software engineer. Also, my Bachelor of Arts in Journalism from the University of North Texas has taught me key communication,
                    multimedia, copy writing, and marketing skills.
                  </p>
                  <p>Below you will find my projects, contact and resume. Please reach out with any feedback!
                    I absolutely love connecting with new people.</p>
                  <p style={{horizontalAlign:"middle"}}>
                  <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1UUD2ffXNGHnfQ5oSKNhyFFb_JCsDzJFD6CW3tWSfiWQ/edit?usp=sharing" style={{display: "inline-block"}}><button className="resume-button">
                  Resume
                  </button></a>
                    <span style={{float: "right"}}>
                      Cheers,
                      <br/>
                      -Tomas</span>
                  </p>


              </div>
                <div className="box-item2">
                  <img className="profile-pic" src={pic} alt="profile pic"/>
              </div>
            </div>
          </div>
          <HashRouter>
            <HashLink className="section-route-button" smooth to="#project-section">
              <div className="down-arrow">
                <BsChevronDoubleDown className="section-button-arrow" />
              </div>
            </HashLink>
          </HashRouter>
        </div>
        
      </section>
      <section className="project-section" id="project-section">
        <div className="project-section-header">
          <h1>Projects</h1>
        </div>
        <div className="main-project-container">
          <ProjectsContainer projects={projects}/>
        </div>
        <HashRouter>
            <HashLink className="section-route-button" smooth to="#contact-section">
              <div className="down-arrow">
                <BsChevronDoubleDown className="section-button-arrow" />
              </div>
            </HashLink>
        </HashRouter>

      </section>
      <section className="contact-section" id="contact-section">
        <div className="contact-section-header">
          <h1>Contact</h1>
        </div>
        <div>
          <a className="hero-button" target="_blank" rel="noreferrer" href="mailto:r.tomas.gonzalez01@gmail.com">Email Me</a>
        </div>
        
        <div className="contact-links-div" >
          <ul className="contact-links">
            <li ><SiLinkedin style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://www.linkedin.com/in/rtomasgonzalez/')}} size="5.5vmin" /></li>
            <li ><SiGithub style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://github.com/R-Tomas-Gonzalez')}} size="5.5vmin"/></li>
            <li ><SiMedium style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://tomas-82726.medium.com/')}} size="5.5vmin"/></li>
            <li ><SiTwitter style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://twitter.com/rtgonzalezimg')}} size="5.5vmin"/></li>
            <li ><SiInstagram style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://www.instagram.com/r.tomasgonzalez/?hl=en')}} size="5.5vmin"/></li>
          </ul>
          <div className="up-arrow">
          <HashRouter>
            <HashLink className="section-route-button-up" smooth to="#landing">
              <div className="down-arrow">
                <BsChevronDoubleUp className="section-button-arrow" />
              </div>
            </HashLink>
          </HashRouter>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
