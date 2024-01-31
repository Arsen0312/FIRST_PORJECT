import React, {createContext, useCallback, useReducer} from 'react';
import initialState from "./initialState";
import reduser, {ADD_FAILURE, ADD_REQUEST, ADD_SUCCESS, GET_FAILURE, GET_SUCCESS} from "./reduser";
import axios from "axios";


const API_URL = "http://localhost:5000"
export const Context = createContext(initialState)
const Provider = ({ children }: React.PropsWithChildren) => {

    const [store, dispatch ] = useReducer(reduser, initialState)

    const getTodos = useCallback(async () => {
        try {
            dispatch({type: ''})
            const { data } = await axios(`${API_URL}/cantacs`)
            dispatch({type: GET_SUCCESS, payload: data})
            console.log(data)
        } catch (error) {
            dispatch({type : GET_FAILURE, payload: error})
            console.log(error)
        }
    }, [])

    const addTodos = useCallback(async (text: string, onClearForm: () => void) => {
        try{
            dispatch({type : ADD_REQUEST})
            const newContact = {
                contact : text,
            }
            const { data } = await axios.post(`${API_URL}/cantacs`, newContact)
            dispatch({type : ADD_SUCCESS, payload : data})
            onClearForm()
        } catch (error) {
            dispatch({type : ADD_FAILURE, payload : error})
        }
    },[])


    const value: any = {
        ...store
    }

    return (
        <Context.Provider
            value={value}
        >
            {children}
        </Context.Provider>
    )
};

export default Provider;