import styled from "styled-components";
import { device } from "../responsive";

const ModalMain = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s;

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

const ModalContainer = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  z-index: 3;
  width: 400px;
  transform: scale(0.5);
  transition: all 0.5s;

  &.active {
    transform: scale(1);
  }

  @media ${device.mobileL} {
    width: 95%;
  }
`;

const Modal = ({ active, setActive, success, setSuccess, children }) => {
  return (
    <ModalMain
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
        setSuccess(false);
      }}
    >
      <ModalContainer
        className={active ? "modal active" : "modal"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </ModalContainer>
    </ModalMain>
  );
};

export default Modal;
