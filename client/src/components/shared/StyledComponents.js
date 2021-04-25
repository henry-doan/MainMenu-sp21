import styled from "styled-components";
import { Button, Image, Card } from "react-bootstrap";

export const Container = styled.div`
  margin-top: 50px;
  margin-left: 33%;
  margin-right: 33%;
  padding-top: 20px;
  margin-bottom: 200px;
`
export const LoginImgCont = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 20px;
`
export const FormCont = styled.div`
  margin-left: 1%;
  margin-right: 80%;
  padding-top: 5px;
`

export const HomeImgCont = styled.div`
  margin-left: 2%;
`
export const QRImgCont = styled.div`
  margin-left: 47%;
  padding-top: 200px;
`

export const Btn = styled(Button)`
  color: black;
  background-color: #eabc80;
  border: white;
`
export const GrayBtn = styled(Button)`
  color: black;
  background-color: #f0f0f0;
  border: #f0f0f0;
`

export const IMG = styled(Image)`
  margin-bottom: 40px;
`

export const HomeIMG = styled(Image)`
  margin-bottom: 40px;
  margin-top: -40px;
  height: 50px;
`

export const H3 = styled.h3`
  font-weight: bold;
`
export const H4 = styled.h4`
  font-weight: lighter;
  text-align: center;
`

export const H5 = styled.h5`
  font-weight: bold;
  text-align: center;
`

export const Tl = styled.div`
  margin-bottom: 0px;
  background-color: #f0f0f0;
`
export const Tst = styled(Card)`
  margin-bottom: 0px;
  border-radius: 0px;
  box-shadow: 0px 3px 3px grey;
  // &:hover{
  // cursor: pointer;
  // text-decoration: underline;
}
`

export const Section = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;
`
export const Photo = styled(Image)`
  object-fit: cover;
  height: 200px;
  width: 100%;
  border: 3px solid #eabc80;
  border-radius: 4px;
  display: block;
`
