import { INCREMENT,DRECREMENT,RESET } from "./types";

export const increment = (amount = 1)=>({
    type: INCREMENT,
    payload:amount,
});

export const decrement = (amount = 1) => ({
    type:DRECREMENT,
    payload:amount,
});

export const reset = () => ({
    type: RESET
});