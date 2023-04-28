import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut =()=>{
        logOut()
        .then(result =>{})
        .catch(error =>console.error(error));
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div className=''>

                <Link to ="/">shop</Link>
                <Link to ="/inventory">inventory</Link>
                <Link to ="/order">order</Link>
                <Link to ="/login">login</Link >
                <Link to ="/signup">Sign Up</Link >
            
            {
                user && <span className='welcome'>Welcome{user.email}<button onClick={handleLogOut}>Sign Out</button></span>
            }

            </div>
        </nav>
    );
};

export default Header;