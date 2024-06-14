import * as Styled from './styled';
import { useNavigate } from 'react-router';
import { RiContactsFill } from 'react-icons/ri'
import { FaMoneyCheck } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import TeamCard from '../../components/Equip';
import Header from '../../components/Hader';
import image1 from '../../assets/image/joao-ryan.png'

export function Home(): JSX.Element {

  return (
    <><Styled.Container>
      <Styled.backgroundGif>
        <Header page={`jobs`} />
        <Styled.CardDiv>
          <Styled.CardButtonDiv>
            <Styled.CardButton>
              <img src={image1} />
              <Styled.Title>
                Olá Joao
              </Styled.Title>
            </Styled.CardButton>
            <Styled.CardNotificationDiv>
              <Styled.CardNotification>
                <div>
                  <FaMoneyCheck />
                  <Styled.TitleNotification>{'Tessouraria'}</Styled.TitleNotification>
                </div>
                <div>
                  <Styled.TextNotification>{'Você possui um boleto com vencimento no dia 12/05'}</Styled.TextNotification>
                </div>
              </Styled.CardNotification>

              <Styled.CardNotification>
                <div>
                  <IoLibrary />
                  <Styled.TitleNotification>{'Biblioteca'}</Styled.TitleNotification>
                </div>
                <div>
                  <Styled.TextNotification>{'Você possui um armario reservado para hoje'}</Styled.TextNotification>
                </div>
              </Styled.CardNotification>
              <Styled.CardNotification>
                <div>
                  <FaMoneyCheck />
                  <Styled.TitleNotification>{'Nota'}</Styled.TitleNotification>
                </div>
                <div>
                  <Styled.TextNotification>{'Prova I S205 - 86'}</Styled.TextNotification>
                </div>
              </Styled.CardNotification>
            </Styled.CardNotificationDiv>
          </Styled.CardButtonDiv>
        </Styled.CardDiv>
      </Styled.backgroundGif>
      <Styled.info1Div>
        <div>
          <Styled.infoDiv>
            <Styled.Title>Suas aulas de hoje:</Styled.Title>
            <TeamCard Title={'S205'} Text={'19h30 - Lab 1.2 - VI'} timeAnimate={1} />
            <TeamCard Title={'M019'} Text={'21h30 - Sala 04 - I'} timeAnimate={1.5} />
            <TeamCard Title={'C145'} Text={'17h30 - Lab 1.3 - VI'} timeAnimate={2} />
          </Styled.infoDiv>
          <Styled.infoDiv>
            <Styled.Title>Sua próxima prova:</Styled.Title>
            <TeamCard Title={'S205'} Text={'15/05/2024'} timeAnimate={1} />
          </Styled.infoDiv>
        </div>
        <div>
          <Styled.infoDiv>
            <Styled.Title>Tarefa</Styled.Title>
            <TeamCard Title={'S205'} Text={'15/05/2024'} timeAnimate={1} />
          </Styled.infoDiv>
        </div>

      </Styled.info1Div>

    </Styled.Container >

    </>
  );
};
