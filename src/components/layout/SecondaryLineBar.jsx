import styled from 'styled-components'

const StyledSecondaryLineBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledSecondaryLineBar = styled.div`
  background-color: ${props => props.theme.white};
  width: 50%;
  height: 5px;
`

export default function LineBar () {
  return(
    <>
     <StyledSecondaryLineBarContainer>
        <StyledSecondaryLineBar />
      </StyledSecondaryLineBarContainer>
    </>
  )
}
