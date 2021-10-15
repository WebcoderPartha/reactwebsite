import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import logoScoll from '../../assets/images/logo-scroll.png'
import '../../assets/css/custom.css'
import { NavLink } from 'react-router-dom'

export default class TopNavigation extends Component {

    constructor(){
        super()
        this.state = {
            topTitle: 'topBrandName',
            logo: [logo],
            topBackground: 'topBackground',
            topMenu: 'menu',
            variant: 'dark'
        }
    }

    scroller = () => {
        if(window.scrollY > 100){
            this.setState({
                topTitle: 'topBrandNameScroll',
                logo: [logoScoll],
                topBackground: 'topBackgroundScroll',
                topMenu: 'menuScoll',
                variant: 'light'
            })
        }else if(window.scrollY < 100){
            this.setState({
                topTitle: 'topBrandName',
                logo: [logo],
                topBackground: 'topBackground',
                topMenu: 'menu',
                variant: 'dark'
            })
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.scroller);
    }

  render() {
    return (
        <Fragment>
            <Navbar collapseOnSelect fixed="top" expand="lg" className={this.state.topBackground} variant={this.state.variant}>
                <Container>
                    <Navbar.Brand className={this.state.topTitle} href="/"><img className="logo" src={this.state.logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className={this.state.topMenu}>
                            <NavLink className="nav-link" to="/">HOME</NavLink>
                            <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                            <NavLink className="nav-link" to="/services">SERVICES</NavLink>
                            <NavLink className="nav-link" to="/courses">COURSES</NavLink>
                            <NavLink className="nav-link" to="/portfolio">PORTFOLIO</NavLink>
                            <NavLink className="nav-link" to="/contact-us">CONTACT US</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
  }
}
