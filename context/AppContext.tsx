import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useEffect,
} from "react";

const AppContext=createContext({});

export function AppWrapper({children}: any){
    const [state, dispatch]= useReducer(AppReducer, initialState);

    useEffect(()=>{
        
    })
}