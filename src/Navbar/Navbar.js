import React from "react";
import './Navbar.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = () => {

    const history = useHistory();

    const handleLogout = () => {
        history.push('/login');
    }
    const handleHome = () => {
        history.push('/');
    }
    const handleCategory = () => {
        history.push('/category');
    }
    const handleContact = () => {
        history.push('/contact');
    }
    return (
        <div className="nav-bar">
            <div className="logo-tab">
                QuizHub
            </div>
            <div onClick={handleHome} className="nav-tab1">
                Home
            </div>
            <div onClick={handleCategory} className="nav-tab2">
                Categories
            </div>
            <div onClick={handleContact} className="nav-tab3">
                Contact Us
            </div>
            <div onClick={handleLogout} className="logout-button">
                Logout
            </div>
        </div>
    );
}

export default Navbar