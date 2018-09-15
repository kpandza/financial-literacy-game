import React from 'react';
import './App.css';
import { InterestGame } from './components/interest/InterestGame';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      startingFunds: -1,
      availableFunds: -1,
    }
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
}

export default App;