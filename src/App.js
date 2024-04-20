//import "./App.css";
import React, { StrictMode, useReducer } from "react";
import DigitButton from "./DigitButton";
export const actions = {
    ADD_DIGIT : "add-digit",
    CLEAR: "clear",
    CHOOSE_OPERATION : "choose_operation",
    DELETE_DIGIT : "delete-digit",
    EVALUATE : "evaluate"
}
function reducer(state, {type, payload}){
    switch(type){
        case actions.ADD_DIGIT:
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }

    }
}

export default function App(){
    const[{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

    //dispatch({type : actions.ADD_DIGIT, payload:{digit : 1}})
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            <button className="span-two">AC</button>
            <button className="span-two">DEL</button>
            <DigitButton digit = "/" dispatch={dispatch}/>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className="span-two"></button>
        </div>
    );
}