import React from 'react'

import CaioImg from '../../assets/me.jpg'
import videoBg from '../../assets/videoBg.mp4'
import { ContainerMain, ContainerText, DivAboutMe } from './styles'

export function AboutMe() {
  return (
    <div>
      <ContainerMain>
        <img src={CaioImg} alt="imagem-do-caio" />

        <DivAboutMe>
          <h3>About</h3>
          <h1>Sobre</h1>

          <ContainerText>
            <p>
              Me chamo Caio, sou um programador <span>Full-Stack,</span>
              trabalhando principalmente com{' '}
              <span>
                React, Node.js, CSS, HTML, API REST, PostgresSQL e MongoDB
              </span>
              . Estudo desenvolvimento web no curso DevClub há mais de um ano. A
              partir da integração de tais tecnologias, construí um site
              completo de uma hamburgueria, com sistema de login, pedidos,
              ofertas e carrinho, que inclusive também criei a API.
            </p>

            <p style={{ marginTop: 15 }}>
              Tenho constante vontade de aprender cada vez mais da área de
              programação, potencializando para o lado do desenvolvimento web.
              Estou no terceiro semestre do curso de Ciência da Computação no
              FBUni
            </p>
          </ContainerText>
        </DivAboutMe>
      </ContainerMain>
    </div>
  )
}
