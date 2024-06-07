import * as Styled from './styled';
import Header from '../../components/Hader';
import image1 from '../../assets/image/joao-ryan.png'
import microsoftLogo from '../../assets/image/microsoft-logo.svg'

export function Jobs(): JSX.Element {

  return (
    <>
      <Styled.Container>
        <Header page={`/`} />
        <Styled.Content>

          <Styled.CardDiv>
            <Styled.Title>Vagas</Styled.Title>
            <Styled.Card>
              <img src={microsoftLogo} />
              <div className='ContentText'>
                <Styled.Text1>
                  Microsoft
                </Styled.Text1>
                <Styled.Title>
                  Desenvolvedor .Net Fullstack Sênior (Remoto)
                </Styled.Title>
                <Styled.Text1>
                  Remoto, Brasil, Inglês, Especialista, 5 anos, Real
                </Styled.Text1>
              </div>
            </Styled.Card>
            <Styled.Card>
              <img src={microsoftLogo} />
              <div className='ContentText'>
                <Styled.Text1>
                  Microsoft
                </Styled.Text1>
                <Styled.Title>
                  Desenvolvedor .Net Fullstack Sênior (Remoto)
                </Styled.Title>
                <Styled.Text1>
                  Remoto, Brasil, Inglês, Especialista, 5 anos, Real
                </Styled.Text1>
              </div>
            </Styled.Card>
          </Styled.CardDiv>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};
