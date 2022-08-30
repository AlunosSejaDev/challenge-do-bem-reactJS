import styled from 'styled-components'

import H1 from '../typograph/H1'
import IconImages from '../Icones/IconImages'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  gap: 25px;
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const StyledAllImages = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledAllImages2 = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledAllImages3 = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledImage1 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  width: 345px;
  height: 345px;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 15px 40px;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
  }
`
const StyledImage2 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  width: 345px;
  height: 345px;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 5px 10px;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
  }
`

const StyledImage3 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid; 
  width: 345px;
  height: 345px;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 20px 60px;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
  }
`

const StyledImage4 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  width: 345px;
  height: 345px;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
  }
`

const StyledImage5 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  width: 345px;
  height: 345px;
  box-sizing: border-box;
  border: 4px solid;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
  }
`

const StyledImage6 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  width: 345px;
  height: 345px;
  box-sizing: border-box;
  border: 4px solid;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
  }
`

const StyledImage7 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  width: 345px;
  height: 345px;
  box-sizing: border-box;
  border: 4px solid;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 10px 20px;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
  }
`

const StyledImage8 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  width: 345px;
  height: 345px;
  box-sizing: border-box;
  border: 4px solid;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 40px 45px;

  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
  }
`

const StyledImage9 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 150px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  @media (max-width: 435px) {
    display: flex;
    flex-direction: column;
    width: 350px;
  }

  @media (max-width: 335px) {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`

export default function PartnerInstitutions () {
  return (
    <>
      <StyledContainer>
        <StyledTitle>
          <H1>Instituições apoiadas</H1>
        </StyledTitle>
        <StyledAllImages>
          <StyledImage1>
          <a href='https://becodaesperanca.org/' target='_blank'><IconImages imageName='becoDaEsperanca' type='svg' /> </a>            
          </StyledImage1>
            <StyledImage2>
             <a href='https://www.facebook.com/institutoducao/' target='_blank'><IconImages imageName='institutoDuCao' type='svg' /></a>              
            </StyledImage2>
              <StyledImage3>
              <a href='https://asilosaovicente.org.br/' target='_blank'><IconImages imageName='asiloSaoVicente' type='svg'/></a>    
              </StyledImage3>
        </StyledAllImages>
          <StyledAllImages2>
              <StyledImage4>              
              <a href='http://crazycatgang.com.br/' target='_blank'><IconImages imageName='CrazyCatOficial' type='svg' /></a>                
              </StyledImage4>
                <StyledImage5>                 
                  <a href='https://www.ongjardimdasborboletas.com/' target='_blank'><IconImages imageName='JardimDasBorboletasOficial' type='svg' /></a>                
                </StyledImage5>
                  <StyledImage6>                  
                    <a href='https://www.projetomaestrodabola.com.br/' target='_blank'><IconImages imageName='MaestroOficial' type='svg' /></a>
                  </StyledImage6>
          </StyledAllImages2>
            <StyledAllImages3>
                <StyledImage7>                 
                  <a href='https://rangoderua.github.io/#' target='_blank'><IconImages imageName='RangoDeRuaOficial' type='svg' /></a>
                  
                </StyledImage7>
                  <StyledImage8>                  
                    <a href='http://www.socorroaosnecessitados.org.br/' target='_blank'><IconImages imageName='SocorroOficial' type='svg' /></a>
                  </StyledImage8>
            </StyledAllImages3>
              <StyledImage9>             
                <a href='https://www.amigosdocaximba.org/' target='_blank'><IconImages imageName='amigosDoCaximba' type='svg' /></a>
              </StyledImage9>
        </StyledContainer>
    </>
  )
}
