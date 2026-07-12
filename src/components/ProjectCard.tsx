import styled from "styled-components";
import arrowButton from "../../icons/Arrow.svg";


function ProjectCard(props: any) {
    return (
        <StyledProjectCard>
            <StyledImage src={props.project.image} alt={props.project.imageAlt} />
            <StyledDescription>{props.project.description}</StyledDescription>
                <Button/>
        </StyledProjectCard>
    )
}

function Button() {
    return (
        <StyledButton>
            Learn more
            <img src={arrowButton}  alt="arrow"/>
        </StyledButton>
    )
}

const StyledImage = styled.img`
`

const StyledDescription = styled.p`
`

const StyledProjectCard = styled.article`
    display: flex;
    flex-direction: column;
    gap: 19px;
    min-height: 364px;
    background-color: #262c4d;;
    padding: 0px 0px 12px;
    flex-basis: calc((100% - 116px) / 4);
    align-items: center;
`

const StyledButton = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border: 2px solid #fff;
    border-radius: 4px;
    width: 131px;
    height: 42px;
    background: rgba(52, 61, 104, 0.08);
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: #fff;
    padding: 8px 16px 14px;
`

export default ProjectCard;
