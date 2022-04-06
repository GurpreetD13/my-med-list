import './Nav.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logos/heart-pulse.svg'


const Nav = () => {

    return (
        <nav className='nav'>
            <NavLink to='/' className='nav__logo'>
                <img src={logo} alt='logo for My Med List' />
                <p> My Med List</p>
            </NavLink>
        </nav>
    );
};

export default Nav; 