import { CardActionArea, CardActions } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import CodeBurger from '../../assets/codeburger.png'
import SiteDireito from '../../assets/direito-site.png'
import Tempo from '../../assets/tempo.png'
import {
  ContainerMain,
  InfoContainer,
  ContainerProjects,
  DivProject,
  DivButtons,
  DivOpenButton
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
          <Carousel itemsToShow={3}>
            <DivProject image={CodeBurger}>
              <div>
                <h1>CodeBurger (FrontEnd)</h1>
                <DivButtons>
                  <p>React</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Javascript</p>
                </DivButtons>

                <DivOpenButton>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7142666715657637890/"
                    rel="noreferrer"
                  >
                    Abrir
                  </a>
                </DivOpenButton>
              </div>
            </DivProject>

            <DivProject image={CodeBurger}>
              <div>
                <h1>CodeBurger (BackEnd)</h1>
                <DivButtons>
                  <p>Node.js</p>
                  <p>Express</p>
                  <p>ORM</p>
                  <p>PostgreSQL</p>
                  <p>MongoDB</p>
                </DivButtons>

                <DivOpenButton>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7173120016043782144/"
                    rel="noreferrer"
                  >
                    Abrir
                  </a>
                </DivOpenButton>
              </div>
            </DivProject>

            <DivProject image={SiteDireito}>
              <div>
                <h1>Site de Estudo - Direito</h1>
                <DivButtons>
                  <p>React</p>
                  <p>Styled-Components</p>
                  <p>Javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </DivButtons>

                <DivOpenButton>
                  <a
                    target="_blank"
                    href="https://direito-adm-2.vercel.app/"
                    rel="noreferrer"
                  >
                    Abrir
                  </a>
                </DivOpenButton>
              </div>
            </DivProject>
          </Carousel>
        </ContainerProjects>
      </ContainerMain>
    </div>
  )
}
