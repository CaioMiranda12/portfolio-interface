import styled from 'styled-components'

export const ContainerAll = styled.div``

export const DivFirst = styled.div``

export const ContainerMain = styled.div`
  /* background-color: #171717; */
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #7b7b6f 0,
    #787666 8.33%,
    #75705d 16.67%,
    #736953 25%,
    #706249 33.33%,
    #6e593e 41.67%,
    #6b5033 50%,
    #684629 58.33%,
    #663d22 66.67%,
    #65341c 75%,
    #632b18 83.33%,
    #622217 91.67%,
    #601817 100%
  );
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    max-width: 100vw;

    h2 {
      color: #fff;
      font-size: 40px;
      font-weight: 500;
      text-align: center;
    }

    h2:hover {
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.1);
      transition: 0.5s;
    }

    h1 {
      font-size: 65px;
      color: #f5a940;
      text-align: center;
    }

    h1:hover {
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.1);
      transition: 0.5s;
    }

    h3 {
      color: #fbead5;
      font-size: 35px;
      transition: 0.5s;
      text-align: center;
    }

    h3:hover {
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.1);
    }
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

  a {
    cursor: pointer;
  }

  a:hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
    transition: 0.3s;
  }

  img {
    width: 60px;
  }
`
