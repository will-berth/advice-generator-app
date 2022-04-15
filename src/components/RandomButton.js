import React, {useState} from 'react';
import './card.css';

export const RandomButton = ({setClick, setAdvice}) => {

    const [btnClick, setBtnClick] = useState(0);

    function addClick(){
        setBtnClick(btnClick + 1);
        setClick(btnClick)
        setAdvice('')
    }

    return (
        <div onClick={addClick} className="btn-card">
            <p className="btn-title">Apachurrale aquí c:</p>
        </div>
    )
}