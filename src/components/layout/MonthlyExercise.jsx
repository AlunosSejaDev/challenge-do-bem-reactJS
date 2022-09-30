import styled from 'styled-components'

import H1 from '../typograph/H1'
import IconImages from '../Icones/IconImages'

const StyledMonthlyHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;

  @media (max-width: 1548px) {
    display: none;
    padding: 100px;
  }
`

const StyledMonthlyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const StyledTitleMonthlyExercise = styled.div`
  margin-bottom: 80px;
  text-align: center;
`

const StyledSubscribe = styled.div`
  margin-bottom: 80px;
  
  a{
    display: flex;
    justify-content: center;
    
    font-size: 48px;
    font-weight: bold;
    position: initial;
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: all 0.3s;
  }

  a:hover{
  color: ${props => props.theme.white};
}

  @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      
    }
  
  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5rem;
  }
`

const StyledAllExercise = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 30px;
  margin-bottom: 5rem;


  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }
`

const StyledExercise1 = styled.div`
  cursor: pointer;
  transition: all ease-out 0.5s;
  
  :hover{
    transform: scale(1.3);
  }

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 410px;
    padding: 20px 10px;
  }
`

const StyledExercise2 = styled.div`
  cursor: pointer;
  transition: all ease-out 0.5s;
  
  :hover{
    transform: scale(1.3);
  }

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 410px;
    padding: 0px 10px;
  }
`

const StyledExercise3 = styled.div`
  cursor: pointer;
  transition: all ease-out 0.5s;
  
  :hover{
    transform: scale(1.3);
  }

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 410px;
    padding: 0px 25px;
  }
`

export default function MonthlyExercise () {
  return (
    <>
    <StyledMonthlyHeader>
      <IconImages imageName='CbNew' type='svg' />
    </StyledMonthlyHeader>
      <StyledMonthlyContainer>
          <StyledTitleMonthlyExercise>
            <H1>Desafios do mês</H1>
          </StyledTitleMonthlyExercise>
            <StyledAllExercise>
              
                <StyledExercise1>
                  <IconImages imageName='caminhada' type='svg' />                                        
                </StyledExercise1>
              
              
                <StyledExercise2>
                  <IconImages imageName='bike2' type='svg' />
                </StyledExercise2>
              
              
                <StyledExercise3> 
                  <IconImages imageName='remo' type='svg' />
                </StyledExercise3>
            
            </StyledAllExercise>
              <StyledSubscribe>
                <a href='https://chat.whatsapp.com/LIkpImaPlpCLwwO1sB8EiW' target='_blank'>Inscreva-se AGORA!</a>
              </StyledSubscribe>
      </StyledMonthlyContainer>
    </>
  )
}
