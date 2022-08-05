import styled from "styled-components";

import H1 from '../typograph/H1';
import H3 from '../typograph/H3';
import H4 from '../typograph/H4'


const StyledLogoCB = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-top: 80px;
  
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
`

const StyledWoman = styled.div`
  
`

const StyledText = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items:center; 
color: ${props => props.theme.white};
margin-left: 50px;
gap: 20px;
`

const StyledManRunning = styled.div`

`

function Container () {
  return(

    <> 
    
    <StyledLogoCB> 
      <img src="challenge-do-bem.svg" alt="Logo-Challenge-do-bem" />
    </StyledLogoCB>

    <StyledContainer> 

      <StyledWoman><img src="woman.svg" alt="woman-jumping" width="600px"/></StyledWoman>
      
        <StyledText>
          <H1> We ACHIEVE, we DONATE! </H1>
          <H3> Nos ajude a ajudar pessoas que necessitam! </H3>
          <H4> Saiba mais! </H4>
          <img src="kettle-bell.svg" alt="equipment" width="300px" />
        </StyledText>

      <StyledManRunning><img src="imagem-teste.png" alt="man-running" width="700px"/></StyledManRunning>


    </StyledContainer>
    
    </>
    


  )
}

export default Container