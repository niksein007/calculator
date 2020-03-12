import React from 'react'
import './calDisplay.css'

const Cal = (props)=>{

    return(
        <div onClick={props.maths} className="cal">
            <div className=" box box-0" value="0">0</div>
            <div className="box box-1" value="1">1</div>
            <div className="box box-2" value="2">2</div>
            <div className="box box-3" value="3">3</div>
            <div className="box box-4" value="4">4</div>
            <div className="box box-5" value="5">5</div>
            <div className="box box-6" value="6">6</div>
            <div className="box box-7" value="7">7</div>
            <div className="box box-8" value="8">8</div>
            <div className="box box-9" value="9">9</div>
            <div className="box box-dot" value=".">.</div>
            <div className="box box-add" value="+">+</div>
            <div className="box box-minus" value="-">-</div>
            <div className="box box-multiply" value="*">*</div>
            <div className="box box-division" value="/">/</div>
            <div className="box box-clear" value="clear">clear</div>
                        {/* this is the display section of the browser */}
            <div className="box box-display" value="display">
            <span id="second">{props.secondDisplay}</span>
            <span id="first">{props.display}</span>
            </div>

            <div className="box box-equals" value="equals">=</div>
        </div>
    )
}


export default Cal