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
`
const StyledTitleMonthlyExercise = styled.button`
  display: flex;
  justify-content: center;
  margin: 80px 80px;
  font-size: 48px;
  font-weight: bold;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  border: none;
  cursor: pointer;
  
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
    height: 340px;
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
    height: 340px;
  }
`

const StyledExercise3 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 30px 15px;
  width: 345px;
  height: 385px;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 340px;
    padding: 50px 25px;
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
                  <p>Bike</p>
                  <p>🥇OURO - 150.000m</p>
                  <p>🥈PRATA - 100.000m</p>
                  <p>🥉BRONZE - 50.000m</p>   
                </StyledSpecificGoals> 
              </StyledAllGoalsExercise>
              <StyledAllGoalsExercise>
                <StyledExercise3> 
                  <IconImages imageName='Lunge' type='svg' />
                </StyledExercise3>
                <StyledSpecificGoals>
                    <p>Lunge</p>
                    <p>🥇OURO - 1500 LUNGE</p>
                    <p>🥈PRATA - 1000 LUNGE</p>
                    <p>🥉BRONZE - 500 LUNGE</p>   
                  </StyledSpecificGoals> 
              </StyledAllGoalsExercise>
            </StyledAllExercise>
              <StyledTitleMonthlyExercise>
                <p>Inscreva-se agora!</p>
              </StyledTitleMonthlyExercise>
      </StyledMonthlyContainer>
    </>
  )
}

export default MonthlyExercise