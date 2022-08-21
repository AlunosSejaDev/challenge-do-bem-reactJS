import styled from 'styled-components'

import NavBar from '../src/components/layout/NavBar'
import ImageCb from '../src/components/layout/ImageCb'

import H1 from '../src/components/typograph/H1'
import H2 from '../src/components/typograph/H2'
import H5 from '../src/components/typograph/H5'

import Button from '../src/components/inputs/Button'

import IconImages from '../src/components/icons/IconImages'
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
  color: ${props => props.theme.white};
`

const Text = styled.p`
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
      <ImageCb>
        <FormContainer>
          <IconImages imageName='ChallengeDoBem' type='svg' />
            <Text>
              <H2># We</H2><H1>ACHIEVE,</H1><H2>we</H2><H1>DONATE!</H1>
            </Text>
            <H5>Nos ajude a ajudar pessoas que necessitam!</H5>
              <Form>
                <Button>Saiba mais!</Button>
              </Form>
        </FormContainer>
      </ImageCb>
        <LineBar />
          <AboutUs />
        <LineBar />
          <PartnerInstitutions />
        <LineBar />
          <Podcast />
        <LineBar />
          <MonthlyExercise />
        <StyledSecondaryLineBarContainer />
        <FindUs />
        <Footer />
    </>
  )
}

export default HomePage