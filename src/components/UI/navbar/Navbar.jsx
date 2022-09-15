import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../Button/MyBytton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <MyButton style={{color: '#E94560'}}onClick={logout}>
                Выйти
            </MyButton>
            <div className='navbar__links'>
                <Link style={{margin: 5}} to='/about'>О сайте</Link>
                <Link style={{margin: 5}} to='/posts'>Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;