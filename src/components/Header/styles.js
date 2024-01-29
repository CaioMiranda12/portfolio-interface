import styled from 'styled-components'

export const ContainerMain = styled.div`
  height: 8vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 30px;
  background: #fff;
  box-shadow: 0px 5.333px 80px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding-right: 10px;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`

export const PageLink = styled.a`
  color: ${props =>
    props.isActive ? 'var(--Primary, #5E3BEE)' : 'var(--Body, #1c1e53)'};
  font-family: Roboto;
  font-size: 21.333px;
  font-style: normal;
  font-weight: ${props => (props.isActive ? 'bold' : 400)};
  line-height: 150%;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    width: 40px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 30px;
    }
  }
`

export const ContactButton = styled.a`
  color: var(--Primary, #5e3bee);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 32px */
  text-decoration: none;

  border-radius: 5.333px;
  border: 1.333px solid var(--Primary, #5e3bee);
  padding: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 3px;
  }
`
