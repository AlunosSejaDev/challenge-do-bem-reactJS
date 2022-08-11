import styled from 'styled-components'

import H1 from '../typograph/H1'
import H4 from "../typograph/H4"

import Images from '../icons/Images'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 150px 220px;
  gap: 80px;
  border: 5px solid #016B9B;
  border-radius: 50px;
  padding: 30px;

  @media (max-width: 800px) {
    border: none;
    margin: 0;
  }
`
const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`
const StyledImage = styled.div`
  
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
`

function Podcast() {
  return(
    <StyledContainer>
        <StyledTitle>
          <H1>
            Saiba mais sobre nós!
          </H1>
          <H4>
          Já pensou que bacana você receber um incentivo pra treinar – e com isso ganhar mais saúde – e ainda ajudar o próximo? Pois essa é a proposta de uma iniciativa muito legal chamada:
          </H4>
          <H1>
          Challenge do Bem
          </H1>
        </StyledTitle>
        <StyledImage>
        <Images imageName='MundoLivre2' type='png' />
        </StyledImage>
        <H4>
          Ouça agora o PodCast sobre o CB clicando aqui!
        </H4>
    </StyledContainer>
  )
}

export default Podcast