import styled from "styled-components";

import H1 from '../typograph/H1'
import H3 from "../typograph/H3"

import Images from "../icons/Images";


const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  flex-direction: column;
  text-align: left;
  gap: 80px;
  color: ${props => props.theme.white};
  align-items: center;
`

const StyledContainer = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  margin: 100px 150px;
  gap: 100px;
  

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    
  }
`

const StyledImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`


function AboutUs () {
  return(
    <>
    <StyledContainer>
          <StyledTitle>
            <H1>Sobre nós!</H1>
            <H3>“Nós somos uma AÇÃO SOCIAL que teve início em 2021 com a intenção de atingir objetivos esportivos, um  "challenge”.” </H3>
            <H3>“Todos os meses damos se atingirmos o objetivo, caso contrário nós TRIPLICAMOS a doação!”</H3>
          </StyledTitle>  
        <StyledImages>
          <Images imageName="CB-Donation" type="svg" />
          <Images imageName="CB-trainning" type="svg" />
        </StyledImages>
    </StyledContainer>
    </>
    


  )
}

export default AboutUs