import styled from 'styled-components'

import H1 from '../typograph/H1'
import H3 from "../typograph/H3"

import Images from '../icons/Images'


const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

`

const StyledAllImages = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const StyledImage1 = styled.div`
  background-color: ${props => props.theme.white};
  box-sizing: border-box;
  border: 4px solid #016B9B;
  border-radius: 50px;
  padding: 15px;
`
const StyledImage2 = styled.div`
  background-color: ${props => props.theme.white};
  box-sizing: border-box;
  border: 4px solid #016B9B;
  border-radius: 50px;
  padding: 5px 0;
`

const StyledImage3 = styled.div`
  background-color: ${props => props.theme.white};
  box-sizing: border-box;
  border: 4px solid #016B9B;
  border-radius: 50px;
  padding: 20px;
`

const StyledImage4 = styled.div`
  background-color: ${props => props.theme.white};
  box-sizing: border-box;
  border: 4px solid #016B9B;
  border-radius: 50px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 150px;
`

function PartnerInstitutions () {
  return (
    <>
      <StyledContainer>
        <StyledTitle>
          <H1>Instituições parceiras</H1>
        </StyledTitle>
        <StyledAllImages>
          <StyledImage1>
            <Images imageName='partner-1' type='svg' />
          </StyledImage1>
          <StyledImage2>
            <Images imageName='partner-2' type='svg' />
          </StyledImage2>
          <StyledImage3>
            <Images imageName='partner-3' type='svg' />
          </StyledImage3>
        </StyledAllImages>
        <StyledImage4>
            <Images imageName='partner-4' type='svg' />
          </StyledImage4>
      </StyledContainer>
    
    </>
  )
}

export default PartnerInstitutions