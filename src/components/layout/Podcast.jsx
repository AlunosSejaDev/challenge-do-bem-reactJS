import styled from 'styled-components'

import IconImages from '../Icones/IconImages'
import H1 from '../typograph/H1'
import H5 from '../typograph/H5'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 150px 420px;
  gap: 80px;
  box-sizing: border-box;
  border: 5px solid #016B9B;
  border-radius: 50px;
  padding: 30px;

  a {  
    margin-left: 10px;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    position: initial;
    color: ${props => props.theme.primary};
    transition: all 0.3s;
  }

  a:hover{
    color: ${props => props.theme.white};
}
  

  @media (max-width: 1480px) {
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
  color: ${props => props.theme.primary};
  font-weight: bold;
  font-size: 30px;
  

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`
const StyledImage = styled.div`
  
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    width: 270px;
  }

  @media (max-width: 825px) {
    display: flex;
    flex-direction: column;
    width: 360px;
  }

  @media (max-width: 815px) {
    display: flex;
    flex-direction: column;
    width: 350px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
`

export default function Podcast() {
  return(
    <StyledContainer>
        <StyledTitle>
          <H1>Saiba mais sobre nós!</H1>
          <H5>Já pensou que bacana você receber um incentivo pra treinar – e com isso ganhar mais saúde – e ainda ajudar o próximo? Pois essa é a proposta de uma iniciativa muito legal chamada:</H5>
          <p>Challenge do Bem</p>
        </StyledTitle>
          <StyledImage>
            <IconImages imageName='MundoLivre2' type='png' />
          </StyledImage>
            <H5>Ouça agora o PodCast sobre o CB clicando<a href='https://mundolivrefm.com.br/podcasts/rock-and-run-64/' target='_blank'>AQUI!</a></H5>
      </StyledContainer>
  )
}
