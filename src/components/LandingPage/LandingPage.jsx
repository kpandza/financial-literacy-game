import React from 'react';
import './LandingPage.css';
import Logo from './kid-koin-logo.png';
import SettingsLogo from './settings-logo.png';
import { Link } from 'react-router-dom';
export class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parentName: "",
            maximumFunds: 0,
        };
    }

    render() {
        return (
            <div className="landing-page">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
            <div class="row">
                <div class="col-12 col-sm-12 "> 
                    <img class="settings-logo" src={SettingsLogo} />
                 </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-12 text-center "> 
                <img class="logo" src={Logo} />
                 </div>
            </div>
            <div class="row">
                <div class="col-12 text-center"> 
                <Link to="/dashboard"><button className="landing-button">hi</button></Link>
                 </div>
            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </div>
        );
    }


}

