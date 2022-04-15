export const getAdvice = async (searchAdvice = '') => {
    console.log(searchAdvice)
    let url = '';
    let response;
    searchAdvice === '' ? url = 'https://api.adviceslip.com/advice' : url = `https://api.adviceslip.com/advice/search/${searchAdvice}`;
    let resp = await fetch(url);
    if(searchAdvice === ''){
        let {slip} = await resp.json();
        response = slip;
    }else{
        let {slips} = await resp.json();
        response = slips;
        console.log(slips);
    }
    return response;
}