import {Container} from "../components/Container.tsx";
import styled from "styled-components";
import manWithChat from "../assets/images/manWithChat.png";
import telegramIcon from "../../icons/tg.svg";

function Contact() {
    return (
        <StyledContactSection>
        <Container>
            <StyledContactTitle>
                Contact me
            </StyledContactTitle>
            <StyledContactContent>
                <ContactImage/>
                <ContactForm/>
            </StyledContactContent>
        </Container>
    </StyledContactSection>
    )
}

function ContactImage() {
    return (
        <StyledContactImage>
            <img src={manWithChat} alt="manWithChat"/>
        </StyledContactImage>
    )
}

function ContactForm() {
    return (
        <StyledContactForm>
            <StyledForm>
                <StyledField>
                <label htmlFor="email">Email</label>
                <StyledInput type="email" id="email" placeholder="Email" required/>
                </StyledField>
                <StyledField>
                    <label htmlFor="name">Name</label>
                <StyledInput type="text" id="name" placeholder="Name" required/>
                </StyledField>
                <StyledButton>
                    Send Message
                    <img src={telegramIcon} alt="telegram" />
                </StyledButton>
            </StyledForm>
        </StyledContactForm>
    )
}


const StyledContactSection = styled.section``

const StyledContactTitle = styled.h2`
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: #e84949;
`

const StyledContactContent = styled.div`
    display: flex;
`
const StyledContactImage = styled.div`
`
const StyledContactForm = styled.div`
    
`
const StyledForm = styled.form`
`
const StyledField = styled.div`
`
const StyledButton = styled.button`
`
const StyledInput = styled.input`
`



export default Contact;