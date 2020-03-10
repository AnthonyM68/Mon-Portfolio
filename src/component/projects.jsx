import React, { Component } from 'react'
import axios from 'axios'

function fadeOut(el) {
    var tick = function () {
        el.style.opacity = +el.style.opacity - 0.02;
        if (+el.style.opacity > 0) {
            setTimeout(tick, 80)
        }
    };
    tick();
}
function Project(props) {
	return <div className="col-md-4">
		<div className="project col-md-4" style={{ backgroundImage: `url(${props.data.backgroundImage})` }}>
			<div className="desc">
				<div className="con">
					<h3>{props.data.title}</h3>
					<span className="subtitle">{props.data.categories}</span>
					<span className="subtitle">{props.data.type}</span>
					<p className="icon">
						<span><a className="picto-item" aria-label="Partagez sur vos réseaux sociaux" href={`https://www.linkedin.com/sharing/share-offsite/?url=https://anthonym.promo-36.codeur.online/${props.data.title}`} target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
						<span><a className="picto-item" aria-label="Découvrez le projet de développement" href={`https://anthonym.promo-36.codeur.online/${props.data.title}`} target="_blank" rel="noopener noreferrer"><i className="icon-eye" /></a></span>
						<span><a className="picto-item" aria-label="Likez pour encourager" onClick={(e) => props.data.handleClick(e)}><i id={props.data.project} className="icon-heart" />{props.data.likes}</a></span>
					</p>
				</div>
			</div>
		</div>
	</div>
}
export default class Projects extends Component {
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
		//console.log(this.state)
		axios({
			method: "POST",
			//url: "https://anthonym.promo-36.codeur.online/MonPortfolio/php/project.php",
			url: "http://localhost/MonPortfolio/public/php/project.php",
			data: this.state,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			let element = document.getElementById('alerte4');
			if (response.data.status == 'success') {
				this.setState(state => {
					return {
						tabBdd: this.tabBdd = response.data.tabInfos,
					};
				});
			} else if (response.data.status === 'fail') {
				//console.log(response.data);
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
				item.push(< Project key={this.tabBdd[i].id} data={{
					handleClick: this.handleClick.bind(this),
					project: this.tabBdd[i].project,
					likes: this.tabBdd[i].likes,
					backgroundImage: this.tabBdd[i].img,
					title: this.tabBdd[i].title,
					type: this.tabBdd[i].type,
					categories: this.tabBdd[i].categories,
				}} />)
			}
		}
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Projets</span>
								<h2 className="colorlib-heading animate-box">Projets Récents</h2>
							</div>
						</div>
						<div className="col-md-12 text-center">
                            <div id="alerte6" className={`${this.state.warning}`}><strong>{this.state.alert}</strong></div>
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
