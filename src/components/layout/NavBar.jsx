import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: ${props => props.theme.primary};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  gap: 100px;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(14px);

  @media (max-width: 1500px) {
    padding: 0 20px;
    gap: 60px;
    height: 100px;
    display: flex;
  }

  @media (max-width: 1200px) {
    padding: 0 20px;
    gap: 60px;
    height: 130px;
    display: flex;
  }

  @media (max-width: 900px) {
    padding: 0 20px;
    gap: 20px;
    height: 350px;
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