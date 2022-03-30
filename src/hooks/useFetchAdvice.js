
import { useEffect, useState} from "react";
import { getAdvice } from "../helpers/getAdvice";

export const useFetchAdvice = ({click}) => {
    let [state, setState] = useState({data: [], loading: true})


    useEffect(()=>{
        getAdvice()
            .then(dataAd => {
                setState({data: dataAd,loading: false})
            })
    },[click])

    return state;
     

}