import {createContext,useContext} from "react"

const AppContext = createContext({
    contacts:[],
    handleAddContactinContacts:(contacts)=>{},
});


const AppContextProvider = AppContext.Provider;

const useAppContext = () => useContext(AppContext);

export {AppContextProvider,useAppContext};