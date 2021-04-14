import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import LightTheme from '../../themes/Light';

import {FiMoon, FiSun} from 'react-icons/fi';


const ThemeNav = ({changeDark,changeLight,theme}) => {




  return (
    <div style={{display:'flex', margin:"15px",justifyContent:"flex-end"}}>
      <IconBox>
      <FiSun/>
      </IconBox>
      <div>
      <CheckBoxWrapper>
        <CheckBox 
          id="checkbox" 
          type="checkbox"
           onChange={theme == LightTheme ? changeDark:changeLight}/>
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      </div>
      <IconBox>
      <FiMoon />
      </IconBox>
    </div>
  );
};

const IconBox = styled.div`
margin-left:2px;
margin-right:2px;
`

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #bc6ff1;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default ThemeNav