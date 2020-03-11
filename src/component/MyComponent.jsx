import React from 'react'
import * as THREE from 'vanta/vendor/three.r95.min.js'
import WAVES from 'vanta/dist/vanta.waves.min'


export default class MyComponent extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
      
        <div className="flexslider js-fullheight">
          <div className='vanta' ref={this.vantaRef}>
          <ul className="slides">
            <li >
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Bonjour je suis  <br />Anthony</h1>
                        <p><a className="btn btn-primary btn-learn" href="images/cv/cv.pdf" target="_blank" rel="noopener noreferrer">Mon CV<i className="icon-download4" /></a></p>
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
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>Mes projets<br />de Développements</h1>
                        <p><a className="btn btn-primary btn-learn" href="https://github.com/AnthonyM68" target="_blank" rel="noopener noreferrer">Voir projets <i className="icon-briefcase3" /></a></p>
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