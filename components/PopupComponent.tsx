'use client'
import { useEffect, useState } from "react";
import { Bill, ButtonClearPopup, ItemPopupClose, ItemPricePop, OrederListPop, PopupHeader, PopupWrapper } from "./PopupComponent.styled";
import { Button } from "./MenuComponent.styled";
 interface Props{
  itemSelected:{name:string,price:number}[]
  setItemSelected: React.Dispatch<React.SetStateAction<{name: string, price: number}[]>>;
  bill:number,
  setBill: React.Dispatch<React.SetStateAction<number>>
 }
 interface PropsTwo{
  name:string,
  price:number,
  time?:number
 }
 
 
const Popup=({itemSelected,setItemSelected,bill,setBill}:Props)=>{
  const [help,setHelp]=useState<{name:string,price:number,time?:number}[]>([]);
  function doubleItems(items: { name: string, price: number }[]) {
    // Koristimo reduce funkciju da prebrojimo koliko puta se svaka stavka pojavljuje u nizu
    const itemCounts = items.reduce<{ [key: string]: number }>((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});
  
    // Mapiramo niz stavki i, ako se stavka pojavljuje dva puta, dupliramo je
    const doubledItems = items.map(item => {
      if (itemCounts[item.name] > 1) {
        return {name:`${item.name}`,time:itemCounts[item.name],price:item.price*itemCounts[item.name]};
      }
      return {name:`${item.name}`,time:1,price:item.price*itemCounts[item.name]};
    });
  
    return doubledItems;
  }
  const deleteItem=(item:{name:string,price:number})=>{
    console.log(item);
    const newArray = itemSelected.filter(itemm => itemm.name !== item.name)
    setItemSelected(newArray);
    setBill(bill-item.price)
   }
   const clearAll=()=>{
    setItemSelected([]);
    setBill(0);
   }
   const order=()=>{
    setBill(0);
    setItemSelected([]);
    alert("Thank you,your order is acapted")
   }
  useEffect(()=>{
    const newNiz=doubleItems(itemSelected);
  setHelp(newNiz.filter((item,index)=>{
   return newNiz.findIndex(obj=>obj.name===item.name)===index;

  }))
  },[itemSelected])

console.log(itemSelected);
  return (
    <PopupWrapper>
      <PopupHeader>
        Your order
      </PopupHeader>
      <OrederListPop>
      {help.map((item,id)=>(
        <ItemPricePop key={id}>
           <li>{item.name} x{item.time} price={item.price}$</li>
           <ItemPopupClose onClick={()=>deleteItem(item)}>
            x
           </ItemPopupClose>
        </ItemPricePop>
      ))}
      
      </OrederListPop>
       <Bill>
        Bill:{bill}$
        <Button onClick={order}>
        ORDER
       </Button>
       </Bill>
       <ButtonClearPopup onClick={clearAll}>CLEAR</ButtonClearPopup>
       

    </PopupWrapper>
  )
}
export default Popup;