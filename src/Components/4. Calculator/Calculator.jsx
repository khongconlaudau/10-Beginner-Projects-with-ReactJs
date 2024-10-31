import { useState } from "react";
import "./style.css"
const Calculator = () => {
    const [input, setInput] = useState("");

    const display = (sym) =>{
        setInput(input + sym);
    }

    const clear = () =>{
        setInput("");
    }

    const calculate = () =>{
        const res = eval(input)
        setInput(res)
    }
    return <form action="
    " className="calculator">
        <input type="text" className="value" value={input} />
        
        <span className="clear" onClick={clear}>C</span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>

        <span onClick={ () => display("7")}>7</span>
        <span onClick={ () => display("8")}>8</span>
        <span onClick={ () => display("9")}>9</span>
        <span onClick={ () => display("-")}>-</span>

        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>+</span>

        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>

        <span onClick={() => display("#")}>#</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={calculate}>=</span>
    </form>
}

export default Calculator;
