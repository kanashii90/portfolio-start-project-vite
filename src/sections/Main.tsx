import {Container} from "../components/Container.tsx";
import styled from "styled-components";
import mainUserPhoto from "../assets/images/mainUserPhoto.png";


function Main() {
    return (
        <StyledMainSection>
            <Container>
                <StyledMainContent>
                    <MainInfo />
                    <MainImage />
                </StyledMainContent>
            </Container>
        </StyledMainSection>
    )
}

function MainInfo() {
    return (
        <StyledMainInfo>
            <h3>Hi👋, I’m a</h3>
            <h1>Software Developer</h1>
            <p>I’m John Doe, a developer dedicated to making the world a better place one line of code at a time.</p>
            <button>Hire me</button>
        </StyledMainInfo>
    )
}

function MainImage (){
    return (
        <StyledMainImage>
            <img src={mainUserPhoto} alt="mainUserPhoto"/>
        </StyledMainImage>
    )
}


const StyledMainSection = styled.section`
    padding-top: 134px;
    
    
    
`
const StyledMainContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    outline: 2px solid red;
`

const StyledMainInfo = styled.div`
    max-width: 520px;
`

const StyledMainImage = styled.div`
`

export default Main;

