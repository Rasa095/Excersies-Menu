'use client'
import styled from "styled-components";
export const Test = styled.div`
background-color: black;
`
export const AppWrapper = styled.div`
background-color: white;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image:url("/food-image.jpeg") ;
background-size: cover;
`
export const ContentWrapper = styled.div`

color: black;
width: 100%;
height: 80%;
display: flex;
align-items: center;
flex-direction: column;
gap: 100px;
`
export const Header = styled.h1`
color:black
`
export const ProductWrapper = styled.div`
  display: flex;
  gap:20px;
`
export const DrinkWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
row-gap: 5px;
column-gap: 5px;


`
export const OpenMenu = styled.div`
 font-weight: 700;
 padding: 10px 20px;
 border: 1px solid black;
 box-shadow: 10px 10px 10px black;
 cursor: pointer;
`
export const FoodWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
row-gap: 5px;
column-gap: 5px;
`
export const Drink = styled.div`
background-color: black;
border: 2px white solid;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 5px 10px 10px grey;
`
export const Food = styled.div`
background-color: black;
border: 2px white solid;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 5px 10px 10px grey;
`
export const Text = styled.h3`
color:${props => props.color || "white"}

`
export const Price = styled.p`
color:${props => props.color || "white"}

`
export const Button = styled.button`
display: inline;

`
export const FinalPriceItemSlectedWrapper = styled.div`
display: flex;
gap:20px;
`
export const FinalPrice = styled.div`
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
color:white;
border: white 2px solid;
height: fit-content;
`
export const ItemSelected = styled.div`
background-color: black;
border: 2px solid white;
display: flex;
flex-direction: column;
align-items: center;

`
export const FinalPriceText = styled.div`
color: white;
`
export const ShoppingCart = styled.div`
cursor: pointer;
width: 42px;
height: 42px;
position: absolute;
top:20px;
right: 40px;
`
export const Counter = styled.p`
position: absolute;
right: 13px;
top: 10px;
`