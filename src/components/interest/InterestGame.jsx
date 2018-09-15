import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'; 
import './interest.css';

export class InterestGame extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className="interest">
                <header className="interest-header">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
                Available Funds: {this.props.availableFunds}
                </header>
                <p className="interest-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            <Button> PLS CLICK </Button>
            </div>
        );
    }
}

InterestGame.propTypes = {
    availableFunds: PropTypes.number.isRequired,
    setAvailableFunds: PropTypes.func.isRequired,
}