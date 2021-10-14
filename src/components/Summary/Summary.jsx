import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLaptop, faStar, faCheck } from '@fortawesome/free-solid-svg-icons'
import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';

export default class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryBanner p-0">
                    <div className="summaryBannerOverly">
                        <Container>
                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <Row className="summarymain text-center">
                                    <Col>
                                        <FontAwesomeIcon className="summaryIcon" icon={faGlobe} />
                                        <h2 className="counterSummary">
                                        <CountUp start={0} end={30000} duration={1.90}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        </h2>
                                        <p className="summaryTitle">Students Worldwide</p>
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon className="summaryIcon" icon={faLaptop} />
                                        <h2 className="counterSummary">
                                        <CountUp start={0} end={75} duration={1.90}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        </h2>
                                        <p className="summaryTitle">Courses Published</p>
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon className="summaryIcon" icon={faStar} />
                                        <h2 className="counterSummary">
                                        <CountUp start={0} end={3569} duration={1.90}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        </h2>
                                        <p className="summaryTitle">Student Reviews</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <Card className="summaryCard">
                                    <Card.Body>
                                        <Card.Title>What I Have Archived</Card.Title>
                                        <Card.Text>
                                            <p><FontAwesomeIcon className="iconsss" icon={faCheck} /> Requirement Gathering</p>
                                            <p><FontAwesomeIcon className="iconsss" icon={faCheck} /> System Analysis</p>
                                            <p><FontAwesomeIcon className="iconsss" icon={faCheck} /> Coding Testing</p>
                                            <p><FontAwesomeIcon className="iconsss" icon={faCheck} /> Implementation</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}


