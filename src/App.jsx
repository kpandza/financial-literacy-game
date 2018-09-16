import React from 'react';
import './App.css';
import { InterestGame } from './components/interest/InterestGame';

const defaultPiggyBanks = {
  "Piggy Bank 1": { "interestRate": 0.05, "period": 5, "moneySaved": 0, "isDead": false },
  "Piggy Bank 2": { "interestRate": 0.06, "period": 6, "moneySaved": 0, "isDead": false },
  "Piggy Bank 3": { "interestRate": 0.07, "period": 7, "moneySaved": 0, "isDead": false },
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      time: 0,
      startingFunds: -1,
      availableFunds: -1,
      piggyBanks: defaultPiggyBanks,
      maximumWithdrawalAmount: -1,
    }

    this.setStartingFunds = this.setStartingFunds.bind(this);
    this.setAvailableFunds = this.setAvailableFunds.bind(this);
    this.updatePiggyBank = this.updatePiggyBank.bind(this);
    this.setTime = this.setTime.bind(this);
    this.setMaximumWithdrawalAmount = this.setMaximumWithdrawalAmount.bind(this);
  }

  componentDidMount() {
    // INSERT FETCH REQUEST HERE 
    this.setState({
      loading: false,
      startingFunds: 5, // TEMP
      availableFunds: 5, // TEMP
      maximumWithdrawalAmount: 250, // TEMP
    });
  }

  render() {

    let displayContent = this.state.loading
      ? <div>Loading...</div>
      : <div className="App">
        <InterestGame
          startingFunds={this.state.startingFunds}
          availableFunds={this.state.availableFunds}
          setAvailableFunds={this.setAvailableFunds}
          piggyBanks={this.state.piggyBanks}
          updatePiggyBank={this.updatePiggyBank}
          time={this.state.time}
          setTime={this.setTime}
          maximumWithdrawalAmount={this.state.maximumWithdrawalAmount}
        />
      </div>;

    return displayContent;
  }

  setStartingFunds(amount) {
    this.setState({ startingFunds: amount });
  }

  setAvailableFunds(amount) {
    this.setState({ availableFunds: amount });
  }

  setMaximumWithdrawalAmount(amount) {
    this.setState({ maximumWithdrawalAmount: amount });
  }

  setTime(time) {
    this.setState({ time: time });
  }

  updatePiggyBank(updatedPiggyBanks) {
    this.setState({ piggyBanks: updatedPiggyBanks });
  }
}

export default App;