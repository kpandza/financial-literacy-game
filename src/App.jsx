import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { InterestGame } from './components/interest/InterestGame';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Dashboard } from './components/main/Dashboard';

export const PARENT_ID = "5e524cd4-be8f-4c27-a9e8-6a0f288719e8_8e095a60-87e4-41f6-8b14-01ac0390c410";
export const PARENT_CHEQUING_ID = "5e524cd4-be8f-4c27-a9e8-6a0f288719e8_f4bb3031-3b87-4884-9a70-066690c87c67"
export const CHILD_ID = "5e524cd4-be8f-4c27-a9e8-6a0f288719e8_085b9b2e-db56-42d1-b01e-c9a43c7061d9";
export const CHILD_CHEQUING_ID = "5e524cd4-be8f-4c27-a9e8-6a0f288719e8_294ce541-4ab3-4fae-aadf-beafa71804c9";

const defaultPiggyBanks = {
  "Piggy Bank 1": { "interestRate": 0.05, "period": 5, "moneySaved": 0, "isDead": false },
  "Piggy Bank 2": { "interestRate": 0.07, "period": 7, "moneySaved": 0, "isDead": false },
  "Piggy Bank 3": { "interestRate": 0.15, "period": 15, "moneySaved": 0, "isDead": false },
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
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/interest" render={(props) =>
              <InterestGame
                startingFunds={this.state.startingFunds}
                availableFunds={this.state.availableFunds}
                setAvailableFunds={this.setAvailableFunds}
                piggyBanks={this.state.piggyBanks}
                updatePiggyBank={this.updatePiggyBank}
                time={this.state.time}
                setTime={this.setTime}
                maximumWithdrawalAmount={this.state.maximumWithdrawalAmount}
              />} />
          </Switch>
        </div>
      </Router>
    );
  }

  // render() {
  //   console.log(defaultPiggyBanks)
  //   let displayContent = this.state.loading
  //     ? <div className="kidkoin">Loading...</div>
  //     : <div className="kidkoin">
  //       <InterestGame
  //         startingFunds={this.state.startingFunds}
  //         availableFunds={this.state.availableFunds}
  //         setAvailableFunds={this.setAvailableFunds}
  //         piggyBanks={this.state.piggyBanks}
  //         updatePiggyBank={this.updatePiggyBank}
  //         time={this.state.time}
  //         setTime={this.setTime}
  //         maximumWithdrawalAmount={this.state.maximumWithdrawalAmount}
  //       />
  //     </div>;

  //   return displayContent;
  // }

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