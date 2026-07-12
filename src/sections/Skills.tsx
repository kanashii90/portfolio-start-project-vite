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
                <SkillsList/>
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


function SkillsList() {
    return (
        <div>
            {skills.map(item => (
                <SkillItem
                    key={item.id}
                    skill={item}
                />
            ))}

        </div>
    )
}

function SkillImage (){
    return (
        <StyledSkillImage>
            <img src={SkillProjectCompleted} alt="project_completed"/>
        </StyledSkillImage>
    )
}

const StyledSkillImage = styled.div`
`

const StyledSkillsTitle = styled.h2`
    font-weight: 500;
    font-size: 20px;
    color: #e84949;
    text-align: center;
`

const StyledSkillsSection = styled.section`
    max-width: 1440px;
    margin: 0px auto 74px;
`
const StyledSkillsContent = styled.div`
`



export default Skills;