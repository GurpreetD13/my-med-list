import './MedList.scss';
import React from 'react';
import axios from 'axios';
import apiBaseUrl from '../../config/config';


class MedList extends React.Component {
    // 1. set initial state
    state = {
        isLoading: true,
        userInfo: {},
    }

    componentDidMount() {
        // 2. get authToken from session storage
        let token = sessionStorage.getItem('authToken');
        // if does not exist, send to login page
        if (!token) {
            this.props.history.push('/login')
        } else {



            this.setState({ isLoading: false })
            // use it to get userInfor/medList
            // axios.get(`${apiBaseUrl}`)
            // unfinished here!!!
        }
    }

    render() {
        const { isLoading, userInfo } = this.state;

        return (isLoading ? <h1>Loading</h1> :

            <h1>Welcome {userInfo.name}</h1>
            // pass userInfo id as prop here
        );
    }
};

export default MedList; 