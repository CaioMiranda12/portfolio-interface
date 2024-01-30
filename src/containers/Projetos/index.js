import { CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'

import CodeBurger from '../../assets/codeburger.png'
import DevHamburgueria from '../../assets/devhamburger.png'
import Tempo from '../../assets/tempo.png'
import {
  ContainerMain,
  InfoContainer,
  ContainerProjects,
  InfoProjectDiv,
  CardButtons
} from './styles'

export function Projetos() {
  return (
    <div>
      <ContainerMain>
        <InfoContainer>
          <h3>Projetos Recentes</h3>
          <h1>Meu Portfolio</h1>
        </InfoContainer>

        <ContainerProjects>
          <InfoProjectDiv>
            <img src={CodeBurger} alt="codeburger-img" />
            <div>
              <h2>CodeBurger</h2>
              <p>
                Site completo de Hamburgueria, com sistema de login, pedidos e
                carrinho, com API própria
              </p>
            </div>

            <CardButtons>
              <div>
                <p>React</p>
                <p>Node.js</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>

              <button>Abrir</button>
            </CardButtons>
          </InfoProjectDiv>

          <InfoProjectDiv>
            <img src={CodeBurger} alt="codeburger-img" />
            <div>
              <h2>DevBurger2</h2>
              <p>
                Site completo de Hamburgueria, com sistema de login, pedidos e
                carrinho, com API própria
              </p>
            </div>

            <CardButtons>
              <div>
                <p>React</p>
                <p>Node.js</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>

              <button>Abrir</button>
            </CardButtons>
          </InfoProjectDiv>

          <InfoProjectDiv>
            <img src={CodeBurger} alt="codeburger-img" />
            <div>
              <h2>Previsão do Tempo</h2>
              <p>
                Site completo de Hamburgueria, com sistema de login, pedidos e
                carrinho, com API própria
              </p>
            </div>

            <CardButtons>
              <div>
                <p>React</p>
                <p>Node.js</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>

              <button>Abrir</button>
            </CardButtons>
          </InfoProjectDiv>
        </ContainerProjects>
      </ContainerMain>
    </div>
  )
}
