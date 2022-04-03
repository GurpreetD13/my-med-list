import './Nav.scss';
import { NavLink } from 'react-router-dom';


const Nav = () => {

    return (
        <nav className='nav'>
            <NavLink to='/'>

                
                <p className='nav__logo'>My Med List</p>
            </NavLink>



        </nav>
    );
};

export default Nav; 