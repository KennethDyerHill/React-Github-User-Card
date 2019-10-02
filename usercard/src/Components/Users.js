import React, { Component } from 'react';
import axios from 'axios';

import { UserCard } from './UserCard';

export default class Users extends Component {
    state = {
        user: undefined
    }
    componentDidMount() {
        axios
        .get('https://api.github.com/users/KennethDyerHill')
        .then(res => this.setState({user: res.data}))

        console.log('This component did mount.');
    }
    componentDidUpdate() {

    console.log('This component did Update.')
    console.log(this.state.user)
}

    render() {
        return (
            <div className={'user_container'}>
                <h1>Random stuff here</h1>
                <UserCard user={this.state.user && {...this.state.user}} />
            </div>
        )
    }
}