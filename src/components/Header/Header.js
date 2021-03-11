import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">                
                    <Link to="/home"><Navbar.Brand>League Hub</Navbar.Brand>                </Link>
            </Navbar>
        </div>
    );
};

export default Header;