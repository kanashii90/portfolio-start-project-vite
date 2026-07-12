import {Container} from "../components/Container.tsx";
import styled from "styled-components";

function Footer() {
    return (
        <StyledFooterSection>
            <Container>
                <StyledFooterContent>
                    <StyledFooterSocialLink>
                    <p>My social media links:</p>
                        <SocialLinks/>
                    </StyledFooterSocialLink>
                    <StyledGitLink>
                    <p>More projects I’ve worked on</p>
                    </StyledGitLink>
                </StyledFooterContent>
            </Container>
        </StyledFooterSection>
    )
}

function SocialLinks() {
    return (   
        <StyledFooterUl>
            <li><a href=""><img src="" alt=""/></a></li>
            <li><a href=""><img src="" alt=""/></a></li>
            <li><a href=""><img src="" alt=""/></a></li>
            <li><a href=""><img src="" alt=""/></a></li>
        </StyledFooterUl>

    )
}

const socialList = [
    {
        id: 1,
        image: "../../",
        description: "HTML 5",
        ImageAlt:"html"
    },
    {
        id: 2,
        image: "../../src/assets/images/skills/Group17.svg",
        description: "Made a simple card page using HTML 5 and  CSS 3",
        ImageAlt:"CSS3"
    },
    {
        id: 3,
        image: "../../src/assets/images/skills/Group18.svg",
        description: "Made an I.P address tracking website.",
        ImageAlt:"JavaScript"
    },
    {
        id: 4,
        image: "../../src/assets/images/skills/Group19.svg",
        description: "Bootstrap",
        ImageAlt:"bootstrap"
    }
]



const StyledFooterSection = styled.div`
`
const StyledFooterContent = styled.div`
display: flex;`

const StyledFooterSocialLink = styled.div`
display: flex;`

const StyledGitLink = styled.div`
display: flex;`

const StyledFooterUl = styled.ul`
`

export default Footer;
