import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: ${props => props.theme.primary};
  height: 80px;
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 200px;

  @media (max-width: 1500px) {
    padding: 0 20px;
    gap: 20px;
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

function NavBar () {
  return(
<>
    <StyledNavBar>
        
          <img src="/CB-Icon-Header.svg" alt="Mini-logo-CB" />
          <a href="#"> Home </a>
          <a href="#"> Sobre nós </a>
          <a href="#"> Instituições parceiras </a>
          <a href="#"> Desafio do mês </a>
          <a href="#"> Saiba mais </a>             

    </StyledNavBar>
</>
    
    
  )
}

export default NavBar