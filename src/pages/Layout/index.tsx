import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Section, Container } from './styles'
import Background from '../../styles/Background';

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
