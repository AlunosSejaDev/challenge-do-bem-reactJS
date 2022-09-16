import styled from 'styled-components'
import H5 from '../typograph/H5'

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 105px;
  margin-top: 4em;
  background: rgba(1, 107, 155, 0.70);
  backdrop-filter: blur(14px);

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

a:after{
  content: "";
  position: absolute;
  background-color: ${props => props.theme.primaryHover};
  height: 6px;
  width: 0;
  left: 0;
  bottom: -10px;
  transition: 0.3s;
}

a:hover:after{
  width: 100%;
}

  @media (max-width: 650px) {
    height: 230px;
    margin-top: 8em;
  }

  @media (max-width: 500px) {
    display: flex;
    text-align: center;
    width: 100%;
    padding: 0 6px 0 6px;
  }
`

export default function Footer () {
  return (
    <>
      <StyledFooter>
        <H5> Copyright@2022 - Challenge do bem - All Rights Reserved - Desenvolvido por 
          <a href='https://www.linkedin.com/in/brunopatricioc/' target='_blank'> @devbpatriciocosta </a> | 
          <a href='https://www.linkedin.com/in/ruanl-dev/' target='_blank'> @ruanL-Dev </a> | 
          <a href='https://www.linkedin.com/in/adrianodeveloper/' target='blank'> @adrianofront</a>          
        </H5>
      </StyledFooter>
    </>
  )
}
