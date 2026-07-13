import styled from "styled-components";


function SkillItem(props: any) {
    return (
        <StyledSkillItem>
            <img src={props.skill.image} alt={props.skill.imageAlt} />
            <StyledSkillSpan>{props.skill.description}</StyledSkillSpan>
        </StyledSkillItem>
    )
}




const StyledSkillItem = styled.div `
    display: flex;
    flex-direction: column; 
    align-items: center;    
    justify-content: center;
    gap: 4px;
`

const StyledSkillSpan = styled.span `
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #000;
`

export default SkillItem;