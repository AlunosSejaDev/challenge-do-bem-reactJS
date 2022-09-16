import styled from 'styled-components'

import H1 from '../typograph/H1'
import H3 from '../typograph/H3'

import IconImages from '../Icones/IconImages'

const StyledContainerContact = styled.div`
  display: flex;
  justify-content: center;
  gap: 300px;
  margin-top: 40px;
  align-items: center;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`

const StyledWhereAreUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
  color: ${props => props.theme.white};

  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  a{
  color: ${props => props.theme.white};
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  letter-spacing: 0.5px;
  padding: 0 10px;
}
`

const StyledFace = styled.div`
  display: flex;
  flex-direction: row;
  width: 305px;
  gap: 10px;

  a{
    display: flex;
    justify-content: center;
  }
  
  @media (max-width: 640px) {
    display: none;
  }
`

const StyledEmail = styled.div`
  display: flex;
  flex-direction: row;
  width: 290px;
  gap: 15px;

  a{
    display: flex;
    justify-content: center;
  }

  @media (max-width: 640px) {
    display: none;
  }
`
const StyledInstagram = styled.div`
  display: flex;
  flex-direction: row;
  width: 290px;
  gap: 15px;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export default function FindUs () {
  return(
    <>
      <StyledContainerContact>
          <StyledWhereAreUs>
            <H1>
              Onde estamos
            </H1>
            <H3>
              Curitiba - PR
            </H3>
          </StyledWhereAreUs>
          <StyledContact>
              <H1>Contato</H1>
              
              <StyledFace>
                <a href="https://www.facebook.com/challengedobem" target="_blank"><IconImages imageName='facebookIcon' type='svg' /></a><H3><a href="https://www.facebook.com/challengedobem" target="_blank">facebook.com/challengedobem</a></H3>                                      
              </StyledFace>

              <StyledEmail>
                <a href="challengedobem@gmail.com" target="_blank"><IconImages imageName='EmailLogo' type='svg' /></a><H3><a href="challengedobem@gmail.com" target="_blank">challengedobem@gmail.com</a></H3>
              </StyledEmail>

              <StyledInstagram> 
                <a href="https://www.instagram.com/challengedobem/" target="_blank"><IconImages imageName='InstagramLogo' type='svg' /></a><H3><a href="https://www.instagram.com/challengedobem/" target="_blank">@challengedobem</a></H3>
              </StyledInstagram>

          </StyledContact>
      </StyledContainerContact>
    </>
  )
}
