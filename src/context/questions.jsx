import { createContext, useState } from "react";

const QuestionsContext = createContext({});

const QuestionsProvider = ({children}) =>{
  const [number, setNumber] = useState(0)

  
  return <QuestionsContext.Provider value={{number}}>
    {children}
  </QuestionsContext.Provider>

}
export {QuestionsContext, QuestionsProvider}