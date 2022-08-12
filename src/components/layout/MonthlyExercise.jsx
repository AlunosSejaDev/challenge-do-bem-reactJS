import styled from 'styled-components'

import H1 from '../typograph/H1'
import IconImages from '../icons/IconImages'

const StyledMonthlyHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
`

const StyledMonthlyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledTitleMonthlyExercise = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 80px;

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
  background-color: ${props => props.theme.white};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 15px;
`

const StyledExercise2 = styled.div`
  background-color: ${props => props.theme.white};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 15px;
`

const StyledExercise3 = styled.div`
  background-color: ${props => props.theme.white};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 15px;
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
              <StyledExercise1>
                <IconImages imageName='Lunge' type='svg' />
              </StyledExercise1>
              <StyledExercise2>
                <IconImages imageName='Lunge' type='svg' />
              </StyledExercise2>
              <StyledExercise3> 
                <IconImages imageName='Lunge' type='svg' />
              </StyledExercise3>
            </StyledAllExercise>
              <StyledTitleMonthlyExercise>
                <H1><a href=''>Se inscreva agora! </a></H1>
              </StyledTitleMonthlyExercise>
      </StyledMonthlyContainer>
    </>
    
  )
}

export default MonthlyExercise