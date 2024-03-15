import React from 'react'

import Cv from '../../assets/cv2024.pdf'
import GithubImg from '../../assets/github-white.png'
import imgPessoa from '../../assets/img-principal.svg'
import LinkedinImg from '../../assets/linkedin-white.png'
import CaioImg from '../../assets/me.jpg'
import Header from '../../components/Header'
import { Skills } from '../Habilidades'
import { Projetos } from '../Projetos'
import {
  ContainerMain,
  DivInfo,
  ContainerName,
  DivAbout,
  ContainerButton,
  ButtonCv,
  ButtonContactMe
} from './styles'

export function Home() {
  return (
    <ContainerMain>
      <div>
        <DivInfo>
          <ContainerName>
            <div>
              <h2>Olá eu sou o</h2>
              <h1>Caio Miranda :D</h1>
              <p>Desenvolvedor Full-Stack</p>
            </div>
            <ContainerButton>
              <ButtonCv
                target="_blank"
                href="https://drive.google.com/file/d/1jHQLuMdMekve1fyzwHQUDpzyeDxw6T8J/view?usp=sharing"
              >
                Download CV
              </ButtonCv>
              <ButtonContactMe
                target="_blank"
                href="https://www.linkedin.com/in/caio-miranda-ofc/"
              >
                Entre em contato
              </ButtonContactMe>
            </ContainerButton>
          </ContainerName>

          <img src={CaioImg} alt="imagem-de-perfil" />
        </DivInfo>

        <DivAbout>
          <h2>Sobre</h2>
          <p>
            Me chamo Caio, sou um programador <span>Full-Stack,</span>
            trabalhando principalmente com{' '}
            <span>
              React, Node.js, CSS, HTML, API REST, PostgresSQL e MongoDB
            </span>
            . Estudo desenvolvimento web no curso DevClub há mais de um ano. A
            partir da integração de tais tecnologias, construí um site completo
            de uma hamburgueria, com sistema de login, pedidos, ofertas e
            carrinho, que inclusive também criei a API.
          </p>
        </DivAbout>
      </div>

      <Skills />

      <Projetos />
    </ContainerMain>
  )
}
