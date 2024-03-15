import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-color: #13131f;
  height: 90vh;
  padding-top: 100px;
`

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50%;

  div {
    h2 {
      font-size: 35px;
      font-weight: 500;
      color: #f9f9f9;
    }

    h1 {
      font-size: 35px;
      font-weight: 500;
      color: #8257e6;
    }

    p {
      color: #828282;
      font-size: 18px;
      font-weight: 500;
    }
  }

  img {
    width: 300px;
    border-radius: 150px;
  }
`

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContainerButton = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 20px;

  a:hover {
    background-image: linear-gradient(
      90deg,
      rgba(121, 48, 190, 0.648) 100%,
      rgba(130, 87, 230, 0.8) 0.2%
    );
    transform: scale(0.95);
  }
`

export const ButtonCv = styled.a`
  font-size: 13px;
  width: 140px;
  font-weight: 500;
  color: #f9f9f9;
  padding: 10px;
  background-image: linear-gradient(
    90deg,
    rgba(130, 87, 230, 0.8) 0.2%,
    rgba(121, 48, 190, 0.648) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
`

export const ButtonContactMe = styled.a`
  font-size: 13px;
  width: 160px;
  border: 0.1rem solid #8257e6;
  font-weight: 500;
  color: #f9f9f9;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
`

export const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  padding-top: 50px;

  h2 {
    font-size: 30px;
    color: #f9f9f9;
    font-weight: 600;
    text-align: center;
  }

  p {
    color: #828282;
    font-size: 17px;
    text-align: center;
    width: 55%;
    line-height: 180%;
  }
`
