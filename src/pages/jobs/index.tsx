import * as Styled from './styled';
import Header from '../../components/Hader';
import image1 from '../../assets/image/joao-ryan.png'

export function Jobs(): JSX.Element {

  return (
    <>
      <Styled.Container>
        <Header page={`/`} />
        <Styled.Title>Vagas</Styled.Title>
        <Styled.Content>
          <Styled.CardDiv>
            <Styled.Card>
              <img src={image1} />
              <Styled.Title>
                Desenvolvedor .Net Fullstack Sênior (Remoto)
              </Styled.Title>
            </Styled.Card>
          </Styled.CardDiv>
        </Styled.Content>
      </Styled.Container>
    </>
  );
};
