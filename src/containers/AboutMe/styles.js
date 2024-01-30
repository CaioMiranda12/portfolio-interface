import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-image: radial-gradient(
    circle at 50% -20.71%,

    #601817 0,
    #622217 8.33%,
    #632b18 16.67%,
    #65341c 25%,
    #663d22 33.33%,
    #684629 41.67%,
    #6b5033 50%,
    #6e593e 58.33%,
    #706249 66.67%,
    #736953 75%,
    #75705d 83.33%,
    #787666 91.67%,
    #7b7b6f 100%
  );
  display: flex;
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
    h3 {
      color: #f7a839;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 32px */
      width: max-content;
    }

    h1 {
      color: #fff;
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 76.8px */
      width: max-content;
    }

    p {
      width: 700px;
      font-weight: 500;
      color: #fde9af;

      span {
        color: #fff;
        font-size: 18px;
      }
    }
  }
`

export const ContainerText = styled.div`
  margin-top: 40px;
`

export const DivAboutMe = styled.div``
