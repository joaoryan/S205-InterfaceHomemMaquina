import * as Styled from './styled';
import { useNavigate } from 'react-router';
import { RiContactsFill } from 'react-icons/ri'
import { FaMoneyCheck } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import TeamCard from '../../components/Equip';
import Header from '../../components/Hader';


export function Jobs(): JSX.Element {

  return (
    <>
      <Styled.Container>
        <Header page={`/`} />
      </Styled.Container>
    </>
  );
};
