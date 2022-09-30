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
          
            <a href="https://becodaesperanca.org/" target="_blank">
              <StyledImage1><IconImages imageName='becoDaEsperanca' type='svg' />
              </StyledImage1></a>
            
              <a href="https://www.instagram.com/institutoducao/" target="_blank"><StyledImage2>
              <IconImages imageName='institutoDuCao' type='svg' />
            </StyledImage2> </a>

            <a href="https://asilosaovicente.org.br/site/" target="_blank"><StyledImage3>
              <IconImages imageName='asiloSaoVicente' type='svg' />
            </StyledImage3> </a>

        </StyledAllImages>

        <StyledAllImages2>

            <a href="http://crazycatgang.com.br/" target="_blank"><StyledImage4>
                <IconImages imageName='CrazyCatOficial' type='svg' />
              </StyledImage4> </a>

            <a href="https://www.ongjardimdasborboletas.com/" target="_blank"><StyledImage5>
              <IconImages imageName='JardimDasBorboletasOficial' type='svg' />
            </StyledImage5> </a>

            <a href="https://www.projetomaestrodabola.com.br/" target="_blank"><StyledImage6>
              <IconImages imageName='MaestroOficial' type='svg' />
            </StyledImage6> </a>

        </StyledAllImages2>

        <StyledAllImages3>

            <a href="https://www.instagram.com/rangoderua/" target="_blank"><StyledImage7>
                  <IconImages imageName='RangoDeRuaOficial' type='svg' />
                </StyledImage7> </a>

                <a href="http://www.socorroaosnecessitados.org.br/" target="_blank"><StyledImage8>
              <IconImages imageName='SocorroOficial' type='svg' />
            </StyledImage8> </a>
                
        </StyledAllImages3>

        <a href="https://www.amigosdocaximba.org/" target="_blank"><StyledImage9>
              <IconImages imageName='amigosDoCaximba' type='svg' />
            </StyledImage9> </a>

        </StyledContainer>
    </>
  )
}
