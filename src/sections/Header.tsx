import {Container} from "../components/Container.tsx";
import styled from "styled-components";
import logoIcon from "../../icons/logo.png";
import gearIcon from "../../icons/gears.png";


function Header() {
    return (
        <StyledHeader>
            <Container>
                <HeaderContent>
                <Logo/>
                <Navigation/>
                </HeaderContent>
            </Container>
        </StyledHeader>
    )
}

function HeaderContent(props: any) {
        return (
            <StyledHeaderContent>
                {props.children}
            </StyledHeaderContent>
        )
}

function Logo() {
    return (
        <a href="/public">
            <img src={logoIcon} alt="logo"/>
        </a>
    )
}

function Navigation() {
    return (
        <StyledNav>
            <StyledNavAnchorDef href="/public">Skills</StyledNavAnchorDef>
            <StyledNavItem>
                <img src={gearIcon} alt="gearIcon"/>
                <StyledNavAnchor href="/public">
                    Projects
                </StyledNavAnchor>
            </StyledNavItem>
             <StyledNavAnchorDef href="/public">Contact me</StyledNavAnchorDef>
        </StyledNav>
    )
}


const StyledHeader = styled.header`
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background: #fcfcfc;
    height: 83px;
    display: flex;
    align-items: center;
    margin-bottom: 70px;
`

const StyledNav = styled.nav`
    display: flex;
    gap: 50px;
    align-items:center;
`

const StyledHeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2px;
`

const StyledNavAnchor = styled.a`
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    color: #e84949;
    &:hover {
        text-decoration: underline;
    }
`

const StyledNavAnchorDef = styled.a`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    font-weight: 400;
    font-size: 18px;
    color: #000;
`

const StyledNavItem = styled.div`
    display: flex;
    align-items: center;
   
    gap: 8px;
`


export default Header;