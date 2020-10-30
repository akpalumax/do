import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav=item ml-5">
                        <Link to="/" className="nav-link">
                            KINGMAX
                        </Link>
                    </li>
                </ul>

                <ButtonContainer className="nav justify-content-end">

                <Link to ="/login" className="ml-auto">
                    
                        <span className="mr-2">
                        <i className="fa fa-sign-in" />
                        </span>
                        LOGIN
                </Link>

                <Link to ="/signup" className="ml-auto">
                    
                        <span className="mr-2">
                        <i className="fas fa-user-plus" />
                        </span>
                        SIGN UP
                    
                </Link>

                <Link to ="/cart" className="ml-auto">
                    
                        <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                    
                </Link>
                </ButtonContainer>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`;