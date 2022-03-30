import React, {useState, useCallback, useEffect} from 'react';
import './adviceapp.css';
import { Card } from './components/Card';
import { getAdvice } from './helpers/getAdvice';
import { useFetchAdvice } from './hooks/useFetchAdvice';

export const AdviceGeneratorApp = () => {
    const [count, setClick] = useState(0);

    return (
        <div className="app">
            <div className="card">
                <Card key={count} click={count}/>
                <div onClick={() => setClick(count + 1)} className="btn-card">
                    {/* <img src="https://neenreva.github.io/advice-generator-app-main/images/icon-dice.svg"/> */}
                    <p className="btn-title">No lo presiones pq aun no sirve :C</p>
                </div>
            </div>
        </div>
    )
}