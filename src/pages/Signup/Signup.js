import './Signup.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiBaseUrl from '../../config/config';


const Signup = (routerProps) => {

    const handleSignup = (e) => {
        e.preventDefault();
        // send a POST request with new user data from signup form to API signup endpoint which will create a new user
        const newUser = {
            name: e.target.name.value,
            user_name: e.target.username.value,
            password: e.target.password.value
        }
        axios.post(`${apiBaseUrl}/users/signup`, newUser)
            .then(res => {
                // Redirect to Login page ('/login') after signed up, using history routerProps being passed down
                routerProps.history.push('/login');
            })
            .catch(err => console.log(err));
    };

    return (

        <div className='signup'>

            <h2 className='signup__title'>Signup</h2>

            <form onSubmit={handleSignup}>

                <label className='form-detail_label' htmlFor='name'>Name: </label>
                <input className='form-detail_input' name='name' type="text" placeholder='' />

                <label className='form-detail_label' htmlFor='username'>Username: </label>
                <input className='form-detail_input' name='username' type="text" placeholder='' />

                <label className='form-detail_label' htmlFor='password'>Password: </label>
                <input className='form-detail_input' name='password' type="password" placeholder='' />

                <button type="submit">Signup</button>
            </form>

            <Link to='/login' className='signup__login-link'>or Login</Link>

        </div>
    );
};

export default Signup; 