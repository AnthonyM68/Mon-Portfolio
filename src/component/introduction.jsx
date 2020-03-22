import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import * as THREE from 'vanta/vendor/three.r95.min.js'

import WAVES from 'vanta/dist/vanta.waves.min'
import GLOBE from 'vanta/dist/vanta.globe.min'
import CELLS from 'vanta/dist/vanta.cells.min'
import RINGS from 'vanta/dist/vanta.rings.min'
import NET from 'vanta/dist/vanta.net.min'
import RIPPLE from 'vanta/dist/vanta.ripple.min'


export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'globe',
      sketch: 'hidden',

    }
    this.vantaRef = React.createRef();
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleColor = this.handleColor.bind(this);
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    this.componentDidMount();
  }

  componentDidMount() {
    if (this.state.selectedOption === 'waves') {
      this.animate = WAVES({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x424143,
        color2: 0x4a1d2d,
        waveHeight: 25.50,//Heuteur de vagues
        waveSpeed: 1.20,//Vitessse
        shininess: 34.00,//Brillance
        THREE: THREE
      });
    } else if (this.state.selectedOption === 'globe') {
      this.animate = GLOBE({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x4a1d2d,//Rouge
        color2: 0xfffdfd,//Blanc
        backgroundColor: 0x424143,//Gris
        THREE: THREE
      });
    }
    else if (this.state.selectedOption === 'cells') {
      this.animate = CELLS({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x424143,
        color2: 0xfffdfd,
        size: 3,//Taille
        speed: 2,//Vitesse
        THREE: THREE
      });
    }
    else if (this.state.selectedOption === 'rings') {
      this.animate = RINGS({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x424143,
        color: 0x93fa1e,
        THREE: THREE
      });
    }
    else if (this.state.selectedOption === 'net') {
      this.animate = NET({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xfc397c,
        backgroundColor: 0x424143,
        points: 11.00,
        maxDistance: 22.00,
        espacement: 16.00,
        THREE: THREE
      });
    }
    else if (this.state.selectedOption === 'ripple') {
      this.animate = RIPPLE({
        el: this.vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xfc397c,
        backgroundColor: 0x424143,
        points: 11.00,
        maxDistance: 22.00,
        espacement: 16.00,
        THREE: THREE
      });
    }
    this.vantaEffect = this.animate;
    window.addEventListener('load', this.handleLoad);
  }

  handleClick() {
    let element = document.getElementById('vanta');
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }
  handleColor() {
    this.setState(state => {
      return {
        sketch: state.sketch = 'visible',
      };
    });




  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    document.onclick = function (event) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }




    return <div>

      <section id="colorlib-hero" data-section="home">
        <div className="flexslider">

          <ul className="slides">
            <li>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row row-slider" id="row-slider">
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
                <div className="row row-slider">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 slider-text">
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

          <div id='vanta' className='vanta' ref={this.vantaRef}><i className="icon-arrow-down-outline" /></div>
          <div className="sketch">
            <div><SketchPicker /></div>
          </div>
        </div>


        <div className="row" id="select-background">



          <div id="selector" className="row text-right">

            <form id="myform" onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label>
                  <input type="radio" value="globe" checked={this.state.selectedOption === 'globe'} onChange={this.handleOptionChange} />
                Globe
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="waves" checked={this.state.selectedOption === 'waves'} onChange={this.handleOptionChange} />
                Waves
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="cells" checked={this.state.selectedOption === 'cells'} onChange={this.handleOptionChange} />
                  Cells
            </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="rings" checked={this.state.selectedOption === 'rings'} onChange={this.handleOptionChange} />
                  Rings
            </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="net" checked={this.state.selectedOption === 'net'} onChange={this.handleOptionChange} />
                  Net
            </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="ripple" checked={this.state.selectedOption === 'ripple'} onChange={this.handleOptionChange} />
                  Ripple
            </label>
              </div>
              <button className="btn submit-background" type="submit">Démarrer</button>

            </form>

          </div>
          <div className="row text-right">
            <a href="#" onClick={this.handleClick} className="plein-ecran" >Ouvrir l'image en mode Plein écran </a><br />
            <a href="#" onClick={this.handleColor} className="plein-ecran" >Sélecteur de couleur </a><br />
          </div>

        </div>
      </section>
    </div>
  }
}