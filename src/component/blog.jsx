import React, { Component } from 'react'
import axios from 'axios'

function News(props){
    return <div className="col-md-4 col-sm-6">
            <div className="desc">
                <span className="heading-blog"><small>{props.data.date} </small> | <small> {props.data.institute} </small> | <small> <i className="icon-bubble3" /></small></span>
                <h3><a href="blog.html">{props.data.description}</a></h3>
                <p className="heading-blog" >{props.data.content}</p>
            </div>
        </div>
    
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
                <div className="col-md-12 text-center">
							<div id="alerte4" className="alert alert-warning"><strong>alert</strong></div>
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
