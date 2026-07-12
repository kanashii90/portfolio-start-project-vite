import styled from "styled-components";


function SkillItem(props: any) {
    return (
        <StyledSkillItem>
            <img src={props.skill.image} alt={props.skill.imageAlt} />
            <span>{props.skill.description}</span>
        </StyledSkillItem>
    )
}




const StyledSkillItem = styled.div `
`

export default SkillItem;