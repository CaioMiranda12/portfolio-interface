import styled from 'styled-components'

export const ContainerMain = styled.div`
  /* border-top: 1px solid #000; */
  padding: 20px;
  display: flex;
  flex-direction: column;

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
`

export const InfoContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h3 {
    color: #f5a940;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 32px */
  }

  h1 {
    color: #fff;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 76.8px */
  }
`

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  img {
    width: 100%;
    height: 150px;
  }
`

export const InfoProjectDiv = styled.div`
  width: 400px;
  height: 330px;
  background-color: #f3c07f;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  div {
    padding: 5px;
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    font-weight: 500;
    margin-top: 10px;
  }
`

export const CardButtons = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  div {
    display: flex;
    gap: 5px;
  }

  p {
    background-color: #c5873e;
    padding: 10px;
    border-radius: 10px;
  }

  button {
    border: none;
    font-size: 18px;
    width: 90px;
    border-radius: 30px;

    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }

  button:active {
    opacity: 0.6;
  }
`
