import {ADD_ARTICLE,
    ADD_NUMBER,
    DEC_NUMBER} from "../constants/action-types";

export function addArticle(payload){
    return {
        type:ADD_ARTICLE,
        payload
    }
}

export function addnumber(payload){
    return {
        type:ADD_NUMBER,
        payload
    }
}

export function decnumber(payload){
    return {
        type:DEC_NUMBER,
        payload
    }
}