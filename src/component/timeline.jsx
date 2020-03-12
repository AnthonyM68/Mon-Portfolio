import React, { Component } from 'react'
import axios from 'axios'

function Articles(props) {
  return <div>
    <article className="timeline-entry">
      <div className="timeline-entry-inner">
        <div className={`timeline-icon color-${props.data.id}`}>
          <i className="icon-pen2" />
        </div>
        <div className="timeline-label">
          <h2>{props.data.title} <span>{props.data.date}</span></h2>
          <span>{props.data.content}</span>
          <p></p>
        </div>
      </div>
    </article>
  </div>
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
export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
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
    let element = document.getElementById('alerte2');
    this.setState(state => {
      return {
        count: state.count = 1,
      };
    });
    if (e.target.id === undefined) {
      this.setState(state => {
        return {
          id: state.id = 'search',
        };
      });
    } else {
      this.setState({ id: this.state.id = e.target.id });
    }
    axios({
      method: "POST",
      url: "https://anthonym.promo-36.codeur.online/MonPortfolio/php/timeline.php",
      //url: "http://localhost/MonPortfolio/public/php/timeline.php",
      data: this.state,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.data.status == 'success') {
        this.setState(state => {
          return {
            tabBdd: this.tabBdd = response.data.tabInfos,
          };
        });
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
    if (this.tabBdd != null) {
      for (let i = 0; i < this.tabBdd.length; i++) {
        item.push(< Articles key={this.tabBdd[i].id} data={{
          id: this.tabBdd[i].id,
          title: this.tabBdd[i].title,
          date: this.tabBdd[i].date,
          content: this.tabBdd[i].content,
        }} />)
      }
    }
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Parcours</span>
                <h2 className="colorlib-heading animate-box">Chronologie</h2>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div id="alerte2" className={`${this.state.warning}`}><strong>{this.state.alert}</strong></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered animate-box" data-animate-effect="fadeInLeft">
                  {item}
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
