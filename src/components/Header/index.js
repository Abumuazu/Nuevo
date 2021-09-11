import React from 'react'
import {Link} from 'react-router-dom'
import nuevoLogo from "../../images/nuevo-logo.svg";
import {Wrapper, Content, NuevoLogoImg} from "../Header/Header.styles"

function Header() {
return (
    <Wrapper>
    <Content>
        <Link to='/'>
        <NuevoLogoImg src= {nuevoLogo} alt ="nuevo-logo" />
        </Link>

         
    </Content>
</Wrapper>
);
}

export default Header