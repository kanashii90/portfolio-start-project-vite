import {Container} from "../components/Container.tsx";
import styled from "styled-components";
import mainUserPhoto from "../assets/images/mainUserPhoto.png";
import circles from "../../icons/circles.svg";
import cube from "../../icons/cube.svg";
import ellipse from "../../icons/Ellipse.svg";
import plus from "../../icons/plus.svg";
import zigzags from "../../icons/zigzags.svg";

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
            <StyledHeading>
            <StyledGreeting>
                Hi👋, I'm a
            </StyledGreeting>
            <StyledTitle>
                Software Developer
            </StyledTitle>
            </StyledHeading>
            <StyledDescription>
                I'm <StyledBold>John Doe,</StyledBold> a developer dedicated to making the world a better place one line of code at a time.
            </StyledDescription>
            <StyledButton>Hire me</StyledButton>
        </StyledMainInfo>
    )
}

function MainImage (){
    return (
        <StyledMainImage>
            <StyledPhoto src={mainUserPhoto} alt="mainPhoto" />

            <img className="plus" src={plus}  alt=""/>
            <img className="cube" src={cube}  alt=""/>
            <img className="ellipse" src={ellipse}  alt=""/>
            <img className="circles" src={circles}  alt=""/>
            <img className="zigzags" src={zigzags}  alt=""/>
        </StyledMainImage>
    )
}

const StyledPhoto  = styled.img`
    height: 100%;
`
const StyledMainImage = styled.div`
    position: relative;
    min-height: 495px;
    display: flex;
    align-items: center;
    .plus{
        position:absolute;
        top:0;
        left:120px;
    }

    .cube{
        position:absolute;
        top:0;
        right:-24px;
    }

    .ellipse{
        position:absolute;
        bottom: 17px;
        right:343px;
    }

    .circles{
        position:absolute;
        right:-20px;
        bottom:-0px;
    }

    .zigzags{
        position:absolute;
        right: 349px;
        top:34px;
    }
`


const StyledMainSection = styled.section`    
    margin-bottom: 52px;
`
const StyledMainContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    
`

const StyledMainInfo = styled.div`
    max-width: 520px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
`
const StyledGreeting = styled.p`
    font-weight: 600;
    font-size: 32px;
    line-height: 1.176;
    letter-spacing: 0.01em;
        color: #343d68;
`
const StyledBold = styled.span`
    font-weight: 700;
`
const StyledTitle = styled.h1`
    color: #343d68;
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
`
const StyledDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
`
const StyledHeading = styled.div`
    display: flex;
    flex-direction: column;
`


const StyledButton = styled.button`
    all: unset;
    border-radius: 4px;
    width: 98px;
    height: 42px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    background-color: #e84949;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    
`

export default Main;

