import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Header(props) {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href='/' className='navbar-brand'>{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                <i className="fas fa-home mr-2"></i>Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact/add' className='nav-link'>
                            <i className="fas fa-plus mr-2"></i>Add
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-link'>
                            <i className="fas fa-question mr-2"></i>About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>            
        </nav>
    );
}
Header.propTypes = {
    branding: PropTypes.string.isRequired,
}
