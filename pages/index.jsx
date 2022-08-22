import styled from 'styled-components'

import NavBar from '../src/components/layout/NavBar'
import ImageCb from '../src/components/layout/ImageCb'

import H1 from '../src/components/typograph/H1'
import H2 from '../src/components/typograph/H2'
import H5 from '../src/components/typograph/H5'

import IconImages from '../src/components/Icones/IconImages'
import AboutUs from '../src/components/layout/AboutUs'
import PartnerInstitutions from '../src/components/layout/PartnerInstitutions'
import LineBar from '../src/components/layout/LineBar'
import Podcast from '../src/components/layout/Podcast'
import MonthlyExercise from '../src/components/layout/MonthlyExercise'
import StyledSecondaryLineBarContainer from '../src/components/layout/SecondaryLineBar'
import FindUs from '../src/components/layout/FindUs'
import Footer from '../src/components/layout/Footer'

const WIDTH_BREAK = '800px'

const FormContainer = styled.div`
  margin: 360px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const Text = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  color: ${props => props.theme.white};

  @media (max-width: ${WIDTH_BREAK}) {
    display: flex;
    flex-direction: column;
  }
`

function HomePage () {
  return (
    <>
      <NavBar />
      <div id='home'>
      <ImageCb>
        <FormContainer>
          <IconImages imageName='ChallengeDoBem' type='svg' />
            <Text>
              <H2># We</H2>
              <H1>ACHIEVE,</H1>
              <H2>we</H2>
              <H1>DONATE!</H1>
            </Text>
            <H5>Nos ajude a ajudar pessoas que necessitam!</H5>
        </FormContainer>   
      </ImageCb>
      </div>
      <div id='about'>
        <LineBar />
        <AboutUs />
      </div>
      <div id='institutions'>
        <LineBar />
        <PartnerInstitutions />
      </div>
      <div id='knowMore'>
        <LineBar />
        <Podcast />
      </div>
      <div id='monthlyChallenges'>
        <LineBar />
        <MonthlyExercise />
      </div>
      <div id='contact'>
        <StyledSecondaryLineBarContainer />
        <FindUs />
        <Footer />
      </div>
    </>
  )
}

export default HomePage