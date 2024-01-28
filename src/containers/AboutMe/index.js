import React from 'react'

import CaioImg from '../../assets/me.jpg'
import { ContainerMain } from './styles'

export function AboutMe() {
  return (
    <div>
      <ContainerMain>
        <img src={CaioImg} alt="imagem-do-caio" />

        <div>
          <h3>About</h3>
          <h1>Sobre mim</h1>
          <p>
            Olá! Meu nome é Caio, um entusiasta da programação e um
            desenvolvedor Full Stack dedicado. Encaro a busca dos meus objetivos
            como uma missão pessoal e estou sempre disposto a superar desafios
            com dedicação inabalável. Minha trajetória na área da programação
            teve início no ano de 2022, quando ingressei no curso DevClub. Foi
            nesse ambiente que cultivei minhas habilidades como programador,
            alcançando um desenvolvimento notável. Ao longo da minha jornada,
            adquiri proficiência em uma ampla gama de tecnologias, incluindo
            HTML, CSS, JavaScript, React, Node, API REST, Postgres, MongoDB e
            Sequelize. Essas competências me permitiram realizar uma série de
            projetos significativos, que incluem o desenvolvimento de uma
            plataforma de pedidos para uma hamburgueria, a criação de um site de
            previsão do tempo e a implementação de um conversor de moedas em
            tempo real, aproveitando o uso de uma API externa. Meu compromisso
            com a constante evolução me motiva a continuar aprendendo e
            aprimorando minhas habilidades como desenvolvedor Full Stack. Estou
            ansioso para enfrentar novos desafios e expandir minha experiência
            profissional. Gostaria de salientar que estou disponível para
            projetos de freelance e aberto a discutir futuras colaborações.
          </p>
        </div>
      </ContainerMain>
    </div>
  )
}
