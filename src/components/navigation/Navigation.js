import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <ul className="Navigation">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/clock">Clock</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/jeopardy">Jeopardy</Link>
            </li>
        </ul>
    )//end return JSX
}//end Navigation

export default Navigation;