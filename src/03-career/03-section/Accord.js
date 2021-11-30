import React from 'react'
import {useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

function Accord({item}) {
    const {ques, image} = item;
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <div class="ques">
                <h3>{ques}</h3>
                <button className="acc-buttons" onClick={()=>setVisible(!visible)}>{!visible?<AiOutlinePlus/>:<AiOutlineMinus/>}</button>
            </div>
            {visible && <img className="acc-images" src={image} alt={ques.substring(0,5)}/>}
        </div>
    )
}

export default Accord
