import styled from "styled-components";


function SocialLink(props: any) {
    return (
        <StyledSocialLink href={props.social.url}>
            <img
                src={props.social.image}
                alt={props.social.ImageAlt}
            />
        </StyledSocialLink>
    )
}



const StyledSocialLink = styled.a `
    
`

export default SocialLink;