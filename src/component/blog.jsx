import React, { Component } from 'react'
import axios from 'axios'

function News(props) {
    return <div className="col-md-4 col-sm-6">
        <div className="desc">
            <span className="heading-blog"><small>{props.data.date} </small> | <small> {props.data.institute} </small> | <small> <i className="icon-bubble3" /></small></span>
            <h3><a href={`${props.data.certificate}`} target="_blank" rel="noopener noreferrer">{props.data.description} <i className="icon-download4" /></a> </h3>
            <p className="heading-blog" >{props.data.content}</p>
        </div>

    </div>
}
function fadeOut(el) {
    var tick = function () {
        el.style.opacity = +el.style.opacity - 0.02;
        if (+el.style.opacity > 0) {
            setTimeout(tick, 80)
        }
    };
    tick();
}
export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }
    handleLoad = (e) => {
        this.handleClick(e);
    }
    handleClick = (e) => {
        e.preventDefault();
        let element = document.getElementById('alerte4');
        axios({
            method: "POST",
            //url: "https://anthonym.promo-36.codeur.online/MonPortfolio/php/news.php",
            url: "http://localhost/MonPortfolio/public/php/news.php",
            data: this.state,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                if (response.data.tabInfos) {
                    this.setState({ tabNews: this.tabNews = response.data.tabInfos });
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
            if (error.message === 'Network Error') {
                error = "Erreur de réseau"
            }
            this.setState(state => {
                return {
                    alert: state.alert = error,
                };
            });
            this.setState(state => {
                return {
                    warning: state.warning = 'alert alert-danger',
                };
            });
            element.setAttribute('style', 'opacity:1');
            fadeOut(element);
        })
    }
    render() {
        const item = [];
        if (this.tabNews != null) {
            for (let i = 0; i < this.tabNews.length; i++) {
                item.push(< News key={this.tabNews[i].id} data={{
                    date: this.tabNews[i].date,
                    institute: this.tabNews[i].institute,
                    description: this.tabNews[i].description,
                    content: this.tabNews[i].content,
                    certificate: this.tabNews[i].certificate,
                }} />)
            }
        }
        return (
            <div>
                <section className="colorlib-blog" data-section="blog">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Lecture</span>
                                <h2 className="colorlib-heading">Blog récent</h2>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div id="alerte4" className={`${this.state.warning}`}><strong>{this.state.alert}</strong></div>
                        </div>
                        <div className="row animate-box" data-animate-effect="fadeInLeft">
                            {item}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
