import styled from 'styled-components'
import H5 from '../typograph/H5'


const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 105px;
  margin-top: 2em;
  @media (max-width: 500px) {
    display: flex;
    text-align: center;
    width: 100%;
    padding: 0 6px 0 6px;
  }
`


function Footer () {
  return (
    <>
      <StyledFooter>
        <H5>
            Copyright@2022 - Challenge do bem - Todos os direitos reservados - Desenvolvido por @adrianofront | @devbpatriciocosta | @ruanL-Dev
        </H5>
      </StyledFooter>
    </>
  )
}

export default Footer
