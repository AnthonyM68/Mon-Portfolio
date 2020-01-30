import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
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
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
						<div className="desc">
							<span><small>28 Décembre 2019 </small> | <small> Mooc ANSSI </small> | <small> <i className="icon-bubble3" /></small></span>
							<h3><a href="blog.html">Initiation à la cybersécurité</a></h3>
							<p>Approfondissement de mes connaissances sur les risques liés au cyberespace et les bonnes pratique a mettre en oeuvre pour utiliser mes outils</p>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
						<div className="desc">
							<span><small>Mai 2018</small> | <small>Ecole Fédéral Polytechnique de Lausane </small> | <small> <i className="icon-bubble3" /></small></span>
							<h3><a href="blog.html">Initiation au C++</a></h3>
							<p>Cours en ligne. Apprentissage du C++. Obtention du Certificat de</p>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
