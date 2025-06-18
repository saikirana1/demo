import {createContext} from 'react';

export const UserContext=createContext({
    name:'',
    phone:'',
    user:'',
    setName:()=>{},
    setPhone:()=>{},
    setUser:()=>{}
});



