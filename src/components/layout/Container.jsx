import styled from "styled-components";


const StyledLogoCB = styled.div`
display: flex;
justify-content: center;  
margin-top: 80px;
`

function Container () {
  return(
    <StyledLogoCB> 
      <img src="challenge-do-bem.svg" alt="Logo-Challenge-do-bem" />
    </StyledLogoCB>
  )
}

export default Container