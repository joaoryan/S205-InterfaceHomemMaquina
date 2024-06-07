import styled from 'styled-components';
import { Colors } from '../../assets/styles/StyleTypes'
import imageLogin1 from '../../assets/image/cat1.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 95vh;
  padding: 0px 00px 0px 00px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px 20px 0px 20px;
`;


export const LogoutButton = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  cursor: pointer;
  :hover{
    color: ${props => props.theme.colors.hoverColor};
  }
`;

export const Hader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  margin: 0px 20px;
  border-bottom: #bbbbbb 1px solid;
`;

export const Baseboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 26px;
  margin: 89px 20px 0px 30px;
  border-top: #bbbbbb 1px solid;
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
  padding: 0px 50px;
  gap: 20px;
  a{
    text-decoration: none;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    gap: 10px
  }
`;

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 60px 0px 50px;
  @media (max-width: 540px) {
    padding: 20px 0px 0px 30px;
  }
`;

export const CardNotificationDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  padding: 40px 60px 0px 50px;
  @media (max-width: 540px) {
    padding: 20px 0px 0px 30px;
  }
`;

export const CardNotification = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px 0px 0px;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    svg{
      font-size: 16px;
    }
  }
 
`;


export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
 // align-items: center;
  align-items: flex-start;
  padding: 20px;
  width: 60%;
  height: 150px; 
  transition: 0.5s;
  border-radius: 8px;
  gap: 20px;
  background-color: ${props => props.theme.colors.textPrimary};
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  img{
    width: 60px;
    border-radius: 100%;
  }
  svg{
    color: ${props => props.theme.colors.background};;
    font-size: 80px;
  }
 
  @media (max-width: 1040px) {
    width: 80%;
    height: 130px;
    svg{
      font-size: 60px;
    }
  } 
  @media (max-width: 740px) {
    width: 90%;
    height: 110px;
    padding: 10px;
    svg{
      font-size: 20px;
    }
    img{
      width: 40px;
    }
  }
  .ContentText{
    display: flex;
    flex-direction: column;
  }
`;

export const info1Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: linear-gradient(#31314f, #23233c,#0a0c21, #0a0c21);
  @media (max-width: 600px) {
  display: flex;
  flex-direction: column;
  }
`;

export const infoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin: 30px 180px 0px 180px;
  @media (max-width: 1000px) {
    margin: 10px 40px 0px 40px;
  }
  @media (max-width: 600px) {
    margin: 0px 20px 0px 20px;
  }
`;

export const TeamDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b2b38;
  gap: 0px;
  height: 100%;
  margin-top: 100px;
  padding: 100px 160px 10px 160px;
   @media (max-width: 1000px) {
    margin: 140px 40px 0px 40px;
  }
  @media (max-width: 600px) {
    margin: 140px 20px 0px 20px;
    padding: 50px 10px 10px 10px;
  }
`;

export const TeamCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 42px;
  @media (max-width: 1150px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    gap: 20px;
  }
`;

export const info2Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  margin: 110px 100px 0px 100px;
   @media (max-width: 1000px) {
    margin: 140px 40px 0px 40px;
  }
  @media (max-width: 600px) {
    margin: 140px 20px 0px 20px;
  }
`;


export const DivImage = styled.div`
  width: 90%;
  height: 100%;
`;

export const divButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
`;
export const TitleNotification = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  cursor: default;
  @media (max-width: 1040px) {
    font-size: 16px;
  } 
  @media (max-width: 740px) {
    font-size: 14px;
  }
`;

export const TextNotification = styled.div`
  font-size: 16px;
  cursor: default;
  text-align: justify;
  @media (max-width: 740px) {
    font-size: 12px;
  } 
`;

export const Title = styled.h1`
  width: 60%;
  font-size: 26px;
  cursor: default;
  margin-top: 0px;
  @media (max-width: 1040px) {
    font-size: 22px;
  } 
  @media (max-width: 740px) {
    font-size: 14px;
  }
`;

export const Text1 = styled.div`
  font-size: 12px;
  cursor: default;
  text-align: justify;
  @media (max-width: 740px) {
    font-size: 12px;
  } 
`;

export const Text2 = styled.div`
  cursor: default;
  font-size: 16px;
  animation-direction: right;
  transition: all 0.5s ease-out;
  transform: translatex(-1000px);
 // opacity: 0;
 // transform: translateY(20px);
  &.show {
  opacity: 1;
  transform: translatex(150px);
  }
  
  &:hover {
   
    color: #F231A5
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 300px;
  gap:5px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${props => props.theme.colors.textPrimary};;
  color: #000000;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;
  width: 148px;
  &:hover {
    background-color: #F231A5
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Error = styled.p`
  color: #ff0000;
`;