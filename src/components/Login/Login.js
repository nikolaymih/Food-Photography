import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as services from '../services/services';

import InputError from '../shared/InputError';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            refreshState: false,
            history: this.props.history,
            errorMessage: ''
        }
    }

    componentDidMount() {
        let user = localStorage.getItem('user')

        if(user) {
            this.props.history.push('/')
        }
    }

    onLoginSubmit(e) {
        e.preventDefault()

        let { email, password } = e.target
        
        if (password.value.length < 6) {
            this.setState({ errorMessage: 'Password is shorter that 6 symbols' })
            password = ''
            return
        }

        services.login(email.value, password.value)
            .then((res) => res.json())
            .then((data) => {

                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.username);
                localStorage.setItem('id', data._id);

                email.value = '';
                password.value = '';

                this.setState({ refreshState: true })
                
                this.props.history.push('/');

            })
            .catch((err) => {
                this.setState({ errorMessage: 'Wrong username or password' })
                email.value = '';
                password.value = '';
                return
            })

    }

    render() {
        return (
            <section className="authLoginWrapper">
                <div className="authLoginLeftAlignment"></div>
                <div className="authLoginForm">
                    <div className="formsMenu">
                        <section className="createPicture">
                            <form onSubmit={this.onLoginSubmit.bind(this)}>
                                <fieldset className="orderFieldsetByColumn">
                                    <legend>photogram</legend>
                                    <p className="formHeaderCreateImage">
                                        <h1>Please type your credentials</h1>
                                    </p>
                                    <InputError>{this.state.errorMessage}</InputError>
                                    <p className="fieldCreatePet">
                                        <label htmlFor="email"><h4>Email</h4></label>
                                        <span className="inputChangePassword">
                                            <input type="email" name="email" id="email" placeholder="Type your email" />
                                            <span className="actions"></span>
                                        </span>
                                    </p>
                                    <p className="fieldCreatePet">
                                        <label htmlFor="password"><h4>Password</h4></label>
                                        <span className="inputChangePassword">
                                            <input type="password" name="password" id="password" placeholder="Type your password" />
                                            <span className="actions"></span>
                                        </span>
                                    </p>

                                    <hr />
                                    <span className="createImgButton">
                                        <input className="button submit" type="submit" value="Login" />
                                    </span>
                                </fieldset>
                            </form>
                        </section>
                    </div>
                </div>
                <div className="authLoginRightAlignment"></div>
            </section>
        )
    }
}

export default withRouter(Login);