import React from 'react'

import GithubImg from '../../assets/github-white.png'
import LinkedinImg from '../../assets/linkedin-white.png'
import Programmer from '../../assets/programmer.png'
import videoBg from '../../assets/videoBg.mp4'
import Header from '../../components/Header'
import { AboutMe } from '../AboutMe'
import { Projetos } from '../Projetos'
import { ContainerMain, SocialLinks, ContainerAll, DivFirst } from './styles'

export function Home() {
  return (
    <ContainerAll>
      <Header />

      <ContainerMain>
        <DivFirst>
          <div>
            <h2>Olá, Sou Caio Miranda</h2>
            <h1>Desenvolvedor Full-Stack</h1>
            <h3>React & Node.js</h3>
          </div>

          <SocialLinks>
            <a
              href="https://www.linkedin.com/in/caio-miranda-ofc/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinImg} />
            </a>
            <a
              href="https://github.com/CaioMiranda12?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubImg} />
            </a>
          </SocialLinks>
        </DivFirst>

        {/* <img src={Programmer} /> */}
      </ContainerMain>

      <AboutMe />

      <Projetos />
    </ContainerAll>
  )
}
