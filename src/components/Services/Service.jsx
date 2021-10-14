import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import design from '../../assets/images/design.png'
import ecommerce from '../../assets/images/ecommerce.png'
import web from '../../assets/images/web.png'

export default class Service extends Component {
    render() {
        return (
           <Fragment>
               <Container>
                   <h2 className="text-center mt-5 mb-5"> MY SERVICES </h2>
                   <Row className="mt-5 mb-5">
                       <Col lg={4} md={6} sm={12}>
                           <Card className="text-center d-block p-4">
                            <img src={design} alt="" width="80" />
                            <h1>Design</h1>
                           </Card>
                       </Col>
                       <Col lg={4} md={6} sm={12}>
                           <Card className="text-center d-block p-4">
                            <img src={ecommerce} width="80" alt="" />
                            <h1>Ecommerce</h1>
                           </Card>
                       </Col>
                       <Col lg={4} md={6} sm={12}>
                           <Card className="text-center d-block p-4">
                            <img src={web} width="80" alt="" />
                            <h1>Web Design</h1>
                           </Card>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        )
    }
}
