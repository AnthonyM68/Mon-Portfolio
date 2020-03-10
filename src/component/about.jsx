import React, { Component } from 'react'
import axios from 'axios'


function Abouts(props){

    return <div><span className="heading-meta">{props.data.meta}</span>
        <h2 className="colorlib-heading">{props.data.title}</h2>
        <h4 className="about-desc">{props.data.about}</h4></div>
   
}
function fadeOut(el) {
    var tick = function () {
        el.style.opacity = +el.style.opacity - 0.02;
        if (+el.style.opacity > 0) {
            setTimeout(tick, 100)
        }
    };
    tick();
}
export default class About extends Component {
    constructor(props) {
		super(props);
		this.state = {
            id: '',
            alert: '',
            warning: '',

		}
		this.tabBdd = null
	}
	componentDidMount() {
		window.addEventListener('load', this.handleLoad);
	}
	handleLoad = (e) => {
		this.handleClick(e);
	}
	handleClick = (e) => {
		e.preventDefault();
        let element = document.getElementById('alert1');
		axios({
			method: "POST",
			//url: "https://anthonym.promo-36.codeur.online/MonPortfolio/php/about.php",
			url: "http://localhost/MonPortfolio/public/php/about.php",
			data: this.state,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			//console.log(response);
			if (response.data.status === 'success') {
				
				if (response.data.tabInfos) {
					this.setState(state => {
						return {
							tabBdd: this.tabBdd = response.data.tabInfos,
						};
					});	
				}
			} else if (response.data.status === 'fail') {
				
				this.setState(state => {
					return {
						alert: state.alert = 'une erreur inattendue s\'est produite avec la base de données',
					};
				});
				this.setState(state => {
					return {
						warning: state.warning = 'alert alert-danger',
					};
				});
                element.setAttribute('style', 'opacity:1');
                fadeOut(element);
			}
		}).catch(error => {
			;
        }) 
	}
    render() {
        const item = [];
		if (this.tabBdd != null) {
			for (let i = 0; i < this.tabBdd.length; i++) {
				item.push(< Abouts key={this.tabBdd[i].id} data={{
					about: this.tabBdd[i].about,
					meta: this.tabBdd[i].meta,
					title: this.tabBdd[i].title,
				}} />)
			}
		}
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                        <div className="col-md-12 text-center">
                            <div id="alerte6" className={`${this.state.warning}`}><strong>{this.state.alert}</strong></div>
                        </div>
                        
                            
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                        </div>
                                        {item[0]}
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                {item[1]}
                            </div>
                        </div>
                        <div className="row row-pt-md animate-box">
                            <div className="col-md-4 text-center">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Développements Web</h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>    
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-settings"/>
                                    </span>
                                    <div className="desc">
                                        <h3>Dévelopements d'aplications Web</h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-settings"/>
                                    </span>
                                    <div className="desc">
                                        <h3>Réfections Processeurs</h3>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

