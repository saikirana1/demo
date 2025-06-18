import React, { useEffect, useState } from "react";


export default function List(s){
      {get}
    

    const [items,setItems]=useState([])

    useEffect(()=>{
        setItems(getItems())
        console.log("updating Items")
    },[getItems])
    return items.map(item=> <div key={item}>{item}</div>)


}