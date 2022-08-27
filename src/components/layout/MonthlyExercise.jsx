import styled from 'styled-components'

import H1 from '../typograph/H1'
import IconImages from '../Icones/IconImages'

const StyledMonthlyHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px;

  @media (max-width: 1548px) {
    display: none;
    padding: 100px;
  }
`

const StyledMonthlyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`

const StyledTitleMonthlyExercise = styled.div`
  a{
    display: flex;
    justify-content: center;
    margin: 80px 80px;
    font-size: 48px;
    font-weight: bold;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
  }

  a:hover{
  color: ${props => props.theme.primary};
}
  
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const StyledAllExercise = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 30px;


  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledExercise1 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 35px 45px;
  width: 345px;
  height: 385px;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 410px;
    padding: 20px 10px;
  }
`

const StyledExercise2 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 10px 45px;
  width: 345px;
  height: 385px;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 410px;
    padding: 0px 10px;
  }
`

const StyledExercise3 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 20px 65px;
  width: 345px;
  height: 385px;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 410px;
    padding: 0px 25px;
  }
`

const StyledSpecificGoals = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  align-items: center;
  gap: 20px;
  color: ${props => props.theme.white};
  font-size: 24px;
  font-weight: bold;
`

const StyledAllGoalsExercise = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function MonthlyExercise () {
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
              <StyledAllGoalsExercise>
                <StyledExercise1>
                  <IconImages imageName='CorridaMusc' type='svg' />                                        
                </StyledExercise1>
                  <StyledSpecificGoals>
                  <p>Corrida ou caminhada</p>
                  <p>🥇OURO - 70.000m</p>
                  <p>🥈PRATA - 50.000m</p>
                  <p>🥉BRONZE - 30.000m</p>   
                </StyledSpecificGoals> 
              </StyledAllGoalsExercise>
              <StyledAllGoalsExercise>
                <StyledExercise2>
                  <IconImages imageName='Bike' type='svg' />
                </StyledExercise2>
                <StyledSpecificGoals>
                  <p>Bike Assalt</p>
                  <p>🥇OURO - 1.000 cal</p>
                  <p>🥈PRATA - 750 cal</p>
                  <p>🥉BRONZE - 500 cal</p>   
                </StyledSpecificGoals> 
              </StyledAllGoalsExercise>
              <StyledAllGoalsExercise>
                <StyledExercise3> 
                  <IconImages imageName='Real-Bike' type='svg' />
                </StyledExercise3>
                <StyledSpecificGoals>
                    <p>Bike</p>
                    <p>🥇OURO - 150.000m</p>
                    <p>🥈PRATA - 100.000m</p>
                    <p>🥉BRONZE - 50.000m</p>   
                  </StyledSpecificGoals> 
              </StyledAllGoalsExercise>
            </StyledAllExercise>
              <StyledTitleMonthlyExercise>
              <a href='https://chat.whatsapp.com/LIkpImaPlpCLwwO1sB8EiW' target='_blank'>Inscreva-se AGORA!</a>
              </StyledTitleMonthlyExercise>
      </StyledMonthlyContainer>
    </>
  )
}

export default MonthlyExercise