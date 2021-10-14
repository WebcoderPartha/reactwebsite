import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class Course extends Component {
    render() {
        return (
            <Fragment>
                <Container className="p-5">
                    <Row className="p-5 text-center">
                        <h2>MY COURSES</h2>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImage" src="https://image.freepik.com/free-vector/gradient-colored-sale-background_52683-68460.jpg" alt="" />
                                </Col>
                                <Col lg={6} md={12} sm={12} className="mt-3">
                                    <h2>Laravel 8</h2>
                                    <p>Some quick example text to buion the card title and make up the bulk of the card's content</p>
                                    <a href=" " className="courseLink">View Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImage" src="https://image.freepik.com/free-vector/gradient-colored-sale-background_52683-68460.jpg" alt="" />
                                </Col>
                                <Col lg={6} md={12} sm={12} className="mt-3">
                                    <h2>Laravel 8</h2>
                                    <p>Some quick example text to buion the card title and make up the bulk of the card's content</p>
                                    <a href=" " className="courseLink">View Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImage" src="https://image.freepik.com/free-vector/gradient-colored-sale-background_52683-68460.jpg" alt="" />
                                </Col>
                                <Col lg={6} md={12} sm={12} className="mt-3">
                                    <h2>Laravel 8</h2>
                                    <p>Some quick example text to buion the card title and make up the bulk of the card's content</p>
                                    <a href=" " className="courseLink">View Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="mb-3">
                            <Row>
                                <Col lg={6} md={12} sm={12}>
                                    <img className="courseImage" src="https://image.freepik.com/free-vector/gradient-colored-sale-background_52683-68460.jpg" alt="" />
                                </Col>
                                <Col lg={6} md={12} sm={12} className="mt-3">
                                    <h2>Laravel 8</h2>
                                    <p>Some quick example text to buion the card title and make up the bulk of the card's content</p>
                                    <a href=" " className="courseLink">View Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
