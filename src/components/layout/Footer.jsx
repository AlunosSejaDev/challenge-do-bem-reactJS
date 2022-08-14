import styled from 'styled-components'
import H3 from '../typograph/H3'


StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


function Footer () {
  return (
    <>
      <StyledFooter>
        <StyledCredits>
          <H3>
            Copyright@2022 - Challenge do bem - Todos os direitos reservados - Desenvolvido por @adrianofront | @devbpatriciocosta | @ruanL-Dev
          </H3>
        </StyledCredits>
      </StyledFooter>
    </>
  )
}

export default Footer
