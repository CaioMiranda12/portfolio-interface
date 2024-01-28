import styled from 'styled-components'

export const ContainerMain = styled.div`
  padding: 20px;
`

export const InfoContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h3 {
    color: var(--Heading-color, #282938);
    font-family: Roboto;
    font-size: 21.333px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 32px */
  }

  h1 {
    color: var(--Heading-color, #282938);
    font-family: Roboto;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 76.8px */
  }
`

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  img {
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
  }

  img:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`
