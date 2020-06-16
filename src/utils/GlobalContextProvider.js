import React from 'react'

export const GlobalStateContext = React.createContext(null) 
export const GlobalDispatchContext = React.createContext(null) 

const initialState = {
    theFirstTimeLoadPassed: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'IT_IS_PASSED': {
            return {
                ...state,
                theFirstTimeLoadPassed: state.theFirstTimeLoadPassed === false && true,
            }
        }
        default:
            throw new Error('Error');
    }
}

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}
