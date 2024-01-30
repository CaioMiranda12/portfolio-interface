import styled from 'styled-components'

export const ContainerMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  height: 8vh;

  button {
    padding: 10px;
    background: transparent;
    color: #fff;
    font-size: 23px;
    border: none;

    span {
      color: #f5a940;
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
    font-size: 16px;
    cursor: pointer;
  }

  a:hover {
    color: #f5a940;
    transition: 0.3s;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.1);
  }
`
