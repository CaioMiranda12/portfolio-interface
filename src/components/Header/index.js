import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import GithubImg from '../../assets/github.png'
import LinkedinImg from '../../assets/linkedin.png'
import Portfolio from '../../assets/Portfolio.pdf'
import {
  HeaderLinks,
  ContactButton,
  ContainerMain,
  PageLink,
  SocialLinks
} from './styles'

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <ContainerMain>
      <div></div>

      <HeaderLinks>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Inicio
        </PageLink>
        <PageLink
          onClick={() => navigate('/sobre')}
          isActive={pathname.includes('/sobre')}
        >
          Sobre
        </PageLink>
        <PageLink
          onClick={() => navigate('/projetos')}
          isActive={pathname.includes('/projetos')}
        >
          Projetos
        </PageLink>
      </HeaderLinks>

      <SocialLinks>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/caio-miranda-ofc/"
          rel="noreferrer"
        >
          <img src={LinkedinImg} alt="linkedin-img" />
        </a>
        <a
          target="_blank"
          href="https://github.com/CaioMiranda12"
          rel="noreferrer"
        >
          <img src={GithubImg} alt="github-img" />
        </a>

        <ContactButton
          href={Portfolio}
          download
          style={{ textDecoration: 'none' }}
        >
          Portfolio
        </ContactButton>
      </SocialLinks>
    </ContainerMain>
  )
}

export default Header
