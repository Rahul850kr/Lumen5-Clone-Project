import React from "react"
import styled from "styled-components"

const Button = styled.button `
border:1px solid #5846f6;
width: 90px;
font-size: 14px;
line-height: 21px;
height: 38px;
color: #5846f6;
padding: 8px 10PX;
font-weight: 400;
text-align: center;
background-color:white;
text-decoration: none;
border-radius: 50PX;
margin: 0 10px 0 0 ;
cursor: pointer;
&:hover{
     background-color: #5846f6;
     color: white;
}
`;

const Show_Button = styled.button`
     border: 1px solid gray;
     background-color: #f0f0f4;
     font-size: 14px;
     line-height: 21px;
     vertical-align: middle;
     padding: 12px;
     font-weight: 400;
     border-radius: 40px;
     height: 45px;
     width: 110px;
     cursor: pointer;
     &:hover{
          background-color: #909090;
     }
`;

const Btn_For_navbar = styled.button`
     width: 67px;
     height: 20px;
     background-color: white;
     border: 1px solid #5846f6;
     color: #5846f6;
     cursor: pointer;
     line-height: 20px;
     padding: 0px 5px;
     margin-bottom: 10px;
     border-radius: 5px;
     &:hover{
          background-color: #5846f6;
          color: white;
          text-decoration: underline;
     }
`

const Left_div_compo = styled.div`
     color: #7e889a;
     height: auto;
     margin: 7px 0 0 43px;
     cursor: pointer;
     &:hover{
          color: black;
     }
`

export { Button,Show_Button,Left_div_compo,Btn_For_navbar }