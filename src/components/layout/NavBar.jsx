import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: ${props => props.theme.primary};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 225px;

  @media (max-width: 1100px) {
    padding: 0 20px;
  }
`

const StyledLogo = styled.span`
  background-color: ${props => props.theme.primary};
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
`
const StyledLinks = styled.span`
  background-color: ${props => props.theme.primary};
  display: flex;
  gap: 40px;
`

function NavBar () {
  return(

    <StyledNavBar>

        <StyledLogo> <img src="CB-Icon-Header.svg" alt="Mini-logo-CB" /></StyledLogo>      

      <StyledLinks>
        <a href="#"> Home </a>
        <a href="#"> Sobre nós </a>
        <a href="#"> Instituições parceiras </a>
        <a href="#"> Desafio do mês </a>
        <a href="#"> Saiba mais </a>
      </StyledLinks>

    </StyledNavBar>
  )
}

export default NavBar