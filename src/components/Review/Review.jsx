import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Review extends Component {
    render() {

        var settings = {
            dots: true,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 2000,
            vertical: true,
            verticalSwiping:true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };


        return (
            <Fragment>
                <Container fluid={true} className="text-center reviewContent">
                    <Row className="p-5">
                        <h2>MY VIDEO</h2>
                    </Row>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={12} md={12} sm={12}>
                                    <img src="https://image.freepik.com/free-photo/self-portrait-beautiful-chinese-girl_1262-18293.jpg" className="reviewImage" alt="" />
                                    <h2>Parthadeb</h2>
                                    <p>Loream ipsum dnaler lksdf lkjs kldfj</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={12} md={12} sm={12}>
                                    <img src="https://image.freepik.com/free-photo/self-portrait-beautiful-chinese-girl_1262-18293.jpg" className="reviewImage" alt="" />
                                    <h2>Parthadeb</h2>
                                    <p>Loream ipsum dnaler lksdf lkjs kldfj</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={12} md={12} sm={12}>
                                    <img src="https://image.freepik.com/free-photo/self-portrait-beautiful-chinese-girl_1262-18293.jpg" className="reviewImage" alt="" />
                                    <h2>Parthadeb</h2>
                                    <p>Loream ipsum dnaler lksdf lkjs kldfj</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        )
    }
}
