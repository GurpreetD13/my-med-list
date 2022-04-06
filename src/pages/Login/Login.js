import './Login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiBaseUrl from '../../config/config';


const Login = (routerProps) => {

    const handleLogin = (e) => {
        e.preventDefault();
        // send a POST request with login credentials from login form to API login endpoint to get a JWT token back and store it in session storage
        const loginCredentials = {
            user_name: e.target.username.value,
            password: e.target.password.value
        }
        axios.post(`${apiBaseUrl}/users/login`, loginCredentials)
            .then(res => {
                const token = res.data.token;
                sessionStorage.setItem('authToken', token);
                // Redirect to Home page ('/') after logged in, using history routerProps being passed down
                routerProps.history.push('/');
            })
            .catch(err => console.log(err));
    };

    return (

        <div className='login'>

            <h2 className='login__title'>Login</h2>

            <form onSubmit={handleLogin}>

                <label className='form-detail_label' htmlFor='username'>Username: </label>
                <input className='form-detail_input' name='username' type="text" placeholder='' />

                <label className='form-detail_label' htmlFor='password'>Password: </label>
                <input className='form-detail_input' name='password' type="password" placeholder='' />

                <button type="submit">Login</button>
            </form>

            <Link to='/signup' className='login__signup-link'>or Signup</Link>

        </div>
    );
};

export default Login; 