import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

export default class HeaderBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="headerBannerFixedBanner p-0">
                    <div className="headerBannerOverly">
                        <div className="container text-center">
                            <div className="headerBannerContent">
                                <h2 className="text-white"> {this.props.pageTitle} </h2>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
