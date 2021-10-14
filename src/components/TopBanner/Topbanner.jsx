import React, { Component, Fragment } from 'react'
import { Button, Container } from 'react-bootstrap'

export default class Topbanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverly">
                        <div className="container text-center">
                            <div className="topContent">
                                <h2 className="text-white">Welcome to Webcoder Partha</h2>
                                <Button>Learn More</Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
