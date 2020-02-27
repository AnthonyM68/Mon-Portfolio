import React, { Component } from 'react'
import axios from 'axios'


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
            message: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();

        axios({
            method: "POST",
            //url: "https://anthonym.promo-36.codeur.online/MonPortfolio/mail.php",
            url: "http://localhost/MonPortfolio/mail.php",
            //url: "http://logic-68consolessystem.fr/mail.php",
            data: this.state,
            headers: {
                'Content-Type': 'application/json'
                
            }
        }).then((response) => {
            console.log(response.data);
            
            if (response.data.status === 'success') {

                this.resetForm()
            } else if (response.data.status === 'fail') {

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
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="Email"
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
                                    <textarea className="form-group col-md-12" id="message" name="message" placeholder="Votre message ici..."
                                        onChange={e => this.setState({ message: e.target.value })}
                                        value={this.state.message}>
                                    </textarea>
                                </div>
                            </div>
                            <div className="form-group col-md-12 text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div>
                                {this.state.mailSent &&
                                    <div>Merci d'avoir contacter Anthony</div>
                                }
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}

