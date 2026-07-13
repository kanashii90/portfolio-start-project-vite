import {Container} from "../components/Container.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import styled from "styled-components";
import gears from "../../icons/gears-svgrepo-com 2.svg";

function Projects() {
    return (
        <StyledProjectsSection>
            <Container>
                <StyledProjectsContent>
                    <SectionTitle/>
                    <ProjectFlex/>
                </StyledProjectsContent>
            </Container>
        </StyledProjectsSection>
    )
}

function SectionTitle () {
    return (
        <StyledSectionTitle>
            <StyledDivTitle>
                <img src={gears} alt="projects title" />
                <StyledTextTitle>Projects</StyledTextTitle>
            </StyledDivTitle>
            <StyledSecondTitle>A select number of projects</StyledSecondTitle>
        </StyledSectionTitle>
    )
}



const projects = [
    {
        id: 1,
        image: "../../src/assets/images/cards/card1.png",
        description: "Made a social media manager template using HTML 5, CSS and JS.",
        ImageAlt:"imgCard1"
    },
    {
        id: 2,
        image: "../../src/assets/images/cards/card2.png",
        description: "Made a simple card page using HTML 5 and  CSS 3",
        ImageAlt:"imgCard2"},
    {
        id: 3,
        image: "../../src/assets/images/cards/card3.png",
        description: "Made an I.P address tracking website.",
        ImageAlt:"imgCard3"}
]


function ProjectFlex() {
    return (
        <StyledProjectFlex>

            {projects.map(item => (
                <ProjectCard
                    key={item.id}
                    project={item}
                />
            ))}

        </StyledProjectFlex>
    )
}

const StyledSectionTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 24px;
    gap: 8px;
`
const StyledDivTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

const StyledTextTitle = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.87);
`
const StyledSecondTitle = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.87);

`

const StyledProjectsSection = styled.section`
    background-color: #343d68;
    margin-bottom: 74px;
`

const StyledProjectsContent = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyledProjectFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 58px;
    margin-bottom: 40px;
`



export default Projects;

