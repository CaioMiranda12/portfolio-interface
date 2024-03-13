import styled from 'styled-components'

export const ContainerMain = styled.div`
  background-color: #13131f;
  height: 60vh;
  padding-top: 100px;

  h2 {
    font-size: 30px;
    color: #f9f9f9;
    font-weight: 600;
    text-align: center;
  }
`

export const ContainerSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  height: 20vh;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 10px;

  div:hover {
    transition: 0.8s;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.1);
  }
`

export const DivSkill = styled.div`
  div {
    text-align: center;
    background-color: #212121;
    width: 125px;
    aspect-ratio: 1;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 2.5rem;
    cursor: pointer;
    border-bottom: 4px solid #8257e6;

    h3 {
      color: #8257e6;
      font-weight: 500;
      font-size: 15px;
      padding-bottom: 10px;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }
`
