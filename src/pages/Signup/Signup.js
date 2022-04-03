import './Signup.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiBaseUrl from '../../config/config';


const Signup = (routerProps) => {

    return (

        <div className='signup'>

            <h1>Signup</h1>

            <form >

                <label className='form-detail_label' htmlFor='name'>Name: </label>
                <input className='form-detail_input' name='name' type="text" placeholder='' />

                <label className='form-detail_label' htmlFor='username'>Username: </label>
                <input className='form-detail_input' name='username' type="text" placeholder='' />

                <label className='form-detail_label' htmlFor='password'>Password: </label>
                <input className='form-detail_input' name='password' type="password" placeholder='' />

                <button type="submit">Signup</button>
            </form>

            <Link to='/signup'>Login</Link>

        </div>
    );
};

export default Signup; 