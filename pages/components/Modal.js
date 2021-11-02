import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { EmailSubmit } from '../api/newRegistration';
import { VscChromeClose } from 'react-icons/vsc';

const Modal = ({ visible, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = React.useState(false);

  useEffect(() => {
    setIsBrowser(true);
    return () => {};
  }, []);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const submitEmail = async (e) => {
    if (email == '') {
      alert('Email feild is empty');
    } else {
      setSubmitted(true);
      await EmailSubmit(email);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = visible ? (
    <Wrapper isSubmitted={submitted}>
      <Container>
        <Heading>Join the waitlist.</Heading>
        <Close onClick={handleClose}>
          <VscChromeClose />
        </Close>
        <Message isSubmitted={submitted}>
          Thanks. you will be notified soon.
        </Message>
        <Form isSubmitted={submitted}>
          <Input placeholder="email" onChange={emailHandler} required />
          <Button
            className="waitlist-btn"
            onClick={() => {
              submitEmail();
            }}
          >
            <span className="m-7">Join</span>
          </Button>
        </Form>
      </Container>
    </Wrapper>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.98);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Container = styled.div`
  // border: 3px solid #050b7d;
  position: relative;
  overflow: hidden;
  background-color: white;
  border-radius: 20px;
  padding: 50px 20px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 108px -57px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 108px -57px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 108px -57px rgba(0, 0, 0, 0.75);
`;
const Heading = styled.h1`
  text-align: center;
  color: #050b7d;
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: ${(props) => (props.isSubmitted ? 'none' : 'block')};
`;

const Input = styled.input`
  outline: none;
  border: 3px solid #050b7d;
  border-radius: 5px;
  font-size: 18px;
  padding: 5px 10px;
  margin-bottom: 20px;
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
`;
const Message = styled.h2`
  color: black;
  font-size: 18px;
  font-weight: 500;
  /* display:block; */
  display: ${(props) => (props.isSubmitted ? 'block' : 'none')};
`;

const Close = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #050b7d;
  padding: 10px 10px;
  color: white;
  cursor: pointer;
  border-radius: 0px 0px 0px 15px;
`;
