import styled from 'styled-components'

export const ContainerMain = styled.div`
  /* border-top: 1px solid #000; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 80vh;

  background-color: #13131f;
`

export const InfoContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h3 {
    color: #8257e6;
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
  cursor: pointer;

  img {
    width: 100%;
    // height: 250px;
    height: 280px;
    filter: brightness(0.6); //deixo ou tiro?? (escurece a imagem do projeto)
  }
`

export const DivProject = styled.div`
  margin-left: 20px;
  background: ${props =>
    `  linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${props.image})`};
  width: 100%;
  height: 290px;
  background-size: cover;
  background-position: center;
  border-bottom: 4px solid #8257e6;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #f9f9f9;
    text-align: center;
    font-weight: 500;
    margin-bottom: 3px;
  }
`

export const DivButtons = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-bottom: 10px;

  p {
    color: #f9f9f9;
    background-color: #671267;
    padding: 3px;
  }
`

export const DivOpenButton = styled.div`
  display: flex;
  justify-content: center;

  a {
    display: flex;
    justify-content: center;
    font-size: 25px;
    background-image: linear-gradient(
      90deg,
      rgba(130, 87, 230, 0.8) 0.2%,
      rgba(121, 48, 190, 0.648) 100%
    );

    width: 300px;
    border-radius: 30px;
    border: 1px solid #000;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: #000;
  }

  a:hover {
    opacity: 0.8;
    transform: scale(1.15);
  }

  a:active {
    opacity: 0.6;
  }
`
