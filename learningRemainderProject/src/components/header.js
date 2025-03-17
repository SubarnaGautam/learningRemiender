import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Learning Reminder</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#day1">Day 1</a></li>
                    <li><a href="#day2">Day 2</a></li>
                    <li><a href="#day3">Day 3</a></li>
                    <li><a href="#day6">Day 6</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;