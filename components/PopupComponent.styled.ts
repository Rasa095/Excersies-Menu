import styled from "styled-components";

export const PopupWrapper = styled.div`
position: absolute;
background-color: black;
color: white;
border: 1px solid white;
box-shadow: 5px 5px 5px gray;
top:60px;
right: 0px;


`
export const PopupHeader = styled.h2`
display: flex;
justify-content: center;
margin: 15px;
`
export const OrederListPop = styled.ol`
color: white;
list-style-position: inside;
`
export const ItemPricePop = styled.div`
display: flex;
gap:10px;
`
export const ItemPopupClose = styled.button`
background-color: black;
border: none;
`
export const Bill = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top:30px;
flex-direction: column;
gap:15px;
`
export const ButtonClearPopup = styled.button`
position: absolute;
top: 0px;
right: 0px;
display: inline-block;
background-color: black;
font-size: 10px;

cursor: pointer;

`