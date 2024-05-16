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

        </Section>
      </Container>
    </>
  )
}

export default Layout;
