import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './interest.css';
import hammer from '../../public/hammer.png'
import five_cents from '../../public/5-cents.png'
import ten_cents from '../../public/10-cents.png'
import tfive_cents from '../../public/25-cents.png'
import loonie from '../../public/1-dollar.png'
import toonie from '../../public/2-dollars.png'
import five_dollars from '../../public/5-dollars.png'
import ten_dollars from '../../public/10-dollars.png'
import twenty from '../../public/20-dollars.png'
import fifty from '../../public/50-dollars.png'

const MoneyIntervals = [
    { amount: 0.05, display: <img id="money" src={five_cents}></img> },
    { amount: 0.1, display: <img id="money" src={ten_cents}></img> },
    { amount: 0.25, display: <img id="money" src={tfive_cents}></img> },
    { amount: 1, display: <img id="money" src={loonie}></img> },
    { amount: 2, display: <img id="money" src={toonie}></img> },
    { amount: 5, display: <img id="money" src={five_dollars}></img> },
    { amount: 10, display: <img id="money" src={ten_dollars}></img> },
    { amount: 20, display: <img id="money" src={twenty}></img> },
    { amount: 50, display: <img id="money" src={fifty}></img> },
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
                    <img id="hammerImg" src={hammer}></img>
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