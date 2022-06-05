import React, {useState, ChangeEvent} from "react"
import s from "./Calculator.module.sass"

export const Calculator = () => {

    const [result, setResult] = useState("")

    // click buttons
    const ClickHandler = (e) => {
        setResult(result?.concat(e.currentTarget?.name))

    }
    // clear input
    const ClearHandler = () => {
        setResult("")
    }
    // backSpace
    const BackSpaceHandler = () => {
        setResult(result?.slice(0, -1))
    }
    // calculate
    const CalculateHandler = () => {
        try {
            setResult(Number(eval(result).toString()).toFixed(2));
        }
        catch(error)
        {
            setResult("invalidFormat")
        }
    }
    return (
        <div className={s.container}>
            <div className={s.wrapperCalc}>
                <input className={s.out} type="text" placeholder="000000000000" value={result}/>
                <div className={s.buttonsWrapper}>

                    <div className={s.wrapperCaDel}>
                        <button className={s.clearBtn} onClick={ClearHandler}>CA</button>
                        <button className={s.backSpaceBtn} onClick={BackSpaceHandler}>Del</button>
                    </div>

                    <button className={s.nmbBtn} name="7" onClick={ClickHandler}>7</button>
                    <button className={s.nmbBtn} name="8" onClick={ClickHandler}>8</button>
                    <button className={s.nmbBtn} name="9" onClick={ClickHandler}>9</button>
                    <button className={s.operationsBtn} name="+" onClick={ClickHandler}>+</button>
                    <button className={s.nmbBtn} name="4" onClick={ClickHandler}>4</button>
                    <button className={s.nmbBtn} name="5" onClick={ClickHandler}>5</button>
                    <button className={s.nmbBtn} name="6" onClick={ClickHandler}>6</button>
                    <button className={s.operationsBtn} name="-" onClick={ClickHandler}>-</button>
                    <button className={s.nmbBtn} name="1" onClick={ClickHandler}>1</button>
                    <button className={s.nmbBtn} name="2" onClick={ClickHandler}>2</button>
                    <button className={s.nmbBtn} name="3" onClick={ClickHandler}>3</button>
                    <button className={s.operationsBtn} name="/" onClick={ClickHandler}>/</button>
                    <button className={s.dotBtn} name="." onClick={ClickHandler}>.</button>
                    <button className={s.nmbBtn} name="0" onClick={ClickHandler}>0</button>
                    <button className={s.resultBtn} onClick={CalculateHandler}>=</button>
                    <button className={s.operationsBtn} name="*" onClick={ClickHandler}>*</button>

                </div>

            </div>
        </div>
    )
}