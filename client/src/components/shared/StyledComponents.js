import styled from "styled-components";
import { Button, Image, Card } from "react-bootstrap";
import {Link} from 'react-router-dom';

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
  &:hover {
    background-color: grey;
  }
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
  margin-botatom: 30px;
  margin-top: -40px;
  height: 50px;
`

export const H3 = styled.h3`
  font-weight: bold;
`
export const H4 = styled.h4`
  padding-top: 20px;
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

export const Tl1 = styled.div`
  margin-bottom: 0px;
  background-color: #f0f0f0;
  

`

export const IMG1 = styled.img`
  float: left;
  margin-right: 20px;
  display: inline-block;
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

export const Tst1 = styled(Card)`
  margin-bottom: 0px;
  border-radius: 0px;
  box-shadow: 0px 3px 3px grey;
  
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
export const Footer = styled.footer`
  border-top: 1px solid grey;
  margin-top: 300px;
  margin-left: -30px;
  
`
export const P = styled.p`
margin-top: 50px;
text-align: center;
// margin-left: -10px;
// padding-left: -10px;
`
export const Price = styled.p`
color: #EABC80;
font-size: 20px;
display: flex;
flex-wrap: wrap;

`


export const ItemT = styled.p`
display: flex;
flex-wrap: wrap;
  padding-right: 100px;
  margin-right: 100px;
  padding-bottom: 0px;
  
  

`


export const ItemH = styled.h4`
  
  margin: 10px;
 
  display: flex;
  flex-wrap: wrap;
  
`

export const GrayBtn1 = styled(Button)`
  color: black;
  background-color: #EABC80;
  
  margin-right: 10px;
  border: #f0f0f0;
  display: inline;
  float: right;
  &:hover {
    background-color: grey;
  }
`

export const LinkColor =styled(Link)`
  color: black;

`