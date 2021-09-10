import React from 'react'

import nuevoLogo from "../../images/nuevo-logo.svg";
import {Wrapper, Content, NuevoLogoImg} from "../Header/Header.styles"

function Header() {
return (
    <Wrapper>
    <Content>
<NuevoLogoImg src= {nuevoLogo} alt ="nuevo-logo" />
         
    </Content>
</Wrapper>
);
}

export default Header