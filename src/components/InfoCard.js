import React from 'react';

export const InfoCard = ({dataAdvice, searchAdvice}) => {

    return (
        <>
            <h1 className="advice-num">Advice #{ !searchAdvice ? dataAdvice.id: searchAdvice.id}</h1>
            <p className="advice-desc">“{!searchAdvice ? dataAdvice.advice: searchAdvice.advice}”</p>
        </>
    )
}