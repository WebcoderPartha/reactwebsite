import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player'

import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

export default class Video extends Component {

    constructor(){
        super();
        this.state = {
            show: false
        }
    }

    modelOpen = () => this.setState({show:true})
    modelClose = () => this.setState({show:false})


    render() {
        return (
            <Fragment>
                <Container className="p-5">
                    <Row className="p-5 text-center">
                        <h2>MY VIDEO</h2>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="mb-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="mb-3">
                            <div className="VideoPlayers">
                                <FontAwesomeIcon onClick={this.modelOpen} className="videoIcon" icon={faVideoSlash}  />
                            </div>
                        </Col>

                    </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modelClose} centered>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.modelClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}
