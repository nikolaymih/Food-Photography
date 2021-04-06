import { Component } from 'react';

import services from '../services/services';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
    }

    onLoginSubmit(e) {
        e.preventDefault()

        let { email, password } = e.target

        console.log(email.value);
        console.log(password);
    }

    render() {
        return (
            <section className="authLoginWrapper">
                <div className="authLoginLeftAlignment"></div>
                <div className="authLoginForm">
                    <div className="formsMenu">
                        <section className="createPicture">
                            <form onSubmit={this.onLoginSubmit}>
                                <fieldset className="orderFieldsetByColumn">
                                    <legend>lazygram</legend>
                                    <p className="formHeaderCreateImage">
                                        <h1>Please authenticate yourself</h1>
                                    </p>
                                    <p className="fieldCreatePet">
                                        <label htmlFor="email"><h4>Login</h4></label>
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

export default Login;