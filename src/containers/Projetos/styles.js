import styled from 'styled-components'

export const ContainerMain = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const InfoContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;

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
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 76.8px */
  }
`

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  .css-46bh2p-MuiCardContent-root {
    @media (max-width: 768px) {
      padding: 0px;
    }
  }

  .css-r40f8v-MuiTypography-root {
    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }

  .css-h93ljk-MuiTypography-root {
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  img {
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;

    @media (max-width: 768px) {
      height: 120px;
    }
  }

  img:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  a {
    background-color: green;
    color: #fff;
    font-size: 20px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    width: 80px;
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`
