import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
    switch(action.type){
        case "INPUT_CHANGE":
            return {
                ...state,
                [action.inputId]: action.value
            }
        case "RESET": {
            return action.value
        }
        default: 
        return state;
    }
}
export const useForm = (initialValues) => {
    const [formState, dispatch] = useReducer(formReducer, initialValues);
    const inputHandler = useCallback((value, id) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value: value,
            inputId: id
        })
    }, []);
    const reset = useCallback((value) => {
        dispatch({
            type: 'RESET',
            value
        })
    }, [])
    return [formState, inputHandler, reset]
}