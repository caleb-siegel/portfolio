import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';
import Resume from "../../assets/Caleb-Siegel-Resume.pdf";
import Technologies from './Technologies';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Welcome to my Website! My name is Caleb Siegel and I am a software engineer in NYC. Languages/Technologies/Frameworks I have worked with are Python, Javascript, React, HTML, CSS, Vite, SQLAlchemy, SQL, Flask, Material UI, PostgreSQL, SQLite.</p>
            <a href={Resume} className="btn" target="_blank" rel="noopener noreferrer">View Resumè</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage python"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage javascript"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage react"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AboutBox /> */}
      {/* <Technologies /> */}
    </section>
  )
}

export default About