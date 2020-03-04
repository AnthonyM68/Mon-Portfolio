import React, { Component } from 'react'
import axios from 'axios'
import Project from './proj'


export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			id: null,
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
		this.setState({ count: this.state.count = 1 });
		if (e.target.id === undefined) {
			this.setState({ id: this.state.id = 'search' });
		} else {
			this.setState({ id: this.state.id = e.target.id });
		}
		axios({
			method: "POST",
			//url: "https://anthonym.promo-36.codeur.online/MonPortfolio/like.php",
			url: "http://localhost/MonPortfolio/like.php",
			data: this.state,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			if (response.data.status === 'success') {
				if (response.data.tabInfos) {
					this.setState({ tabBdd: this.tabBdd = response.data.tabInfos });
				}
			} else if (response.data.status === 'fail') {
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
						<div className="row animate-box" data-animate-effect="fadeInLeft">
							{item}
						</div>
					</div>
				</section>
			</div>
		)
	}
}
