import React from 'react'

import CssImg from '../../assets/css.png'
import GithubImg from '../../assets/github-white.png'
import HtmlImg from '../../assets/html2.png'
import imgPessoa from '../../assets/img-principal.svg'
import JavascriptImg from '../../assets/javascript2.svg'
import LinkedinImg from '../../assets/linkedin-white.png'
import MaterialImg from '../../assets/materialui.png'
import MongoImg from '../../assets/mongodb.svg'
import NodeImg from '../../assets/node.png'
import PostgresImg from '../../assets/postgressql.png'
import Programmer from '../../assets/programmer.png'
import ReactImg from '../../assets/react.png'
import Header from '../../components/Header'
import { ContainerMain, ContainerSkills, DivSkill } from './styles'

export function Skills() {
  return (
    <ContainerMain>
      <h2>Habilidades</h2>

      <ContainerSkills>
        <DivSkill>
          <div>
            <h3>HTML</h3>
            <img src={HtmlImg} />
          </div>
        </DivSkill>

        <DivSkill>
          <div>
            <h3>CSS</h3>
            <img src={CssImg} />
          </div>
        </DivSkill>

        <DivSkill>
          <div>
            <h3>Javascript</h3>
            <img src={JavascriptImg} />
          </div>
        </DivSkill>

        <DivSkill>
          <div>
            <h3>React</h3>
            <img src={ReactImg} />
          </div>
        </DivSkill>

        <DivSkill>
          <div>
            <h3>Node.js</h3>
            <img src={NodeImg} />
          </div>
        </DivSkill>

        <DivSkill>
          <div>
            <h3>MaterialUI</h3>
            <img src={MaterialImg} />
          </div>
        </DivSkill>

        <DivSkill>
          <div>
            <h3>PostgresSQL</h3>
            <img src={PostgresImg} />
          </div>
        </DivSkill>

        <DivSkill>
          <div>
            <h3>MongoDB</h3>
            <img src={MongoImg} />
          </div>
        </DivSkill>
      </ContainerSkills>
    </ContainerMain>
  )
}
