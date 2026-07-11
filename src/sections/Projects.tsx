import {Container} from "../components/Container.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import styled from "styled-components";



function Projects() {
    return (
        <StyledProjectsSection>
            <Container>
                <StyledProjectsContent>
                    <SectionTitle/>
                    <ProjectGrid/>
                </StyledProjectsContent>
            </Container>
        </StyledProjectsSection>
    )
}

function SectionTitle () {
    return (
        <div>
            <img src="../../icons/gears-svgrepo-com 2.svg" alt="projects title" />
            <p>Projects</p>
            <p>A select number of projects</p>
        </div>
    )
}

function ProjectGrid () {
    return (
        <StyledProjectGrid>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </StyledProjectGrid>

    )
}


const StyledProjectsSection = styled.section`
    background-color: #343d68;
    max-width: 1440px;
    margin: 0 auto;

`
const StyledProjectsContent = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const StyledProjectGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 58px;
    
`



export default Projects;