import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Schedule from '../schedule';
import Navbar from '../navbar';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { AerodataboxService, RandomService } from '../../services';
import { formatFlights } from '../../utils';

import './app.css';

export default class App extends Component {
    //service = new AerodataboxService('UUEE', key);
    service = new RandomService();

    state = {
        flights: {},
        loading: true,
        error: false,
        numberToSearch: '',
        delayedOnly: false,
    };

    componentDidMount() {
        this.service.getFlights()
            .then(flights => {
                    const { arrivals, departures } = flights;

                    this.setState({
                        flights: {
                            arrivals: formatFlights(arrivals),
                            departures: formatFlights(departures)
                        },
                        loading: false,
                    });
                })
            .catch((err) => {
                console.log(err);
                this.setState({ error: true })
            });
    }

    setNumberToSearch = (e) => {
        this.setState({
            numberToSearch: e.target.value
        });
    };

    toggleDelayedOnly = () => {
        this.setState(({ delayedOnly }) => {
            return {
                delayedOnly: !delayedOnly,
            };
        });
    };

    filterFlights = flights => flights.filter(flight => {
        const { numberToSearch, delayedOnly } = this.state
        return (
            flight.number.includes(numberToSearch) &&
            (!delayedOnly || flight.status === 'Delayed')
        );
    });

    render() {

        const { flights: { arrivals, departures }, loading, error } = this.state;

        if (error) return <ErrorIndicator />;

        return (
            <>
                <div className="jumbotron bg-info app-header">
                    <h1 className="text-white">
                        Sheremetyevo schedule
                    </h1>
                    <h2 className="text-white">
                        All flights in the next 2 hours
                    </h2>
                </div>
                <Navbar
                    onSearchChanged={this.setNumberToSearch}
                    onToggleCheckbox={this.toggleDelayedOnly} />
                {
                    loading ?
                    <div className="container text-center">
                        <Spinner />
                    </div>
                    :
                    <>
                        <Route path="/arrivals">
                            <Schedule flights={this.filterFlights(arrivals)}/>
                        </Route>
                        <Route path="/departures">
                            <Schedule flights={this.filterFlights(departures)} />
                        </Route>
                    </>
                } 
            </>
        );
    }
};
