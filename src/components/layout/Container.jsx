import styled from "styled-components";

import H1 from '../typograph/H1';
import H3 from '../typograph/H3';
import H4 from '../typograph/H4'



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

function Container () {
  return(

    <> 

    <StyledContainer> 

      <StyledWoman><img src="woman.svg" alt="woman-jumping" width="600px"/></StyledWoman>
      
        <StyledText>
          <H1> We ACHIEVE, we DONATE! </H1>
          <H3> Nos ajude a ajudar pessoas que necessitam! </H3>
          <H4> Saiba mais! </H4>
        </StyledText>

    </StyledContainer>
    
    </>
    


  )
}

export default Container