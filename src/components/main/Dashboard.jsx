import React, { Component } from 'react';
import gameIcon from '../../public/interest-game-icon.png'
import shelf from './shelf.png'
import plant1 from '../../public/plant1.png'
import blocks from '../../public/blocks.png'
import teddy from '../../public/teddy-bear.png'
import ball from '../../public/beach-ball.png'
import settings from '../../public/settings.png'
import books from '../../public/books.png'
import moneygame from '../../public/money-swap-game.png'
import klogo from '../../public/circle-logo.png'
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, ButtonToolbar, Button } from 'react-bootstrap';
import './dashboard.css';
import './toggle.css';


export class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-main">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous">
                </link>
                <Grid id="header">
                    <Row class="row">
                        <Col md={1}>
                            <Link to="/"><Image id="logo-padding" src={klogo} thumbnail /></Link>
                        </Col>
                        <Col className="text-center" md={10}>
                        </Col>
                        <Col md={1}>
                            <Image id="settings" src={settings} thumbnail />
                        </Col>
                    </Row>
                </Grid>
                <Grid id="extra-padding" fluid={true}>
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <Row class="row justify-content-md-center">
                                <Col md={4}>
                                    <div class="shake-slow">
                                        <Link to="/interest" ><Image src={gameIcon} thumbnail /></Link>
                                    </div>
                                </Col>
                                <Col className="text-center" md={4}>
                                    <Image id="plantheight" src={plant1} thumbnail />
                                </Col>
                                <Col md={4}>
                                    <Image id="bookspadding" src={books} thumbnail />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={8} mdOffset={2}>
                            <Row class="row justify-content-md-center">
                                <Col xs={12} md={12}>
                                    <Image id="shelfimage" src={shelf} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <Grid id="extra-padding" fluid={true}>
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <Row class="row justify-content-md-center">
                                <Col md={4}>
                                    <Image src={ball} thumbnail />
                                </Col>
                                <Col md={4}>
                                    <div class="shake-slow">
                                        <Image src={moneygame} thumbnail />
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Image id="plantheight" src={blocks} thumbnail />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={8} mdOffset={2}>
                            <Row class="row justify-content-md-center">
                                <Col xs={12} md={12}>
                                    <Image id="shelfimage" src={shelf} />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Grid>
                <Grid id="extra-padding" fluid={true}>
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <Row class="row justify-content-md-center">
                                <Col md={4}>
                                    <Image id="plantheight" src={blocks} thumbnail />
                                </Col>
                                <Col className="text-center" md={4}>
                                    <Image id="plantheight" src={teddy} thumbnail />
                                </Col>
                                <Col className="text-center" md={4}>
                                    <Image id="plantheight" src={plant1} thumbnail />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={8} mdOffset={2}>
                            <Row class="row justify-content-md-center">
                                <Col xs={12} md={12}>
                                    <Image id="shelfimage" src={shelf} />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Grid>
            </div>

        )
    }
}
