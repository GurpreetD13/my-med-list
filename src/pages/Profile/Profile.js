import './Profile.scss';
import React from 'react';
import axios from 'axios';
import apiBaseUrl from '../../config/config';
import MedList from '../../components/MedList/MedList'
import MedicationForm from '../../components/MedicationForm/MedicationForm';



class Profile extends React.Component {
    // 1. set initial state
    state = {
        isLoading: true,
        userInfo: {},
        userMedList: null
    }

    componentDidMount() {
        // 2. get authToken from session storage
        let token = sessionStorage.getItem('authToken');
        // if does not exist, send to login page
        if (!token) {
            this.props.history.push('/login')
        } else {
            // 3. use token to get userInfo and set it to state
            axios.get(`${apiBaseUrl}/users/current`, { headers: { authorization: `Bearer ${token}` } })
                .then(res => {

                    this.setState({
                        userInfo: res.data,
                        isLoading: false
                    })
                    // use the user id from above userInfo.id to GET the user's med list and set it to state
                    return axios.get(`${apiBaseUrl}/users/${this.state.userInfo.id}/medications`,
                        { headers: { authorization: `Bearer ${token}` } })
                })
                .then(res => {

                    this.setState({ userMedList: res.data })
                })
                .catch(err => console.log(err));
        }
    };


    render() {
        const { isLoading, userInfo, userMedList } = this.state;

        return (isLoading ? <h1>Loading</h1> :

            <>
                <header className='header'>
                    <h1 className="header__title">Welcome {userInfo.name}</h1>
                </header>

                <h2 className='section__title'>Add a medication</h2>
                <MedicationForm routerProps={this.props} />


                <h2 className='section__title'>My Med List</h2>

                {/* Pass user's med list to MedList component as a prop */}
                {userMedList && <MedList userMedList={userMedList} />}
            </>

        );
    }
};

export default Profile; 