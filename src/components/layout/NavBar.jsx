import React from 'react'
import styled from 'styled-components'

import Burguer from './Burguer'
import IconImages from '../Icones/IconImages'

const StyledNavBar = styled.nav`
  width: 100%;
  height: 80px;
  padding: 10px 0;
  background-color: ${props => props.theme.primary};
  position: fixed;
  background: rgba(1, 107, 155, 0.70);
  backdrop-filter: blur(14px);
  display: flex;
  gap: 30px;
`

const StyledHeaderIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  cursor: pointer;
`

export default function NavBar () {
  return(
    <StyledNavBar>
      <StyledHeaderIcon>
        <IconImages imageName='CB-Icon-Header' type='svg' />
      </StyledHeaderIcon>
      <Burguer />
    </StyledNavBar>
  )
}
