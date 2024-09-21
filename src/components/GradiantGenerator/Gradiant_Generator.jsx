import React, { useEffect, useState } from "react";
import {gradiant_to_img} from './utilities/utilities.js'
import '../GradiantGenerator/Gradiant_Generator.scss'

const Main = () => {
    const [hex_code, sethex_code] = useState('#cbffe0');
    const [hex_code_2, sethex_code_2] = useState('#55a4b4');
    const [hex_code_3, sethex_code_3] = useState('#bf7878');
    const [hexRange, setHexRange] = useState({
        hex1: 0,
        hex2: 0,
        hex3: 0
    })
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
        } else if (code_index === 'code_3'){
            sethex_code_3(hex)
        }
    }
    const gradiant_changer = (gradiant)=>{
        setGradian(gradiant);
        setGradiantType(gradiant === 'linear-gradient' ? 'to Right' : (gradiant === 'radial-gradient' ? 'circle' : 'from 0deg'))
    }

    const style = {
        background: `${gradiant}(${gradiantType},${hex_code}, ${hex_code_2}, ${hex_code_3})`
        // background: `${gradiant}(${gradiantType},${hex_code}${hexRange.hex1}, ${hex_code_2}${hexRange.hex2}, ${hex_code_3}${hexRange.hex3})`
    }
    const btn_Style = {
        backgroundColor: `${hex_code}`,
    }
    const btn_Style_2 = {
        backgroundColor: `${hex_code_2}`,
    }
    return(
        <React.Fragment>
            <div style={style} className="gradiant_div" id="gradient"></div>
                <div className="btn">
                    <button></button>
                </div>
                <div className="container" > 
                    <div>
                        <div className="hex_btns">
                            <div className="hex_btn_div">
                                <input type="range" name="hex1" id="hex1" value={hexRange.hex1} min={0} max={100} 
                                    onChange={(e) => setHexRange({hex1: e.target.value})}
                                />

                                <button onClick={() => hex_generator('code_1')}>
                                    { hex_code === '' ? 'Click Me' : hex_code }
                                </button>

                                <input type="color" value={hex_code} name="color1" id="color 1" 
                                  onChange={(e) => {
                                    sethex_code(e.target.value)
                                }}
                                />
                            </div>
                            <div className="hex_btn_div">
                                <input type="range" name="hex2" id="hex2" value={hexRange.hex2} min={0} max={100} 
                                    onChange={(e) => setHexRange({hex2: e.target.value})}    
                                />

                                <button onClick={() => hex_generator('code_2')}>
                                    { hex_code_2 === '' ? 'Click Me' : hex_code_2 }
                                </button>
                                <input type="color" value={hex_code_2} name="color2" id="color 2" 
                                  onChange={(e) => {
                                      sethex_code_2(e.target.value)
                                    }}/>
                            </div>
                            <div className="hex_btn_div">
                                <input type="range" name="hex3" id="hex3" value={hexRange.hex3} min={0} max={100}  
                                     onChange={(e) => setHexRange({hex3: e.target.value})}
                                />

                                <button onClick={() => hex_generator('code_3')}>
                                    { hex_code_3 === '' ? 'Click Me' : hex_code_3 }
                                </button>
                                <input type="color" value={hex_code_3} name="color2" id="color 2" 
                                  onChange={(e) => {
                                    sethex_code_3(e.target.value)
                                }}/>
                            </div>
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
                                    <option value='to Right'>Left to Right</option>
                                    <option value='to Left'>Right to Left</option>
                                    <option value='to Bottom'>Top to Bottom</option>
                                    <option value='to Top'>Bottom to Top</option>
                                </select>
                            }
                        </div>
                        <div className="gradiant_info" >
                            <div>Color Code 1 : {hex_code}</div>
                            <div>Color Code 2 : {hex_code_2}</div>
                            <div>Color Code 2 : {hex_code_3}</div>
                            <div>
                                CSS Gradiant_Code : {gradiant}({gradiantType ? gradiantType : ''},{hex_code}, {hex_code_2})
                            </div>
                            <div className="utitlities">
                                <button className="copyCode">Copy</button>
                                <button className="saveAsJpg" onClick={() => gradiant_to_img()}>Image</button>
                                {/* <button className="saveAsSvg" onClick={() => gradiant_to_svg()}>Svg</button> */}
                            </div>
                        </div>
                    </div>    
                </div> 
            
        </React.Fragment>
    )
}

export default Main