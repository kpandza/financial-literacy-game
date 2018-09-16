import React from 'react';
import './LandingPage.css';
import Logo from './common-cents-logo.png';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            maximumValue:'',
            startingFunds: ''
        };

        this.handleStartFundChange = this.handleStartFundChange.bind(this);
        this.handleWithdrawChange = this.handleWithdrawChange.bind(this);
        this.toggleClose = this.toggleClose.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleClose() {
        this.setState({ modalOpen: false });
      }

    toggleOpen() {
        this.setState({ modalOpen: true });
      }

      handleWithdrawChange(event) {
        this.setState({maximumValue: event.target.value});
        this.props.setMaximumWithdrawalAmount(Number(event.target.value));
        console.log(this.state.maximumValue);      
      }

      handleStartFundChange(event) {
        this.setState({startingFunds: event.target.value});
        this.props.setStartingFunds(Number(event.target.value));
        console.log(this.state.maximumValue)
       
      }

    render() {
        return (
            <div className="landing-page">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
            <div class="row settings-logo">
                <div class="col-12 col-sm-12 "> 
                <button class="settings-logo" onClick={this.toggleOpen}/>
                   
                 </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 text-center "> 
                <img class="logo" src={Logo} />
                 </div>
            </div>
            <div class="row">
                <div class="col-12 text-center"> 
                <Link to="/dashboard"> <button class="btn-primary">Begin</button></Link>
              
                 </div>
            <Modal
            show={this.state.modalOpen}
            onHide={this.toggleClose}
            onRequestClose={this.toggleClose}
            container={this}
            aria-labelledby="contained-modal-title"
            >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Parental Settings
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class="input-info">
           <input type="number" placeholder="Maximum Withdraw Value" id="maximumValue"  value={this.state.maximumValue} onChange={this.handleWithdrawChange}/>
           <br />
           <input type="number" placeholder="Starting funds"  value={this.state.startingFunds} id="startingFunds" onChange={this.handleStartFundChange}/>
           </div>
          </Modal.Body>
          <div class="landingfooter">
          <Modal.Footer>
            <button class="btn-primary" onClick={this.toggleClose}>Save Settings</button>
          </Modal.Footer>
          </div>
        </Modal>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </div>
        );
    }


}

