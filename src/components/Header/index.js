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
        {/* <a>Home</a>
        <a>Sobre</a>
        <a>Projetos</a>
        <a>Contato</a> */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/caio-miranda-ofc/"
          rel="noreferrer"
        >
          <img src={LinkedinImg} alt="img-linkedin" />
        </a>

        <a
          target="_blank"
          href="https://github.com/CaioMiranda12"
          rel="noreferrer"
        >
          <img src={GithubImg} alt="img-github" />
        </a>
      </HeaderLinks>
    </ContainerMain>
  )
}

export default Header
