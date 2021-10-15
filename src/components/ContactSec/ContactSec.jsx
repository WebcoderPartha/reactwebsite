import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default class ContactSec extends Component {
    render() {
        return (
            <Fragment>
                <Container className="p-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2>Get In Touch</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Enter name" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" name="subject" placeholder="Enter Subject" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="contactus">
                                <h2>Contact With Us</h2>
                                <p><FontAwesomeIcon icon={faMailBulk} /> webcoderpartha@gmail.com</p>
                                <p><FontAwesomeIcon icon={faPhone} /> +8801710147887</p>
                                <p><FontAwesomeIcon icon={faLocationArrow} /> Uttar Kalshi, Block-Pa, Section-12, Mirpur, Dhaka-1216</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
