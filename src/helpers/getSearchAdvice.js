export const getSearchAdvice = async (searchAdvice) => {
    console.log(searchAdvice)
    let url = `https://api.adviceslip.com/advice/search/${searchAdvice}`;
    let resp = await fetch(url);
    let {slips} = await resp.json();
    console.log(slips);
    return slips;
}