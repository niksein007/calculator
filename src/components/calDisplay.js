import React from 'react'
import './calDisplay.css'

const Cal = (props)=>{

    return(
        <div onClick={props.maths} className="cal">
            <div className=" box" id= "box-0">0</div>
            <div className="box " id="box-1">1</div>
            <div className="box " id="box-2">2</div>
            <div className="box " id="box-3">3</div>
            <div className="box " id="box-4">4</div>
            <div className="box " id="box-5">5</div>
            <div className="box " id="box-6">6</div>
            <div className="box " id="box-7">7</div>
            <div className="box " id="box-8">8</div>
            <div className="box " id="box-9">9</div>
            <div className="box " id="box-dot">.</div>
            <div className="box " id="box-add">+</div>
            <div className="box " id="box-minus">-</div>
            <div className="box " id="box-multiply">*</div>
            <div className="box " id="box-division">/</div>
            <div className="box " id="box-clear">clear</div>
            <div className="box " id="box-display">
            <span id="second">{props.secondDisplay}</span>
            <span id="first">{props.display}</span>
            </div>
            <div className="box " id="box-equals">=</div>
        </div>
    )
}


export default Cal