import styled from 'styled-components'

export const ContainerMain = styled.div`
  max-width: 100vw;
  height: 64vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--BG-Shade, #f5fcff);
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 100px;

  img {
    width: 500px;
    height: 500px;
  }

  div {
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
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: 80px;
    }

    p {
      color: var(--Body, #1c1e53);
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px;
      width: 300px;
      margin-bottom: 30px;
    }

    a {
      border-radius: 5.333px;
      background: var(--Primary, #5e3bee);
      padding: 5px;

      color: var(--White, #fff);
      font-family: Roboto;
      font-size: 21.333px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 32px */
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }
  }
`

export const SectionSkiils = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  gap: 45px;

  h3 {
    color: var(--Heading-color, #282938);
    text-align: center;
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
`

export const ContainerSkills = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  div {
    border-radius: 10.667px;
    background: var(--BG-Shade, #f5fcff);

    overflow: hidden;
  }

  img {
    width: 200px;
    height: 200px;

    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
  }

  img:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`
