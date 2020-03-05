import React, { Component } from 'react'
import axios from 'axios'
import News from './news'

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
        axios({
            method: "POST",
            url: "https://anthonym.promo-36.codeur.online/MonPortfolio/like.php",
            //url: "http://localhost/MonPortfolio/public/php/news.php",
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
            }
        }).catch(error => {
            ;
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
				<div className="row animate-box" data-animate-effect="fadeInLeft">
					{item}
				</div>
			</div>
		</section>
      </div>
    )
  }
}
