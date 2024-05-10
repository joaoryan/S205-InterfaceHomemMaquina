import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Section, Container } from './styles'
import NavBar from '../../components/NavBar'
import * as Styled from './styles';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Section>
          <Outlet />
          <Styled.Footer>
            <p>&copy; 2024 Controle de Acesso Ltda - INATEL</p>
          </Styled.Footer>
        </Section>
      </Container>
    </>
  )
}

export default Layout;
