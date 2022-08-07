import styled from "styled-components"


const StyledFlex = styled.div`
  display: flex;
`

const StyledImageCb = styled.div`
  background-image: url('${props => props.image}');
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 20vh;
`

const StyledContainer = styled.div`
  background-color: ${props => props.theme.background};
  
`

function ImageCb ({ children, image }) { 
  return (
    <div>
      <StyledFlex>
        <StyledImageCb image={image} />
        <StyledContainer>{children}</StyledContainer>
      </StyledFlex>
    </div>
  )
}

ImageCb.defaultProps = {
  image: '/challenge-do-bem.svg'
}

export default ImageCb