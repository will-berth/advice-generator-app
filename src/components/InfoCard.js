import React from 'react';

export const InfoCard = ({dataAdvice}) => {

    return (
        <>
            <h1 className="advice-num">Advice #{dataAdvice.id}</h1>
            <p className="advice-desc">“{dataAdvice.advice}”</p>
        </>
    )
}