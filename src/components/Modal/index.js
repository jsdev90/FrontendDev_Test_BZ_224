import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Container>
      {props.children}
    </Container>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
