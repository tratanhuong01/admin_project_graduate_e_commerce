import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    choose: [],
    users: [],
    userRandom: []
}

export const GiveVoucherContext = createContext(initialState);

export const GiveVoucherProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const addChoose = (choose) => {
        dispatch({
            type: "ADD_CHOOSE",
            choose
        })
    };
    const removeChoose = (choose) => {
        dispatch({
            type: "REMOVE_CHOOSE",
            choose
        })
    };
    const updateUserRandom = (users) => {
        dispatch({
            type: "UPDATE_USER_RANDOM",
            users
        })
    }
    return <GiveVoucherContext.Provider value={{
        state,
        addChoose,
        removeChoose,
        updateUserRandom
    }}>
        {props.children}
    </GiveVoucherContext.Provider>
}