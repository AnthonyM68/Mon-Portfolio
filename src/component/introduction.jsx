import React from 'react'
import * as THREE from 'vanta/vendor/three.r95.min.js'
import GLOBE from 'vanta/dist/vanta.globe.min'


export default class Vanta extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      mouseControls: true, touchControls: true, minHeight: 200.00, minWidth: 200.00, scale: 1.00, scaleMobile: 1.00, color: 0x4a1d2d, color2: 0xfffdfd, backgroundColor: 0x424143 ,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div>
      <section id="colorlib-hero"  data-section="home">
        <div className="flexslider">
          <div className='vanta' ref={this.vantaRef}>
          <ul className="slides">
            <li >
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>Bonjour je suis  <br />Anthony</h1>
                        <p><a className="btn btn-primary btn-learn" href="images/cv/cv.pdf" target="_blank" rel="noopener noreferrer">Mon CV <i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12  slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>Mes projets<br />de Développements</h1>
                        <p><a className="btn btn-primary btn-learn" href="https://github.com/AnthonyM68" target="_blank" rel="noopener noreferrer">Voir projets <i className="icon-github" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul> 
        </div>
      </div>
    </section>
    </div>
  }
}