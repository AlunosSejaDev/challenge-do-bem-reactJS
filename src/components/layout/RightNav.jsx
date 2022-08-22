import React from "react"
import styled from "styled-components"

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    color: ${props => props.theme.white};
    font-size: 38px;
    font-weight: bold;
    gap: 50px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    
    li {
      padding: 18px 10px;
      transition: all 0.3s;

        :hover {
        color: ${props => props.theme.primaryHover};
      }
    }

    @media (max-width: 1128px) {
      flex-flow: column nowrap;
      background-color: ${props => props.theme.primary};
      position: fixed;
      background: rgba(1, 107, 155, 0.70);
      backdrop-filter: blur(14px);
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;

      li {
        color: ${props => props.theme.white};
      }
    }
`

const RightNav = ({ open }) => {
  return (
    <StyledUl open={open}>
      <li>Home</li>
      <li>Sobre nós</li>
      <li>Instituições parceiras</li>
      <li>Desafio do mês</li>
      <li>Saiba mais</li>
    </StyledUl>
  )
}

export default RightNav