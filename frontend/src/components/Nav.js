import React from 'react';
import Discover from '../pages/discover'
import Donate from '../pages/donate'
import "../styles/nav.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

class Nav extends React.Component {
    render () {
        return (
            <Router>
                <div className='nav-container'>
                    <ul className='nav-list'>
                        <li className='nav-list-item'>
                            <Link to="/">Discover</Link>
                        </li>
                        <li className='nav-list-item'>
                            <Link to="/donate">Donate</Link>
                        </li>
                    </ul>
                </div>   

                <Routes>
                    <Route path="/" element={<Discover />}></Route>
                    <Route path="/donate" element={<Donate />}></Route>
                </Routes> 
            </Router>
        )
    }
}

export default Nav;