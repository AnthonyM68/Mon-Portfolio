import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="project col-md-4" style={{ backgroundImage: `url(${this.props.data.backgroundImage})` }}>
                    <div className="desc">
                        <div className="con">
                            <h3><span>{this.props.data.title}</span></h3>
                            <span>{this.props.data.categories}</span>
                            <span>{this.props.data.type}</span>
                            <p className="icon">
                                <span><a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://anthonym.promo-36.codeur.online/${this.props.data.title}`}><i className="icon-share3" /></a></span>
                                <span>
                                    <a href={`https://anthonym.promo-36.codeur.online/${this.props.data.title}`}>
                                    <i className="icon-eye" />
                                    </a></span>
                                <span>
                                    <a onClick={(e) => this.props.data.handleClick(e)}>
                                        <i id={this.props.data.project} className="icon-heart" />{this.props.data.likes}
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}