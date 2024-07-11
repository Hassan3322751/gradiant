import React, { useState } from "react";
import '../GradiantGenerator/Gradiant_Generator.scss'

const Main = () => {
    const [hex_code, sethex_code] = useState('#6aed8e');
    const [hex_code_2, sethex_code_2] = useState('#c0ac72');
    const [gradiant, setGradian] = useState('linear-gradient')
    const [gradiantType, setGradiantType] = useState("to Right")
    const hex_generator = (code_index)=>{
        let hex_values = '0123456789abcdef'
        let hex = '#';
        for(let  i = 0; i < 6; i++){
            hex += hex_values[Math.floor(Math.random() * 16)]
        }
        if(code_index === 'code_1'){
            sethex_code(hex)
        } else if (code_index === 'code_2'){
            sethex_code_2(hex)
        }
    }
    const gradiant_changer = (gradiant)=>{
        setGradian(gradiant);
        setGradiantType(gradiant === 'linear-gradient' ? 'to Right' : (gradiant === 'radial-gradient' ? 'circle' : 'from 0deg'))
    }

    const style = {
        background: `${gradiant}(${gradiantType},${hex_code}, ${hex_code_2})`
    }
    const btn_Style = {
        backgroundColor: `${hex_code}`,
    }
    const btn_Style_2 = {
        backgroundColor: `${hex_code_2}`,
    }
    return(
        <React.Fragment>
            <div style={style}>
                <div className="btn">
                    <button></button>
                </div>
                <div className="container" > 
                    <div>
                        <div className="hex_btns">
                            <button onClick={() => hex_generator('code_1')}>
                                { hex_code === '' ? 'Click Me' : hex_code }
                            </button>
                            <button onClick={() => hex_generator('code_2')}>
                                { hex_code_2 === '' ? 'Click Me' : hex_code_2 }
                            </button>
                        </div>
                        <div className="gr_types_btns">
                            {
                                [
                                    {btn_name: 'Linear',
                                    gradiant: 'linear-gradient'},
                                    {btn_name: 'Radial',
                                    gradiant: 'radial-gradient'},
                                    {btn_name: 'Conic',
                                    gradiant: 'conic-gradient'},
                                ].map((curElm, index)=>(
                                    <button onClick={() => gradiant_changer(curElm.gradiant)} key={index}>
                                        {curElm.btn_name}
                                    </button>
                                ))
                            }
                        </div>
                        <div className="gr_types_selectors">
                            {
                                gradiant === 'linear-gradient' && 
                                <select
                                title="selector"
                                id="type_Selector"
                                value={gradiantType}
                                className="linear_selector"
                                onChange={e => setGradiantType(e.target.value)}
                                >
                                    <option value='to Left'>Right to Left</option>
                                    <option value='to Right'>Left to Right</option>
                                    <option value='to Bottom'>Top to Bottom</option>
                                    <option value='to Top'>Bottom to Top</option>
                                </select>
                            }
                        </div>
                        <div className="gradiant_info" >
                            <div>Color Code 1 : {hex_code}</div>
                            <div>Color Code 2 : {hex_code_2}</div>
                            <div>
                                CSS Gradiant_Code : {gradiant}({gradiantType ? gradiantType : ''},{hex_code}, {hex_code_2})
                            </div>
                        </div>
                    </div>    
                </div> 
            </div>
        </React.Fragment>
    )
}

export default Main