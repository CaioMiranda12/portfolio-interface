import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-color: #171717;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  gap: 50px;

  max-width: 100vw;
  height: 100vh;

  img {
    width: 400px;
    height: 400px;
    border-radius: 270px;

    @media (max-width: 768px) {
      width: 0px;
    }
  }

  div {
    margin-bottom: 40px;
    h3 {
      color: #f7a839;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 32px */
      text-align: center;
    }

    h1 {
      color: #fff;
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 76.8px */
      text-align: center;
    }
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */

  p {
    width: 700px;
    font-weight: 500;
    color: #fde9af;

    span {
      color: #fff;
      font-size: 18px;
    }
  }
`

export const DivAboutMe = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;
`
