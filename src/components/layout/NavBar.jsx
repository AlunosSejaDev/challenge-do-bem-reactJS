import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: ${props => props.theme.primary};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`

const StyledLogo = styled.span`
`

function NavBar () {
  return(

    <StyledNavBar>

      <StyledLogo> <img src="CB-Icon-Header.svg" alt="" /></StyledLogo>

      
        <a href="#"> Home </a>
        <a href="#"> Sobre nós </a>
        <a href="#"> Instituições parceiras </a>
        <a href="#"> Saiba mais </a>
        <a href="#"> Desafio do mês </a>
      
      
    </StyledNavBar>
  )
}

export default NavBar