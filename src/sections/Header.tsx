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
    background: white;
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