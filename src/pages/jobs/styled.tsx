import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
  height: 95vh;
  padding: 0px 00px 0px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  padding: 10px 20px 0px 20px;
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 50px;
  gap: 20px;
  a{
    text-decoration: none;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px
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
    font-size: 30px;
  }
  &.expand{
    transition: 0.5s;
    height: 320px; 
  }
  .videoClass{
    width: 400px;
  }
 
  @media (max-width: 1040px) {
    width: 80%;
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
    .videoClass{
      width: 200px;
    } 
  }
  .ContentText{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const IconArrowDown = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Title1 = styled.div`
  width: 100%;
  font-size: 24px;
  margin-top: 0px;
  @media (max-width: 1040px) {
    font-size: 22px;
  } 
  @media (max-width: 740px) {
    font-size: 14px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 22px;
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