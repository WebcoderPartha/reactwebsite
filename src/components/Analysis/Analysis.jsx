import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export default class Analysis extends Component {

    constructor(){
        super();
        this.state = {
            data: [
                {Technology: 'PHP', Projects: 100},
                {Technology: 'ReactJS', Projects: 90},
                {Technology: 'Laravel', Projects: 95},
                {Technology: 'WordPress', Projects: 100},
                {Technology: 'VueJS', Projects: 70}
            ]
        }

    }

    render() {
        
        var blue = "#c52e2e"

        return (
            <Fragment>
                <Container className="text-center pb-5">
                    <Row className="p-5">
                        <h2>Technology Used</h2>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={300} height={100} data={this.state.data}>
                                    <XAxis dataKey="Technology" />
                                    <Tooltip />
                                    <Bar dataKey="Projects" fill={blue}>

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
