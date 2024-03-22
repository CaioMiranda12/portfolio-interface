import React from 'react'
import Carousel from 'react-elastic-carousel'

import CodeBurger from '../../assets/codeburger.png'
import ConversorMoedas from '../../assets/conversormoedas.png'
import DevBills from '../../assets/devb.png'
import DevBurger from '../../assets/devhamburger.png'
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
                <h1>CodeBurger</h1>
                <DivButtons>
                  <p>React</p>
                  <p>Node.js</p>
                  <p>Express</p>

                  <p>Docker</p>
                  <p>PostgreSQL</p>
                  <p>MongoDB</p>
                </DivButtons>

                <DivOpenButton>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7174057842935513091/"
                    rel="noreferrer"
                  >
                    Abrir
                  </a>
                </DivOpenButton>
              </div>
            </DivProject>

            <DivProject image={DevBills}>
              <div>
                <h1>DevBills</h1>
                <DivButtons>
                  <p>React</p>
                  <p>Typescript</p>
                  <p>Vite</p>
                  <p>Radix-UI</p>
                  <p>Javascript</p>
                  <p>Styled-components</p>
                </DivButtons>

                <DivOpenButton>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7176993607889862656/"
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

            <DivProject image={DevBurger}>
              <div>
                <h1>DevBurger</h1>
                <DivButtons>
                  <p>Javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </DivButtons>

                <DivOpenButton>
                  <a
                    target="_blank"
                    href="https://caiomiranda12.github.io/DevHamburgueria/"
                    rel="noreferrer"
                  >
                    Abrir
                  </a>
                </DivOpenButton>
              </div>
            </DivProject>

            <DivProject image={Tempo}>
              <div>
                <h1>Previsão do Tempo</h1>
                <DivButtons>
                  <p>Javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </DivButtons>

                <DivOpenButton>
                  <a
                    target="_blank"
                    href="https://caiomiranda12.github.io/PrevisaoDoTempo/"
                    rel="noreferrer"
                  >
                    Abrir
                  </a>
                </DivOpenButton>
              </div>
            </DivProject>

            <DivProject image={ConversorMoedas}>
              <div>
                <h1>Conversor de Moedas</h1>
                <DivButtons>
                  <p>Javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </DivButtons>

                <DivOpenButton>
                  <a
                    target="_blank"
                    href="https://caiomiranda12.github.io/Conversor-de-Moedas/"
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
