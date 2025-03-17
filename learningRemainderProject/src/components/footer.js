import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Learning Reminder. All rights reserved.</p>
                <nav className="footer-nav">
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;