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

const StyledRankingExercise = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`

const StyledDiv = styled.div`
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

              <StyledDiv>
                <StyledExercise1>
                  <IconImages imageName='Lunge' type='svg' />                                        
                </StyledExercise1>
                  <StyledRankingExercise>
                  <p>Corrida ou caminhada</p>
                  <p>Ouro - 70.000m</p>
                  <p>Prata - 50.000m</p>
                  <p>Bronze - 30.000m</p>   
                </StyledRankingExercise> 
              </StyledDiv>

              <StyledDiv>
                <StyledExercise2>
                  <IconImages imageName='Lunge' type='svg' />
                </StyledExercise2>
                <StyledRankingExercise>
                  <p>Bike</p>
                  <p>OURO - 150.000m</p>
                  <p>PRATA - 100.000m</p>
                  <p>BRONZE - 50.000m</p>   
                </StyledRankingExercise> 
              </StyledDiv>
              
              <StyledDiv>
                <StyledExercise3> 
                  <IconImages imageName='Lunge' type='svg' />
                </StyledExercise3>
                <StyledRankingExercise>
                    <p>Lunge</p>
                    <p>OURO - 1500 LUNGE</p>
                    <p>PRATA - 1000 LUNGE</p>
                    <p>BRONZE - 500 LUNGE</p>   
                  </StyledRankingExercise> 
              </StyledDiv>
              

            </StyledAllExercise>
              <StyledTitleMonthlyExercise>
                <H1><a href=''>Inscreva-se agora! </a></H1>
              </StyledTitleMonthlyExercise>
      </StyledMonthlyContainer>
    </>
    
  )
}

export default MonthlyExercise