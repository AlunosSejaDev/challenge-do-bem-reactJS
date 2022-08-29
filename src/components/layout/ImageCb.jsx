import styled from 'styled-components'

const WIDTH_BREAK = '900px'

const StyledFlex = styled.div`
  display: flex;
  color: ${props => props.theme.white};
  text-align: center;
`

const StyledImageCb = styled.div`
    background-image: url('${props => props.image}');
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    
    @media (max-width: ${WIDTH_BREAK}) {
    display: none;
}
`

const StyledContainer = styled.div`
    background-color: ${props => props.theme.background};
    padding: 30px 50px;

    @media (min-width: ${WIDTH_BREAK}) {
      min-width: calc(${WIDTH_BREAK} - 100px);
    }

    @media (max-width: ${WIDTH_BREAK}) {
      width: 100%;
    }

    display: flex;
    flex-direction: column;
    overflow-y: auto;
    &:before, &:after {
      content: '';
      margin: auto;
    }
`

export default function ImageCb ({ children, image }) { 
  return (
    <>
      <StyledFlex>
        <StyledImageCb image={image} />
          <StyledContainer>{children}</StyledContainer>
      </StyledFlex>
    </>
  )
}

ImageCb.defaultProps = {
  image: '/meghan-holmes.jpg'
}
