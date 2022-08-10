import styled from "styled-components";

const StyledLineBar = styled.div`
  background-color: ${props => props.theme.generalBorder};
  box-sizing: border-box;
  padding: 5px 0;
`

function LineBar () {
  return(
    <StyledLineBar />
  )
}

export default LineBar