import { useState, useEffect} from 'react';
import * as services from '../services/services';

import InputError from '../shared/InputError';

import './Register.css';

const Register = ({
    history
}) => {

    let { name, setName } = useState('');
    let [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        let user = localStorage.getItem('user')

        if(user) {
            history.push('/')
        }
    })

    const onClickRegisterForm = (e) => {
        e.preventDefault();

        let { email, username, password, rePassword } = e.target;

        password = Number(password.value);
        rePassword = Number(rePassword.value);

        if (password != rePassword) {
            setErrorMessage('Passwords don\'t match')
            password = ''
            rePassword = ''
            return
        }
        
        if (password.toString().length < 6) {
            setErrorMessage('Password is shorter that 6 symbols')
            password = ''
            rePassword = ''
            return
        }
        console.log(username.value.length)
        if (username.value.length < 6) {
            setErrorMessage('Username is shorter that 6 symbols')
            return 
        }

        services.create(email.value, username.value, password)
            .then((res) => {
                if (res.ok != true) {
                    throw ('The user or email is already registered')
                }

                history.push('/auth/login');
            })
            .catch((err) => {
                setErrorMessage(err)
            })
    }

    return (
        <section className="authRegisterWrapper">
            <div className="authRegisterLeftAlignment"></div>
            <div className="authRegisterForm">
                <div className="formsMenu">
                    <section className="createPicture">
                        <form onSubmit={onClickRegisterForm}>
                            <fieldset className="orderFieldsetByColumn">
                                <legend>photogram</legend>
                                <p className="formHeaderCreateImage">
                                    <h2>Please register your new account</h2>
                                </p>
                                <InputError>{errorMessage}</InputError>
                                <p className="fieldCreatePet">
                                    <label htmlFor="email">Email</label>
                                    <span className="inputChangePassword">
                                        <input type="email" name="email" id="email" placeholder="Type your email" />
                                        <span className="actions"></span>
                                    </span>
                                </p>

                                <p className="fieldCreatePet">
                                    <label htmlFor="username">Username</label>
                                    <span className="inputChangePassword">
                                        <input type="text" name="username" id="username" placeholder="Type your username" />
                                        <span className="actions"></span>
                                    </span>
                                </p>

                                <p className="fieldCreatePet">
                                    <label htmlFor="password">Password</label>
                                    <span className="inputChangePassword">
                                        <input type="password" name="password" id="password" placeholder="Type your password" />
                                        <span className="actions"></span>
                                    </span>
                                </p>

                                <p className="fieldCreatePet">
                                    <label htmlFor="rePassword">Repeat password</label>
                                    <span className="inputChangePassword">
                                        <input type="password" name="rePassword" id="rePassword" placeholder="Confirm your password" />
                                        <span className="actions"></span>
                                    </span>
                                </p>

                                <hr />
                                <span className="createImgButton">
                                    <input className="button submit" type="submit" value="Register" />
                                </span>
                            </fieldset>
                        </form>
                    </section>
                </div>
            </div>
            <div className="authRegisterRightAlignment"></div>
        </section>
    )
}

export default Register