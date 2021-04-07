/* eslint-disable no-useless-constructor */
import { Component } from 'react';
import { Redirect } from 'react-router-dom'

import * as utils from '../utils/isLoggedIn';

class ProtectedRoute extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Component = this.props.component;

        let token = '';
        utils.isLoggedIn()
            .then(res => token = res)


        return token ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/auth/login' }} />
        );

    }
}

export default ProtectedRoute;