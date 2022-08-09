import styled from "styled-components"

import NavBar from "../src/components/layout/NavBar"
import ImageCb from "../src/components/layout/ImageCb"

import H1 from "../src/components/typograph/H1"
import H4 from "../src/components/typograph/H4"

import Button from "../src/components/inputs/Button";

const FormContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  gap: 20px;
`


function HomePage () {
  return (

    <>

      <NavBar />

      <ImageCb>
        
        <FormContainer>

          <img src="challenge-do-bem.svg" alt="" width="820px"/>
          <H1> # We ACHIEVE, we DONATE! </H1>
          <H4> Nos ajude a ajudar pessoas que necessitam! </H4>

            <Form>

              <Button> Saiba mais! </Button>

            </Form>
         
        </FormContainer>

      </ImageCb>

    </>
    
    
  )
}



export default HomePage