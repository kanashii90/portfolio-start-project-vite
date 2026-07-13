import {Container} from "../components/Container.tsx";
import styled from "styled-components";
import SocialLink from "../components/SocialLink.tsx";
import whatsappIcon from "../../icons/footer/whatsapp.svg";
import twitterIcon from "../../icons/footer/twitter.svg";
import linkedinIcon from "../../icons/footer/linkedin.svg";
import gmailIcon from "../../icons/footer/gmail.svg";
import gitIcon from "../../icons/footer/git.svg";
import wave from "../assets/images/bg_wave.png"

function Footer() {
    return (
        <StyledFooterSection>
            <Container>
                <StyledFooterContent>
                    <StyledFooterSocialLink>
                    <p>My social media links:</p>
                        <StyledFooterUl>
                        <SocialLinks/>
                        </StyledFooterUl>
                    </StyledFooterSocialLink>
                    <StyledGitLink>
                    <p>More projects I’ve worked on</p>
                        <StyledGitWrapper>
                            <img src={gitIcon} alt="GitHub icon" />
                            <span>
                        <StyledGitAnchor href="https://github.com/john-doe">
                                @john-doe
                        </StyledGitAnchor>

                                {" "}on github
                            </span>
                        </StyledGitWrapper>
                    </StyledGitLink>
                </StyledFooterContent>
            </Container>
        </StyledFooterSection>
    )
}


const socials = [
    {
        id: 1,
        image: linkedinIcon,
        url: "#",
        ImageAlt:"linkedin"
    },
    {
        id: 2,
        image: whatsappIcon,
        url: "#",
        ImageAlt:"whatsapp"
    },
    {
        id: 3,
        image: twitterIcon,
        url: "#",
        ImageAlt:"twitter"
    },
    {
        id: 4,
        image: gmailIcon,
        url: "#",
        ImageAlt:"gmail"
    }
]

function SocialLinks() {
    return (
        socials.map(item => (
            <li key={item.id}>
                <SocialLink social={item} />
            </li>
        ))
    )
}



const StyledFooterSection = styled.footer`
    max-width: 1440px;
    height: 444px;
    background-image: url(${wave});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
`;

const StyledFooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 110px;
    padding-right: 110px;
`

const StyledFooterSocialLink = styled.div`
    display: flex;
    flex-direction: column;
    gap: 34px;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
`

const StyledGitLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 20px;
    gap: 19px;
    text-align: center;
    color: #fff;
`


const StyledGitWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 18px;
    color: #fffafa;
`

const StyledGitAnchor = styled.a`
    color: #0acbbf;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const StyledFooterUl = styled.ul`
    display: flex;
    gap: 65px;
    list-style: none;
    padding: 0;
    margin: 0;
`

export default Footer;
