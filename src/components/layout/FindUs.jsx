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
`

const StyledFace = styled.div`
  display: flex;
  flex-direction: row;
  width: 305px;
  gap: 10px;

  a{
    display: flex;
    justify-content: center;
    position: inherit;
  }
  
  @media (max-width: 640px) {
    display: none;
  }
`

const StyledWhats = styled.div`
  display: flex;
  flex-direction: row;
  width: 295px;
  gap: 10px;
  
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
    position: inherit;
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

  a{
    display: flex;
    justify-content: center;
    position: inherit;
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
                <IconImages imageName='facebookIcon' type='svg' />
                <H3>
                  <a href="https://www.facebook.com/challengedobem">facebook.com/challengedobem</a>
                </H3>                                      
              </StyledFace>

              <StyledEmail>
                <IconImages imageName='EmailLogo' type='svg' />
                <H3>
                  <a href="challengedobem@gmail.com">challengedobem@gmail.com</a>
                </H3>
              </StyledEmail>

              <StyledInstagram> 
                <IconImages imageName='InstagramLogo' type='svg' />
                <H3>
                <a href="#"> @challengedobem</a> 
                </H3>
              </StyledInstagram>

          </StyledContact>
      </StyledContainerContact>
    </>
  )
}
