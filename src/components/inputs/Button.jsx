import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.theme.primary};
    padding: 25px 75px;
    border-radius: 15px;
    border: 0;
    font-weight: bold;
    font-size: 18px;
    color: ${props => props.theme.white};
    cursor: pointer;
    transition: all 0.3s;
    
    :hover {
      background-color: ${props => props.theme.primaryHover};
    }
`

export default Button