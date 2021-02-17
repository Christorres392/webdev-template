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
            <p className="headline-paragraph">I am a junior software engineer who specializes in <span className="headline-paragraph-span">React.js</span> , <span className="headline-paragraph-span">Ruby on Rails</span> and <span className="headline-paragraph-span">Watching Scary Movies</span></p>
            <p className="headline-paragraph">Welcome to my website</p>
            
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
                  <p>Hi !</p>
                  <p>Thanks for taking the time to take a peek at my webpage!</p>
                  <p>I'm a junior Full Stack software engineer from San Antonio Tx who specializes in React.js and Ruby on Rails. I began my pursuit of life in the tech industry
                    with the hopes of helping push tech companies forward, the way I feel they are helping push the world forward with innovation. 
                    As a recent graduate from Flatiron School in Austin Tx, my passion for coding, the culture, and the people
                    has only grown.
                  </p>
                  <p>You can find my projects, contact info, and resume below. Feel free to reach out to me!
                    Whether you want to talk tech, or just have a good story to tell and are looking for a good listener.</p>
                  <p style={{horizontalAlign:"middle"}}>
                  <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1UUD2ffXNGHnfQ5oSKNhyFFb_JCsDzJFD6CW3tWSfiWQ/edit?usp=sharing" style={{display: "inline-block"}}><button className="resume-button">
                  Resume
                  </button></a>
                    <span style={{float: "right"}}>
                      Best Regards,
                      <br/>
                      -Chris</span>
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
          <a className="hero-button" target="_blank" rel="noreferrer" href="mailto:christorres09@gmail.com">Email Me</a>
        </div>
        
        <div className="contact-links-div" >
          <ul className="contact-links">
            <li ><SiLinkedin style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://www.linkedin.com/in/chris-torres-4286471a2/')}} size="5.5vmin" /></li>
            <li ><SiGithub style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://github.com/Christorres392')}} size="5.5vmin"/></li>
            <li ><SiMedium style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://christorres09.medium.com/')}} size="5.5vmin"/></li>
            {/* <li ><SiTwitter style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://twitter.com/rtgonzalezimg')}} size="5.5vmin"/></li>
            <li ><SiInstagram style={{cursor: "pointer"}} className="link-icon" onClick={(e) => {window.open('https://www.instagram.com/r.tomasgonzalez/?hl=en')}} size="5.5vmin"/></li> */}
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
