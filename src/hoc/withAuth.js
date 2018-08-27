import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

const withAuth = (WrappedComponent) => {

    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                onLogin: false
            }
        }

        componentWillMount() {
            console.log(localStorage.access_token);
            if (localStorage.access_token !== '' && localStorage.access_token !== undefined) {
                this.setState({
                    onLogin: true
                });
            }
        }

        render() {
            const onLogin = this.state.onLogin;
            return (
                <WrappedComponent {...this.props} onLogin={onLogin} />
            )
        }
    }
}

export default withAuth;