import React, { Component } from 'react'
import axios from 'axios'

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {

			count: 0

		}
	}

	handleClick = (e) => {
		this.setState({ count: this.state.count + 1 })
		console.log(this.state);
		console.log(e.target.id);
		

	


		//e.preventDefault();

		axios({
			method: "POST",
			url: "http://localhost/MonPortfolio/like.php",
			data: this.state,
			headers: {
				'Content-Type': 'application/json'

			}
		}).then((response) => {
			if (response.data.status === 'success') {
				console.log(response.data);
			} else if (response.data.status === 'fail') {

			}
		}).catch(error => {

		})
	}
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Projets</span>
								<h2 className="colorlib-heading animate-box">Projets Récent</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/Bomberman.PNG)' }}>

									<div className="desc">
										<div className="con">
											<h3><span>Bomberman</span></h3>
											<span>Jeu application</span>
											<span>JavaScript</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://anthonym.promo-36.codeur.online/Bomberman%20v2/" target="_blank"><i className="icon-share3" /></a></span>
												<span><a href="https://anthonym.promo-36.codeur.online/Bomberman%20v2/" target="_blank"><i className="icon-eye" /></a></span>
												<span><a  onClick={this.handleClick}><i id="bomberman" className="icon-heart" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/Yes_Transfert.PNG)' }}>
									<div className="desc">
										<div className="con">
											<h3><span>Yes_Transfert</span></h3>
											<span>Application Zip et envois par Email</span>
											<span>PHP MVC</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://anthonym.promo-36.codeur.online/Yes_Transfert/" target="_blank"><i className="icon-share3" /></a></span>
												<span><a href="https://anthonym.promo-36.codeur.online/Yes_Transfert/" target="_blank"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/Allo_jati.PNG)' }}>
									<div className="desc">
										<div className="con">
											<h3><span>Environnement MVC, PHP, TWIG, COMPOSER</span></h3>
											<span>Gestionnaire de film</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://anthonym.promo-36.codeur.online/Allo_jati/" target="_blank"><i className="icon-share3" /></a></span>
												<span><a href="https://anthonym.promo-36.codeur.online/Allo_jati/" target="_blank"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/IntegrationACS.PNG)' }}>
									<div className="desc">
										<div className="con">
											<h3><span>Integration Bootstrap</span></h3>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://anthonym.promo-36.codeur.online/IntegrationACS/" target="_blank"><i className="icon-share3" /></a></span>
												<span><a href="https://anthonym.promo-36.codeur.online/IntegrationACS/" target="_blank"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/IntegrationBlueasy.PNG)' }}>
									<div className="desc">
										<div className="con">
											<h3><span>Integration Bootstrap</span></h3>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://anthonym.promo-36.codeur.online/IntegrationBlueasy/" target="_blank"><i className="icon-share3" /></a></span>
												<span><a href="https://anthonym.promo-36.codeur.online/IntegrationBlueasy/" target="_blank"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/AgeConverter.PNG)' }}>
									<div className="desc">
										<div className="con">
											<h3><span>Convertisseur d'âge</span></h3>
											<span>Un défi Js en 1 heure</span>
											<p className="icon">
												<span><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://anthonym.promo-36.codeur.online/AgeConverter" target="_blank"><i className="icon-share3" /></a></span>
												<span><a href="https://anthonym.promo-36.codeur.online/AgeConverter" target="_blank"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /></a></span>
											</p>
										</div>
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
/* <img src= {process.env.PUBLIC_URL + '/images/Bomberman.PNG'} className="project"></img> */