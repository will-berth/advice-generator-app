import React, {useState} from 'react';
import './adviceapp.css';
import { Card } from './components/Card';
import { RandomButton } from './components/RandomButton';
import { SearchAdvice } from './components/SearchAdvice';
import { useFetchSearchAdvice } from './hooks/useFetchSearchAdvice';

export const AdviceGeneratorApp = () => {
    const [advice, setAdvice] = useState('');
    const [count, setClick] = useState(0);

    let {data, loading, error} = useFetchSearchAdvice(advice);

    

    return (
        <div className="app">
            {loading && <p className="animate__animated animate__pulse">Cargando...</p>}
            {/* <div className="card">
                <Card key={count} click={count}/>
                <div onClick={() => setClick(count + 1)} className="btn-card">
                    <p className="btn-title">Apachurrale aquí c:</p>
                </div>
            </div> */}
            {error !== '' && 
                <div className="errorContainer">
                    <p className="animate__animated animate__pulse">No se encontraron consejos con ese término :c </p>
                    <p className="animate__animated animate__pulse">Mejor busca un consejo random XD </p>
                    <RandomButton setClick={setClick} setAdvice={setAdvice}/>
                </div>
            }
            {data.length > 0 && error === ''
                ? data.map(itemAdvice => {
                    return (
                        <div key={itemAdvice.id} className="card">
                            <Card click={0} multiAdvice={itemAdvice}/>
                        </div>
                    )
                })
                : error === '' 
                ? <div className="card">
                    <Card key={count} click={count}/>
                    {/* <div onClick={() => setClick(count + 1)} className="btn-card">
                        <p className="btn-title">Apachurrale aquí c:</p>
                    </div> */}
                    <RandomButton setClick={setClick} />
                </div>
                : ''
            }
            {/* <div className="card">
                <Card key={1} click={count}/>
            </div>
            <div className="card">
                <Card key={2} click={count}/>
            </div> */}
            <SearchAdvice setAdvice={setAdvice}/>
        </div>
    )
}