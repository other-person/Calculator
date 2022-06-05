import React from "react"
import s from "./Calculator.module.sass"

export const Calculator = () => {

// пробегаемся циклом по всем кнопкам

    return (
        <div className={s.container}>
            <div className={s.wrapperCalc}>
                <input className={s.out} type="text" placeholder="000000000000" value="0" disabled/>
                <div className={s.buttonsWrapper}>
                    <div className={s.clearBtn}>CA</div>
                    <div className={s.nmbBtn}>7</div>
                    <div className={s.nmbBtn}>8</div>
                    <div className={s.nmbBtn}>9</div>
                    <div className={s.operationsBtn} id={s.plusBtn}>+</div>
                    <div className={s.nmbBtn}>4</div>
                    <div className={s.nmbBtn}>5</div>
                    <div className={s.nmbBtn}>6</div>
                    <div className={s.operationsBtn} id={s.minusBtn}>-</div>
                    <div className={s.nmbBtn}>1</div>
                    <div className={s.nmbBtn}>2</div>
                    <div className={s.nmbBtn}>3</div>
                    <div className={s.operationsBtn} id={s.divisionBtn}>/</div>
                    <div className={s.dotBtn}>.</div>
                    <div className={s.nmbBtn}>0</div>
                    <div className={s.resultBtn}>=</div>
                    <div className={s.operationsBtn} id={s.multiplyBtn}>*</div>

                </div>

            </div>
        </div>
    )
}