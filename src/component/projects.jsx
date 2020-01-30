import React, { Component } from 'react'

export default class Projects extends Component {
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
								<div className="project" style={{ backgroundImage: 'url("https://nsm09.casimages.com/img/2020/01/06//20010601310917466016588593.jpg")' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://logic-68consolessystem.fr">Bomberman JS</a></h3>
											<span>Jeu application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /></a></span>
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
