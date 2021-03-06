// import { useState } from 'react';
import { useFetchAdvice } from '../hooks/useFetchAdvice';
import './card.css';
import { InfoCard } from './InfoCard';

export const Card = ({click, multiAdvice}) => {

    let {data, loading} = useFetchAdvice(click);

    return (
        <>
            {/* <h1>{click}</h1> */}
            {loading && <p className="animate__animated animate__pulse">Cargando...</p>}
            <InfoCard dataAdvice={data} searchAdvice={multiAdvice}/>
        </>
    )
}