import styled from 'styled-components'

import H1 from '../typograph/H1'
import H3 from '../typograph/H3'

const StyledContainerContact = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  gap: 500px;
  margin-top: 40px;

  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledWhereAreUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;

  @media (max-width: 1140px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1140px) {
    display: flex;
    text-align: center;
  }
`

function FindUs () {
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
      <H3>(41) 99727-5152</H3>
      <H3>challengedobem@gmail.com</H3>
      <H3>@challengedobem</H3>
    </StyledContact>
</StyledContainerContact>
</>
  )
}

export default FindUs