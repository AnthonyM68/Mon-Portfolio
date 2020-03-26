'use strict'
import React, { Component } from 'react'
import reactCSS from 'reactcss'
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
      selectedOptionColor: 'background',
      background: '#424143',
      color1: '#2c98f0',
      color2: '#fffdfd',
      displayColorPicker: false,
      visibilityState: 'visible',
      
      color: {
        r: '66',
        g: '65',
        b: '67',
        a: '1',
      },
    }
    this.vantaRef = React.createRef();
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleOptionChangeColor = this.handleOptionChangeColor.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormSubmitColor = this.handleFormSubmitColor.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  handleOptionChangeColor(changeEvent) {
    this.setState({
      selectedOptionColor: changeEvent.target.value
    });
  }
  handleChange = (color) => {
    console.log(this.state.selectedOptionColor)
    this.setState({ color: color.rgb })
    this.setState({ [this.state.selectedOptionColor]: color.hex })
    this.componentDidMount()
  }


  handleClicks = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }
  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    this.componentDidMount();

  }
  handleFormSubmitColor(formSubmitEvent) {
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
        color: this.state.color1,
        color2: this.state.color2,
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
        color: this.state.color1,
        color2: this.state.color2,
        backgroundColor: this.state.background,
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
        color1: this.state.color1,
        color2: this.state.color2,
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
        backgroundColor: this.state.background,
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
        color: this.state.color1,
        backgroundColor: this.state.background,
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
        color: this.state.color1,
        backgroundColor: this.state.background,
        points: 11.00,
        maxDistance: 22.00,
        espacement: 16.00,
        THREE: THREE
      });
    }
    this.vantaEffect = this.animate;
  }


  handleClick() {
    let element = document.getElementById('vanta');
    this.setState({visibilityState: 'hidden'});
    if (element.requestFullscreen) {
      element.requestFullscreen();
      
    }
  }
  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }


  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
          right: '5vw',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',

        },
      },
    });

    document.onclick = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        this.setState({visibilityState: 'visible'});
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
          </ul> <div id='vanta' className='vanta' ref={this.vantaRef}><i className="icon-arrow-down-outline" style={{visibility: this.state.visibilityState}}/></div>
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



          <div id="selector2" className="row text-right">

            <form id="myform2" onSubmit={this.handleFormSubmitColor}>

              <div className="radio">
                <label>
                  <input type="radio" value="background" checked={this.state.selectedOptionColor === 'background'} onChange={this.handleOptionChangeColor} />
                Background
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="color1" checked={this.state.selectedOptionColor === 'color1'} onChange={this.handleOptionChangeColor} />
                Color1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="color2" checked={this.state.selectedOptionColor === 'color2'} onChange={this.handleOptionChangeColor} />
                  Color2
              </label>
              </div>
              <div style={styles.swatch} onClick={this.handleClicks}>
                <div style={styles.color} />
              </div>
              {this.state.displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={this.handleClose} />
                <div><SketchPicker color={this.state.color} onChange={this.handleChange} /></div>

              </div> : null}
              <br /><a href="#" onClick={this.handleClick} className="plein-ecran" >Ouvrir l'image en mode Plein écran </a>
            </form>
          </div>



        </div>


      </section>

    </div>
  }
}