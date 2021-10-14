import React, { Component, Fragment } from 'react'
import { init } from 'ityped'
import { Col, Container, Row } from 'react-bootstrap'
import aboutImage from '../../assets/images/face.png'

export default class AboutMe extends Component {

    componentDidMount() {
        const myElement = document.querySelector('#experience')
        init(myElement, { showCursor: false, strings: ['Full Stack Developer!', 'Software Engineer!', 'Graphic Designer!'] })
    }

    render() {
        return (
            <Fragment>
                <Container className="p-5 text-center">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="aboutImage" src={aboutImage} alt="" />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeDetails">
                                <h3 className="aboutGrad">Hi There, I'm</h3>
                                <h2 className="aboutName">Parthadeb Mondal</h2>
                                <p className="aboutWork">Work As <span id="experience">Web Developer</span></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
