import React from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';
import { MoneyButtonPanel } from './MoneyButtonPanel';
import { PiggyBankPanel } from './PiggyBankPanel';
import './interest.css';
import { Link } from 'react-router-dom';

export class InterestGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMoneyIndex: 0,
            isHammerEnabled: false,
        };

        this.setSelectedMoneyIndex = this.setSelectedMoneyIndex.bind(this);
        this.setHammerStatus = this.setHammerStatus.bind(this);
        this.handleFastForward = this.handleFastForward.bind(this);
    }

    handleFastForward() {
        const updatedTime = this.props.time + 1;
        this.props.setTime(updatedTime); // Increment Time

        let updatedData = this.props.piggyBanks;

        Object.keys(updatedData).forEach(piggyId => { // Handle Interest
            updatedData[piggyId].isDead = false;
            if (updatedTime % updatedData[piggyId].period === 0) {
                updatedData[piggyId].moneySaved = updatedData[piggyId].moneySaved*(1+updatedData[piggyId].interestRate);
            }
        });

        this.props.updatePiggyBank(updatedData); 

        this.props.setAvailableFunds(this.props.startingFunds);
    }

    render() {
        return (
            <div className="interest-div">
                <header className="interest-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
                    Available Funds: {(this.props.availableFunds).toFixed(2)}
                </header>

                <Button
                    className="time-button"
                    onClick={this.handleFastForward}
                >
                    <Glyphicon glyph="forward" />
                </Button>

                <Link to="/dashboard"><span className="time-label">Day: {this.props.time + 1}</span></Link>

                <PiggyBankPanel
                    piggyBanks={this.props.piggyBanks}
                    updatePiggyBank={this.props.updatePiggyBank}
                    selectedMoneyIndex={this.state.selectedMoneyIndex}
                    availableFunds={this.props.availableFunds}
                    setAvailableFunds={this.props.setAvailableFunds}
                    isHammerEnabled={this.state.isHammerEnabled}
                />

                <MoneyButtonPanel
                    availableFunds={this.props.availableFunds}
                    selectedMoneyIndex={this.state.selectedMoneyIndex}
                    setSelectedMoneyIndex={this.setSelectedMoneyIndex}
                    isHammerEnabled={this.state.isHammerEnabled}
                    setHammerStatus={this.setHammerStatus}
                />

            </div>
        );
    }

    setSelectedMoneyIndex(interval) {
        this.setState({ selectedMoneyIndex: interval });
    }

    setHammerStatus(isHammerEnabled) {
        this.setState({ isHammerEnabled: isHammerEnabled });
    }
}

InterestGame.propTypes = {
    startingFunds: PropTypes.number.isRequired,
    availableFunds: PropTypes.number.isRequired,
    setAvailableFunds: PropTypes.func.isRequired,
    piggyBanks: PropTypes.object.isRequired,
    updatePiggyBank: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired,
    maximumWithdrawalAmount: PropTypes.number.isRequired,
}

