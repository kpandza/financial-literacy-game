import React from 'react';
import './App.css';
import { InterestGame } from './components/interest/InterestGame';

const defaultPiggyBanks = {
"Piggy Bank 1": {"interestRate": 0.05, "period": 5, "moneySaved": 0, "isDead": false},
"Piggy Bank 2": {"interestRate": 0.06, "period": 6, "moneySaved": 0, "isDead": false},
"Piggy Bank 3": {"interestRate": 0.07, "period": 7, "moneySaved": 0, "isDead": false},
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
      maximumWithdrawalAmount: 0,
    }

    this.setStartingFunds = this.setStartingFunds.bind(this);
    this.setAvailableFunds = this.setAvailableFunds.bind(this);
    this.updatePiggyBank = this.updatePiggyBank.bind(this);
  }

  componentDidMount() {
    // INSERT FETCH REQUEST HERE 
    this.setState({
      loading: false,
      startingFunds: 5, // TEMP
      availableFunds: 5, // TEMP
    });
  }

  render() {

    let displayContent = this.state.loading
      ? <div>Loading...</div>
      : <div className="App">
        <InterestGame
          availableFunds={this.state.availableFunds}
          setAvailableFunds={this.setAvailableFunds}
          piggyBanks={this.state.piggyBanks}
          updatePiggyBank={this.updatePiggyBank}
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

  updatePiggyBank(updatedPiggyBanks) {
    this.setState({ piggyBanks: updatedPiggyBanks });
  }
}

export default App;