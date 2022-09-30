import styled from 'styled-components'

import H1 from '../src/components/typograph/H1'
import H2 from '../src/components/typograph/H2'
import H4 from '../src/components/typograph/H4'
import H5 from '../src/components/typograph/H5'
import H6 from '../src/components/typograph/H6'

import NavBar from '../src/components/layout/NavBar'
import ImageCb from '../src/components/layout/ImageCb'
import IconImages from '../src/components/Icones/IconImages'
import AboutUs from '../src/components/layout/AboutUs'
import PartnerInstitutions from '../src/components/layout/PartnerInstitutions'
import LineBar from '../src/components/layout/LineBar'
import Podcast from '../src/components/layout/Podcast'
import MonthlyExercise from '../src/components/layout/MonthlyExercise'
import StyledSecondaryLineBarContainer from '../src/components/layout/SecondaryLineBar'
import FindUs from '../src/components/layout/FindUs'
import Footer from '../src/components/layout/Footer'
import Donation from '../src/components/layout/Donations'

const FormContainer = styled.div`
  margin: 100px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 80px;
`

const Text = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  color: ${props => props.theme.white};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const SecondaryText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 140px;
  justify-content: center;
  color: ${props => props.theme.white};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export default function HomePage () {
  return (
    <>
      <NavBar />
        <div id='home'>
        <ImageCb>
          <FormContainer>
            <IconImages imageName='ChallengeDoBem' type='svg' />
              <Text>
                <H2>#We</H2>
                <H2>ACHIEVE,</H2>
                <H1>we</H1>
                <H1>DONATE!</H1>
              </Text>
          </FormContainer> 
              <SecondaryText>
                <H4>Seja</H4> 
                <H4>saudável,</H4> 
                <H5>seja</H5> 
                <H5>solidário!</H5>
              </SecondaryText>
                <H6>Nos ajude a ajudar pessoas que necessitam!</H6>
        </ImageCb>
        </div>
          <div id='about'>
            <LineBar />
              <AboutUs />
          </div>
            <div id='monthlyChallenges'>
              <LineBar />
                <MonthlyExercise />
            </div>
              <div id='institutions'>
                <LineBar />
                  <PartnerInstitutions />
              </div>
              <div id='donation'>
                <LineBar /> 
                  <Donation />
              </div>

                <div id='knowMore'>
                  <LineBar />
                    <Podcast />
                </div>
                  <div id='contact'>
                    <StyledSecondaryLineBarContainer />
                      <FindUs />
                        <Footer />
                  </div>
    </>
  )
}
