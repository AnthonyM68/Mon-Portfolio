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

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
            inputFirstName: '',
            inputLastName: '',
            inputAddress: '',
            inputCity: '',
            inputZip: '',
            inputPhone: '',
            message: '',
            alert: '',
            warning: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let element = document.getElementById('alert');

        axios({
            method: "POST",
            //url: "https://anthonym.promo-36.codeur.online/MonPortfolio/mail.php",
            url: "http://localhost/MonPortfolio/public/php/mail.php",
            //url: "http://localhost/portfolio_local/mail.php",
            data: this.state,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                let styleResponse = [];

                this.setState({ alert: this.state.alert = 'Merci d\'avoir pris contact' });
                this.setState({ warning: this.state.warning = 'alert alert-success' });
                element.setAttribute('style', 'opacity:1');
                fadeOut(element);

                response.data.message.forEach(element =>
                    styleResponse.push(document.getElementById(element))
                );
                for (let i = 0; i < response.data.message.length; i++) {
                    styleResponse[i].value = "";
                    styleResponse[i].setAttribute('style', '');
                }
            } else if (response.data.status === 'fail') {
                if (response.data.message === 'bdd') {
                    this.setState({ alert: this.state.alert = 'une erreur inattendue s\'est produite avec la base de données' });
                    this.setState({ warning: this.state.warning = 'alert alert-danger' });
                    element.setAttribute('style', 'opacity:1');
                    fadeOut(element);
                } else if (response.data.message === 'senderror'){
                    this.setState({ alert: this.state.alert = 'une erreur inattendue s\'est produite lors de l\'envois de votre Email' });
                    this.setState({ warning: this.state.warning = 'alert alert-danger' });
                    element.setAttribute('style', 'opacity:1');
                    fadeOut(element);
                }
                let styleResponse = [];
                response.data.error.forEach(element =>
                    styleResponse.push(document.getElementById(element))
                );
                for (let i = 0; i < response.data.error.length; i++) {
                    styleResponse[i].value = "Champ vide";
                    styleResponse[i].setAttribute('style', 'background-color: #f2dede;color: #a94442;');
                    styleResponse[i].addEventListener('click', function () {
                        styleResponse[i].value = '';
                        styleResponse[i].setAttribute('style', '');
                    })
                }
            }
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Contact</span>
                                <h2 className="colorlib-heading animate-box">Formulaire de contact</h2>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div id="alert" className={`${this.state.warning}`}><strong>{this.state.alert}</strong></div>
                        </div>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-row">

                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email"
                                        className="form-control"
                                        id="inputEmail" placeholder="Email"
                                        value={this.state.inputEmail}
                                        onChange={e => this.setState({ inputEmail: e.target.value })} />
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Nom</label>
                                    <input type="text" className="form-control" id="inputFirstName" placeholder="Nom"
                                        value={this.state.inputFirstName}
                                        onChange={e => this.setState({ inputFirstName: e.target.value })} />
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Prénom</label>
                                    <input type="text" className="form-control" id="inputLastName" placeholder="Prénom"
                                        value={this.state.inputLastName}
                                        onChange={e => this.setState({ inputLastName: e.target.value })} />
                                </div>

                            </div>
                            <div className="form-group col-md-12">
                                <label>Addresse</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Adresse"
                                    value={this.state.inputAddress}
                                    onChange={e => this.setState({ inputAddress: e.target.value })} />
                            </div>
                            <div className="form-row">

                                <div className="form-group col-md-6">
                                    <label>Ville</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Ville"
                                        value={this.state.inputCity}
                                        onChange={e => this.setState({ inputCity: e.target.value })} />
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Code Postal</label>
                                    <input type="text" className="form-control" id="inputZip" placeholder="Code Postal"
                                        value={this.state.inputZip}
                                        onChange={e => this.setState({ inputZip: e.target.value })} />
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Téléphone</label>
                                    <input type="text" className="form-control" id="inputPhone" placeholder="Tel"
                                        value={this.state.inputPhone}
                                        onChange={e => this.setState({ inputPhone: e.target.value })} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>Message</label>
                                    <textarea className="form-control" id="message" name="message" placeholder="Votre message ici..."
                                        onChange={e => this.setState({ message: e.target.value })}
                                        value={this.state.message}>
                                    </textarea>
                                </div>
                            </div>
                            <div className="form-group col-md-12 text-center">
                                <button type="submit" className="btn btn-secondary">Soumettre</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>


        )
    }
}
