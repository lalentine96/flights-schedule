import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="jumbotron text-center bg-info min-vh-100 text-white">
            <h1 className="error-title">
                Sorry! Something goes wrong
            </h1>
            <h2>
                Please try to reload this page later
            </h2>
        </div>
    );
};

export default ErrorIndicator;