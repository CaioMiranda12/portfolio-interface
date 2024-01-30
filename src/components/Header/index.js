import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import GithubImg from '../../assets/github.png'
import LinkedinImg from '../../assets/linkedin.png'
import Portfolio from '../../assets/Portfolio.pdf'
import { ContainerMain, HeaderLinks } from './styles'

function Header() {
  // const navigate = useNavigate()
  // const { pathname } = useLocation()

  return (
    <ContainerMain>
      <button>
        <span>Caio</span> Miranda
      </button>
      <HeaderLinks>
        <a>Home</a>
        <a>Sobre</a>
        <a>Projetos</a>
        <a>Contato</a>
      </HeaderLinks>
    </ContainerMain>
  )
}

export default Header
