import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerContainer">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={12}>
                                <h2>FOLLOW US</h2>
                                <div className="socialIcon">
                                    <a href=" "><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a href=" "><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=" "><FontAwesomeIcon icon={faLinkedin} /></a>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <h2>Contact US</h2>
                                <div className="contactus">
                                    <p><FontAwesomeIcon icon={faMailBulk} /> webcoderpartha@gmail.com</p>
                                    <p><FontAwesomeIcon icon={faPhone} /> +8801710147887</p>
                                    <p><FontAwesomeIcon icon={faLocationArrow} /> Uttar Kalshi, Block-Pa, Section-12, Mirpur, Dhaka-1216</p>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <h2>Information</h2>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <h2>Privacy</h2>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container fluid={true} className="footerBottom">
                    <Row>
                        <Col>
                            <p className="footertext">@ Copyrights 2021 | All Rights Reserved</p>
                            <p className="footertext">Webcoderpartha.com</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
