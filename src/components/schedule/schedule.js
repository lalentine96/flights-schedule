import React from 'react';

import './schedule.css';

const Flight = ({ 
    scheduledTime, 
    actualTime, 
    city, 
    airline, 
    number, 
    terminal, 
    status }) => {
    return (
        <tr>
            <td >{scheduledTime.slice(11, 16)}</td>
            <td >{actualTime.slice(11, 16)}</td>
            <td >{city}</td>
            <td >{airline}</td>
            <td >{number}</td>
            <td >{terminal}</td>
            <td >{status.replace(/([a-z])([A-Z])/g, '$1 $2')}</td>
        </tr>
    );
};

const Schedule = ({ flights }) => {
    return (
        <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th>Scheduled time</th>
                    <th>Actual time</th>
                    <th>City</th>
                    <th>Airline</th>
                    <th>Flight number</th>
                    <th>Terminal</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    flights.map(flight => <Flight {...flight} key={flight.number} />)
                }
            </tbody>
        </table>
    );
};

export default Schedule;
