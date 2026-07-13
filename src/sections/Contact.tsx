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
                <StyledInput type="email" id="email" placeholder="Enter email address" required/>
                </StyledField>
                <StyledField>
                    <StyledTextArea id="message" name="message" placeholder="Enter message..."></StyledTextArea>
                </StyledField>
                <StyledButton>
                    Send Message
                    <StyledTelegramIcon src={telegramIcon} alt="telegram" />
                </StyledButton>
            </StyledForm>
        </StyledContactForm>
    )
}


const StyledContactSection = styled.section`

`

const StyledContactTitle = styled.h2`
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: #e84949;
    margin-bottom: 30px;
`

const StyledContactContent = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
`
const StyledContactImage = styled.div`
`
const StyledContactForm = styled.div`
    display: flex;
    
`
const StyledForm = styled.form`
    display: flex;
    gap: 43px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const StyledField = styled.div`
`
const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #fffdfd;
    border-radius: 4px;
    width: 213px;
    height: 50px;
    background-color: #343d68;
    cursor: pointer;
    border: none;
`
const StyledInput = styled.input`
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 12px 18px;
    width: 613px;
    height: 53px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background: #fff;
`
const StyledTextArea = styled.textarea`
    resize: none;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 11px 19px;
    width: 613px;
    height: 158px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
    background: #fff;
`

const StyledTelegramIcon = styled.img`
    width:22px;
    height:24px;
`



export default Contact;