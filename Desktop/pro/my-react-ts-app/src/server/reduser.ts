import { Context } from "./Provider";

export const GET_REQUEST = "GET_REQUEST"
export const GET_SUCCESS = "GET_SUCCESS"
export const GET_FAILURE = "GET_FAILURE"

export const ADD_REQUEST = "ADD_REQUEST"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_FAILURE = "ADD_FAILURE"
export default (store :any, action: any) : any => {
    switch(action.type) {
        case GET_REQUEST : {
            return {
                ...store,
                loading: true
            }
        }
        case GET_SUCCESS : {
            return {
                ...store,
                loading: false,
                contact: action.payload
            }
        }
        case GET_FAILURE : {
            return {
                ...store,
                loading: false,
            }
        }
        case ADD_REQUEST: {
            return {
                ...store,
                loading: true
            }
        }
        case ADD_SUCCESS: {
            return {
                ...store,
                loading: false,
                contact : [action.payload, ...store.contact]
            }
        }
        case ADD_FAILURE: {
            return {
                ...store,
                loading: false,
            }
        }
        default: return store;
    }
}