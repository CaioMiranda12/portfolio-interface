import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  width: 100vw;
  height: 80vh;

  img {
    width: 500px;
    height: 500px;
  }

  div {
    width: 50%;

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
      font-size: 64px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 76.8px */
    }
  }
`