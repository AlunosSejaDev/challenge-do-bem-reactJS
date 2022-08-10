import styled from "styled-components"

import NavBar from "../src/components/layout/NavBar"
import ImageCb from "../src/components/layout/ImageCb"

import H1 from '../src/components/typograph/H1'
import H2 from '../src/components/typograph/H2'
import H5 from "../src/components/typograph/H5"

import Button from "../src/components/inputs/Button";

import Icon from "../src/components/icons/Icon"
import AboutUs from "../src/components/layout/AboutUs"
import PartnerInstitutions from '../src/components/layout/PartnerInstitutions'
import LineBar from "../src/components/layout/lineBar"

const WIDTH_BREAK = '800px'

const FormContainer = styled.div`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
`

const Text = styled.p`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: ${WIDTH_BREAK}) {
    display: flex;
    flex-direction: column;
`


function HomePage () {
  return (

    <>
      <NavBar />
      <ImageCb>
        <FormContainer>
          
          <Icon />
          <Text>
            <H2># We</H2><H1>ACHIEVE,</H1><H2>we</H2><H1>DONATE!</H1>
          </Text>
          <H5> Nos ajude a ajudar pessoas que necessitam! </H5>
            <Form>
              <Button> Saiba mais! </Button>
            </Form>

        </FormContainer>
      </ImageCb>
      <LineBar />
      <AboutUs />
      <LineBar />
      <PartnerInstitutions />
      <LineBar />
    </>
    
    
  )
}



export default HomePage