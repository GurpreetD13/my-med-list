import './Login.scss';
import { Link } from 'react-router-dom';


const Login = (routerProps) => {




    return (

        <div className='login'>

            <h1>Login</h1>

            <form >

                <label className='form-detail_label' htmlFor='userName'>User name: </label>
                <input className='form-detail_input' name='userName' type="text" placeholder='' />

                <label className='form-detail_label' htmlFor='password'>Password: </label>
                <input className='form-detail_input' name='password' type="password" placeholder='' />

                <button type="submit">Log In</button>
            </form>

            <Link to='/signup'>Sign Up</Link>

        </div>
    );
};

export default Login; 