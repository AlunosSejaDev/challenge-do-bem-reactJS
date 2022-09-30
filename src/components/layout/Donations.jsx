import styled from 'styled-components'

import H1 from '../typograph/H1'
import H3 from '../typograph/H3'

import IconImages from '../Icones/IconImages'

const StyledDonationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`

const StyledDonationTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const StyledDonationImage = styled.div`
  margin-bottom: 90px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  @media (max-width: 435px) {
    display: flex;
    flex-direction: column;
    width: 350px;
  }

  @media (max-width: 335px) {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`

export default function Donation () {
  return (
    <>
      <StyledDonationContainer>
        <StyledDonationTitle>
          <H1>Doações</H1>
          <H3>Faça sua doação!</H3>
        </StyledDonationTitle>
        <StyledDonationImage>
          <IconImages imageName='contribua' type='svg' />
        </StyledDonationImage>
      </StyledDonationContainer>
    </>
  )
}