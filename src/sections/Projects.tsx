import {Container} from "../components/Container.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import styled from "styled-components";




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
            <img src="../../icons/gears-svgrepo-com 2.svg" alt="projects title" />
            <p>Projects</p>
            <p>A select number of projects</p>
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
    
`


const StyledProjectsSection = styled.section`
    background-color: #343d68;
    max-width: 1440px;
    margin: 0px auto 74px;
    

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
    margin-bottom: 20px;
    
`



export default Projects;

