import React, {useState} from 'react';
import './adviceapp.css';
import { Card } from './components/Card';
import { SearchAdvice } from './components/SearchAdvice';

export const AdviceGeneratorApp = () => {
    const [advice, setAdvice] = useState('');
    const [count, setClick] = useState(0);

    return (
        <div className="app">
            <div className="card">
                <Card key={count} click={count}/>
                <div onClick={() => setClick(count + 1)} className="btn-card">
                    {/* <img src="https://neenreva.github.io/advice-generator-app-main/images/icon-dice.svg"/> */}
                    <p className="btn-title">Apachurrale aquí c:</p>
                </div>
            </div>
            <SearchAdvice setAdvice={setAdvice}/>
        </div>
    )
}