import {useReducer,useContext,createContext} from "react";

// Setting up the data layer
export const StateContext = createContext()

// Building a provider that is gonna wrap the App component so the data can be accessed anywhere.
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// This is how we use it inside a component
export const useStateValue = () => useContext(StateContext)
