import React from 'react'
import { useNavigate } from 'react-router-dom'

import CssImg from '../../assets/css.png'
import HtmlImg from '../../assets/html.png'
import JsImg from '../../assets/javascript.png'
import CaioImg from '../../assets/me.jpg'
import NodeImg from '../../assets/node.png'
import Reactimg from '../../assets/react.png'
import {
  ContainerMain,
  InfoContainer,
  ContainerSkills,
  SectionSkiils
} from './styles'

export function Home() {
  const navigate = useNavigate()
  return (
    <>
      <ContainerMain>
        <InfoContainer>
          <div>
            <h3>Olá! Eu sou Caio</h3>
            <h1>Programador Full-Stack</h1>
            <p>
              Estudo programação no curso DevClub, e trabalho principalmente com
              HTML, CSS, Javascript, React e Node.js
            </p>

            <a onClick={() => navigate('/sobre')}>Saiba mais</a>
          </div>

          <img src={CaioImg} alt="imagem-do-caio" />
        </InfoContainer>
      </ContainerMain>

      <SectionSkiils>
        <div>
          <h3>Tecnologias</h3>
          <h1>Minhas Especialidades</h1>
        </div>

        <ContainerSkills>
          <div>
            <img src={HtmlImg} alt="imagem-do-html" />
          </div>

          <div>
            <img src={CssImg} alt="imagem-do-css" />
          </div>

          <div>
            <img src={JsImg} alt="imagem-do-javascript" />
          </div>

          <div>
            <img src={Reactimg} alt="imagem-do-react" />
          </div>

          <div>
            <img src={NodeImg} alt="imagem-do-node" />
          </div>
        </ContainerSkills>
      </SectionSkiils>
    </>
  )
}
