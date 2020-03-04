import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6">
                <div className="desc">
                    <span><small>{this.props.data.date} </small> | <small> {this.props.data.institute} </small> | <small> <i className="icon-bubble3" /></small></span>
                    <h3><a href="blog.html">{this.props.data.description}</a></h3>
                    <p>{this.props.data.content}</p>
                </div>
            </div>
        )
    }
}