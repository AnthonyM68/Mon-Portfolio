import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img thumbnail" style={{ backgroundImage: 'url(images/MA.PNG)' }} />
            <h1 id="colorlib-logo">
              <a href="https://www.linkedin.com/in/anthony-montmirail/" >Anthony Montmirail</a></h1>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li>
                  <i className="icon-mail"></i>
                  <a href="#contact" data-nav-section="contact" className="text-mail" data-nav-section="contact"> contact@logic-68consolessystem.fr</a>
                </li>
                <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                <li><a href="#about" data-nav-section="about">Description</a></li>
                <li><a href="#timeline" data-nav-section="timeline">Chronologie</a></li>
                <li><a href="#projects" data-nav-section="projects">Projets</a></li>
                <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                <li><a href="#contact" data-nav-section="contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu-contact">
            <ul>
              <li><a href="https://www.linkedin.com/in/anthony-montmirail/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://github.com/AnthonyM68" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=100012170952689" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
              <li><a href="https://twitter.com/68Logic" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
            </ul>
          </nav>
          <div id="colorlib-footer">
            <ul>
              <li>
                Développer avec <i className="icon-heart" aria-hidden="true" /> et React Js
              </li>
              <li>
                <a href="https://github.com/tengbao" target="_blank" rel="noopener noreferrer" className="globe">Background Vanta.js</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    )
  }
}
