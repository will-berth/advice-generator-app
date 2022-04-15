import { useEffect, useState} from "react";
import { getSearchAdvice } from "../helpers/getSearchAdvice";

export const useFetchSearchAdvice = (newAdvice) => {
    let [advice, setAdvice] = useState({data: [], loading: true, error: ''});

    useEffect(()=> {
        getSearchAdvice(newAdvice)
            .then(dataAd => {
                if(dataAd === undefined){
                    setAdvice({data: ['error'],loading: false, error: 'No se encontraron consejos con ese término :c'})
                }else{
                    setAdvice({data: dataAd,loading: false, error: ''})
                }
            })
            .catch(e => {
                setAdvice({data: [],loading: false, error: ''})
            })
    }, [newAdvice]);

    return advice;
}