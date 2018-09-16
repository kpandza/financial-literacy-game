import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './interest.css';

const MoneyIntervals = [
    { amount: 0.05, display: "5c" },
    { amount: 0.1, display: "10c" },
    { amount: 0.25, display: "25c" },
    { amount: 1, display: "$1" },
    { amount: 2, display: "$2" },
    { amount: 5, display: "$5" },
    { amount: 10, display: "5c" },
    { amount: 20, display: "5c" },
    { amount: 50, display: "5c" },
];

export function getMoneyIndexValue(index) {
    if (index < 0) return 0;

    return MoneyIntervals[index].amount;
}

export class MoneyButtonPanel extends React.Component {

    constructor(props) {
        super(props);

        this.handleMoneyClick = this.handleMoneyClick.bind(this);
        this.handleHammerClick = this.handleHammerClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const filteredMoneyList = MoneyIntervals.filter(moneyInterval =>
            moneyInterval.amount <= nextProps.availableFunds);

        if (filteredMoneyList.length - 1 < nextProps.selectedMoneyIndex) {
            this.props.setSelectedMoneyIndex(filteredMoneyList.length - 1)
        }
    }

    handleMoneyClick(selectedIndex) {
        this.props.setSelectedMoneyIndex(selectedIndex);
        this.props.setHammerStatus(false);
    }

    handleHammerClick(event) {
        event.target.blur();
        this.props.setSelectedMoneyIndex(-1);
        this.props.setHammerStatus(!this.props.isHammerEnabled);
    }

    render() {
        return (
            <div>
                {MoneyIntervals.filter(moneyInterval => moneyInterval.amount <= this.props.availableFunds)
                    .map((money, index) =>
                        <Button
                            className="money-button"
                            key={money.amount}
                            active={index === this.props.selectedMoneyIndex}
                            onClick={() => { this.handleMoneyClick(index) }}
                        >
                            {money.display}
                        </Button>
                    )
                }
                <Button
                    className="hammer-button"
                    active={this.props.isHammerEnabled}
                    onClick={this.handleHammerClick}
                >
                    HAMMER
                        </Button>
            </div>
        );
    }
}

MoneyButtonPanel.propTypes = {
    availableFunds: PropTypes.number.isRequired,
    selectedMoneyIndex: PropTypes.number.isRequired,
    setSelectedMoneyIndex: PropTypes.func.isRequired,
    isHammerEnabled: PropTypes.bool.isRequired,
    setHammerStatus: PropTypes.func.isRequired,
}