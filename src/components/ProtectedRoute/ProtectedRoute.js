/* eslint-disable no-useless-constructor */
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

// import { isAuthenticated } from '../utils/isAuth';
import * as utils from '../utils/isLoggedIn';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuth: true
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token');

        if (token) {
            utils.isLoggedIn(token)
                .then(res => {
                    this.setState({ isAuth: res })
                    console.log(res);
                })
        }
    }

    render() {

        return (
            <Route path={this.props.path} render={data => this.state.isAuth ? (
                <this.props.component {...data}></this.props.component>) :
                (<Redirect to={{ pathname: '/auth/login' }}></Redirect>)}></Route>
        )
    }
}

export default ProtectedRoute;