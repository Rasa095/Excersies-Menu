'use client'
import { useState } from "react";
import Image from "next/image";
import { AppWrapper, ContentWrapper,Drink,DrinkWrapper,Food,FoodWrapper,Header, Price, ProductWrapper,Text ,Button, ItemSelected, ShoppingCart, Counter, Test, OpenMenu} from "./MenuComponent.styled";
import Popup from "./PopupComponent";
const Menu =()=>{
  const [bill,setBill]=useState(0);
  const [itemSelected,setItemSelected]=useState<{name:string,price:number}[]>([]);
  const handleButton=(itemSelectedd:{name:string,price:number})=>{
    setItemSelected([...itemSelected,itemSelectedd])
    setBill(bill+itemSelectedd.price);
  }
  const counter:number=itemSelected.length;
  const [isVisible,setIsVisible]=useState(false);
  const [menuIsVisible,setMenuIsVisible]=useState(false);
  const content=[
    {name:"Filter Coffe",price:2,id:0},
    {name:"Hot Chokolate",price:3,id:0},
    {name:"Cappucino",price:2.5,id:0},
    {name:"Orange Juice",price:3,id:0},
    {name:"Sparkling Watter",price:1,id:0},
    {name:"Lemonade",price:4,id:0},
    {name:"Salomon",price:7,id:1},
    {name:"Grilled Chease",price:7,id:1},
    {name:"Tomato Soup",price:4.5,id:1},
    {name:"Bean Burrito",price:6,id:1},
    {name:"Spinach Pi",price:7,id:1},
    {name:"Daily Special",price:7,id:1},

  ]
  return(
   <AppWrapper>
      <ContentWrapper>
        <Header>
            Food Menu
        </Header>
        <OpenMenu onClick={()=>setMenuIsVisible(!menuIsVisible)}>
          MENU
        </OpenMenu>
        <ProductWrapper>
          {menuIsVisible && <DrinkWrapper>
            {content.map((cont)=>{
              const {name,price}=cont
              if(cont.id===0){
                return (
                  <Drink key={cont.name}>
                    <Text>{cont.name}</Text>
                    <Price>{cont.price}$</Price>
                    <Button onClick={()=>handleButton({name,price})}>Add Item</Button>
                  </Drink>
                )
              }
            })}
          </DrinkWrapper>}
          {menuIsVisible &&<FoodWrapper>
          {content.map((cont)=>{
            const {name,price}=cont;
              if(cont.id===1){
                return (
                  <Food key={cont.name}>
                    <Text>{cont.name}</Text>
                    <Price>{cont.price}$</Price>
                    <Button onClick={()=>handleButton({name,price})}>Add Item</Button>
                  </Food>
                )
              }
            })}
          </FoodWrapper>}
        </ProductWrapper>
        <ShoppingCart onClick={()=>{
          setIsVisible(!isVisible);
        }}>
         <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><title>02</title><path d="M24.55,25.33l-3-16.57H6.35v4H18.21L28.27,68.21H82.55l11.1-42.88ZM79.45,64.21H31.61L25.28,29.33h63.2Z"/><path d="M46.62,82.4a8.83,8.83,0,1,0-8.83,8.83A8.84,8.84,0,0,0,46.62,82.4ZM33,82.4a4.83,4.83,0,1,1,4.83,4.83A4.84,4.84,0,0,1,33,82.4Z"/><path d="M79.8,82.4A8.83,8.83,0,1,0,71,91.23,8.84,8.84,0,0,0,79.8,82.4Zm-13.66,0A4.83,4.83,0,1,1,71,87.23,4.84,4.84,0,0,1,66.14,82.4Z"/><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Trendy</text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
          <Counter>{counter}</Counter>
        </ShoppingCart>
        {isVisible && <Popup  setBill={setBill} bill={bill} itemSelected={itemSelected} setItemSelected={setItemSelected} />}
      </ContentWrapper>
     
   </AppWrapper>
  )
}

export default Menu;