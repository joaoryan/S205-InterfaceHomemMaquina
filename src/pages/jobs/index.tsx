import * as Styled from './styled';
import Header from '../../components/Hader';
import image1 from '../../assets/image/joao-ryan.png'
import microsoftLogo from '../../assets/image/microsoft-logo.svg'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';


export function Jobs(): JSX.Element {
  const [cardExpandId, setCardExpandId] = useState<Number>();
  const jobs = [
    {
      id: 1,
      name: 'Microsoft',
      description: 'Desenvolvedor .Net Fullstack Sênior (Remoto)',
      requirements: 'Remoto, Brasil, Inglês, Especialista, 5 anos, Real',
      video: 'https://www.youtube.com/embed/lOTmYcxCxjU?si=jC_Wj3eBWHg-2Lsr'
    },
    {
      id: 2,
      name: 'Microsoft',
      description: 'Desenvolvedor .Net Fullstack Sênior (Remoto)',
      requirements: 'Remoto, Brasil, Inglês, Especialista, 5 anos, Real',
      video: 'https://www.youtube.com/embed/lOTmYcxCxjU?si=jC_Wj3eBWHg-2Lsr'
    }
  ]
  return (
    <>
      <Styled.Container>
        <Header page={`/`} />
        <Styled.Content>
          <Styled.CardDiv>
            <Styled.Title1>Vagas</Styled.Title1>
            {
              jobs.map((item) => (
                <Styled.Card className={item.id === cardExpandId ? 'expand' : 'notExpand'} onClick={() => setCardExpandId(item.id === cardExpandId ? 0 : item.id)}>
                  <img src={microsoftLogo} />
                  <div className='ContentText'>
                    <Styled.Text1>
                      {item.name}
                    </Styled.Text1>
                    <Styled.Title>
                      {item.description}
                    </Styled.Title>
                    <Styled.Text1>
                      {item.requirements}
                    </Styled.Text1>
                    {
                      item.id === cardExpandId &&
                      <div>
                        <iframe
                          width="auto" height="180"
                          src={item.video}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" />
                      </div>
                    }
                    <Styled.IconArrowDown>
                      {
                        item.id === cardExpandId ?
                          <IoIosArrowUp />
                          :
                          <IoIosArrowDown />
                      }
                    </Styled.IconArrowDown>
                  </div>
                </Styled.Card>
              ))}
          </Styled.CardDiv>
        </Styled.Content>
      </Styled.Container >
    </>
  );
};