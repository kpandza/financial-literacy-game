import React from 'react';
import PropTypes from 'prop-types';
import { MoneyButtonPanel } from './MoneyButtonPanel';
import { PiggyBankPanel } from './PiggyBankPanel';
import './interest.css';

export class InterestGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMoneyIndex: 0,
            isHammerEnabled: false,
        };

        this.setSelectedMoneyIndex = this.setSelectedMoneyIndex.bind(this);
        this.setHammerStatus = this.setHammerStatus.bind(this);
    }

    render() {
        return (
            <div className="interest-div">
                <header className="interest-header">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
                    Available Funds: {(this.props.availableFunds).toFixed(2)}
                </header>

                <MoneyButtonPanel
                    availableFunds={this.props.availableFunds}
                    selectedMoneyIndex={this.state.selectedMoneyIndex}
                    setSelectedMoneyIndex={this.setSelectedMoneyIndex}
                    isHammerEnabled={this.state.isHammerEnabled}
                    setHammerStatus={this.setHammerStatus}
                />

                <PiggyBankPanel
                    piggyBanks={this.props.piggyBanks}
                    updatePiggyBank={this.props.updatePiggyBank}
                    selectedMoneyIndex={this.state.selectedMoneyIndex}
                    availableFunds={this.props.availableFunds}
                    setAvailableFunds={this.props.setAvailableFunds}
                    isHammerEnabled={this.state.isHammerEnabled}
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
    availableFunds: PropTypes.number.isRequired,
    setAvailableFunds: PropTypes.func.isRequired,
    piggyBanks: PropTypes.object.isRequired,
    updatePiggyBank: PropTypes.func.isRequired,
}

