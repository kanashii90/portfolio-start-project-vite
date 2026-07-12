import {Container} from "../components/Container.tsx";
import styled from "styled-components";


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
        <a href="/public">Logo</a>
    )
}

function Navigation() {
    return (
        <StyledNav>
            <a href="/public">Skills</a>
            <a href="/public">Projects</a>
            <a href="/public">Contact me</a>
        </StyledNav>
    )
}


const StyledHeader = styled.header`
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background: #fcfcfc;
    max-width: 1440px;
    margin: 0 auto;
`

const StyledNav = styled.nav`
    display: flex;
    gap: 10px;
    align-items:center;
`

const StyledHeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export default Header;