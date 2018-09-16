import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { getMoneyIndexValue } from './MoneyButtonPanel';
import { PARENT_CHEQUING_ID, CHILD_CHEQUING_ID } from '../../App.jsx';
import { transferFunds } from '../../financialinformation';
import './interest.css';

export class PiggyBankPanel extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(piggyId) {
        let updatedData = this.props.piggyBanks;
        if (this.props.isHammerEnabled) { // WITHDRAWAL
            updatedData[piggyId].isDead = true;
            transferFunds(PARENT_CHEQUING_ID, CHILD_CHEQUING_ID, updatedData[piggyId].moneySaved);

            updatedData[piggyId].moneySaved = 0;
        }
        else { // DEPOSIT
            const transactionAmount = getMoneyIndexValue(this.props.selectedMoneyIndex);

            updatedData[piggyId].moneySaved += transactionAmount; // Add Money
            this.props.setAvailableFunds(this.props.availableFunds - transactionAmount); // Deduct Money
        }

        this.props.updatePiggyBank(updatedData);
    }

    render() {
        return (
            <div className="piggy-div">
                {Object.keys(this.props.piggyBanks).map(piggyId => this.renderPiggyButton(piggyId))}
            </div>
        );
    }

    renderPiggyButton(piggyId) {
        const piggyBankData = this.props.piggyBanks[piggyId];

        const displayContent = (piggyBankData.isDead)
            ? <div>I'm ded.</div>
            : <div>
                <b>{piggyId}</b> <br />
                Interest Rate: {(piggyBankData.interestRate * 100).toFixed(2)}% <br />
                Period: {parseInt(piggyBankData.period, 10)} days<br />
                Money Saved: ${(piggyBankData.moneySaved).toFixed(2)}
            </div>;

        return (
            <Button
                key={piggyId}
                className="piggy-button"
                onClick={() => { this.handleClick(piggyId) }}
                disabled={piggyBankData.isDead}
            >
                {displayContent}
            </Button>
        );
    }
}

PiggyBankPanel.propTypes = {
    piggyBanks: PropTypes.object.isRequired,
    updatePiggyBank: PropTypes.func.isRequired,
    selectedMoneyIndex: PropTypes.number.isRequired,
    availableFunds: PropTypes.number.isRequired,
    setAvailableFunds: PropTypes.func.isRequired,
    isHammerEnabled: PropTypes.bool.isRequired,
}