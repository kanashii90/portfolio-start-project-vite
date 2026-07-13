import {Container} from "../components/Container.tsx";
import SkillItem from "../components/SkillItem.tsx";
import styled from "styled-components";
import SkillProjectCompleted from "../assets/images/undraw_project_completed_w0oq 1.png";


function Skills() {
    return (
        <StyledSkillsSection>
        <Container>
            <StyledSkillsTitle>
                Skills
            </StyledSkillsTitle>
            <StyledSkillsContent>
                <StyledTitleSkillList>
                    <StyledTitle>I have a vast experience in the following web technologies:</StyledTitle>
                    <SkillsList/>
                </StyledTitleSkillList>
                <SkillImage/>
            </StyledSkillsContent>

        </Container>
    </StyledSkillsSection>
    )
}

const skills = [
    {
        id: 1,
        image: "../../src/assets/images/skills/Group16.svg",
        description: "HTML 5",
        ImageAlt:"html"
    },
    {
        id: 2,
        image: "../../src/assets/images/skills/Group17.svg",
        description: "CSS3",
        ImageAlt:"CSS3"
    },
    {
        id: 3,
        image: "../../src/assets/images/skills/Group18.svg",
        description: "JavaScript",
        ImageAlt:"JavaScript"
    },
    {
        id: 4,
        image: "../../src/assets/images/skills/Group19.svg",
        description: "Bootstrap",
        ImageAlt:"bootstrap"
    }
]


function SkillsList() {
    return (
        <StyledSkillList>
            {skills.map(item => (
                <SkillItem
                    key={item.id}
                    skill={item}
                />
            ))}

        </StyledSkillList>
    )
}

function SkillImage (){
    return (
        <StyledSkillImage>
            <img src={SkillProjectCompleted} alt="project_completed"/>
        </StyledSkillImage>
    )
}

const StyledSkillList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const StyledSkillImage = styled.div`
`

const StyledSkillsTitle = styled.h2`
    font-weight: 500;
    font-size: 20px;
    color: #e84949;
    text-align: center;
    margin-bottom: 30px;
`

const StyledSkillsSection = styled.section`
    margin-bottom: 70px;
`
const StyledSkillsContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const StyledTitleSkillList = styled.div`

`
const StyledTitle = styled.p`
    font-weight: 400;
    font-size: 18px;
    color: #818080;
    margin-bottom: 40px;
`



export default Skills;