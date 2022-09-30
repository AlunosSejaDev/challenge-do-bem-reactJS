import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    color: ${props => props.theme.white};
    gap: 50px;
    align-items: center;
    cursor: pointer;
    
    li {
      display: flex;
      text-align: center;
      justify-content: center;
      transition: all 0.3s;
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
      gap: 60px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;

      li {
        color: ${props => props.theme.white};
      }
    }

  a {
    color: ${props => props.theme.white};
    font-weight: bold;
    font-size: 24px;
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    letter-spacing: 0.5px;
    padding: 0 10px;
  }

  a:after {
    content: "";
    position: absolute;
    background-color: ${props => props.theme.primaryHover};
    height: 6px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  a:hover:after{
    width: 100%;
  }
`

const RightNav = ({ open }) => {
  return (
    <StyledUl open={open}>
      <li>
        <Link to='home' smooth={true} offset={0} duration={800} >Home</Link>
      </li>
        <li>
          <Link to='about' smooth={true} offset={-10} duration={800} >Sobre nós</Link>
        </li>
          <li>
            <Link to='monthlyChallenges' smooth={true} offset={-25} duration={800} >Desafio do mês</Link>
          </li>
            <li>
              <Link to='institutions' smooth={true} offset={10} duration={800} >Instituições apoiadas</Link>
            </li>
            <li>
              <Link to='donation' smooth={true} offset={10} duration={800} >Doações</Link>
            </li>
              <li>
                <Link to='knowMore' smooth={true} offset={-70} duration={800} >Saiba mais</Link>
              </li>
                <li>
                  <Link to='contact' smooth={true} offset={50} duration={800} >Fale conosco</Link>
                </li>
    </StyledUl>
  )
}

export default RightNav