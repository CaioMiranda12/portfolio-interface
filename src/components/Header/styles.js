import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  height: 11vh;

  button {
    padding: 10px;
    background: transparent;
    color: #fff;
    font-size: 33px;
    border: none;

    span {
      color: #8257e6;
    }
  }

  button:hover {
    transition: 0.6s;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.2);
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: #e2e2e2;
    font-size: 18px;
    cursor: pointer;
  }

  a:hover {
    color: #8257e6;
    transition: 0.3s;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
  }

  img {
    width: 50px;
  }

  img:hover {
    color: #8257e6;
    transition: 0.3s;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
  }
`
