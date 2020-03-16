import React from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = ({ onSearchChanged, onToggleCheckbox }) => {
    return (
        <div className="navbar navbar-expand-sm bg-info navbar-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/arrivals">
                        Arrivals
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/departures">
                        Departures
                    </NavLink>
                </li>
            </ul>
            <form className="form-inline">
                <label
                    className="form-check-label text-white mr-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={onToggleCheckbox} />
                        Show delayed only
                    </label>
                <input 
                    className="form-control nav-input"
                    type="text"
                    placeholder="Search by flight number" 
                    onChange={onSearchChanged} />
            </form>
        </div>
    );
};

export default Navbar;