export const getAdvice = async () => {
    let url = 'https://api.adviceslip.com/advice';
    let resp = await fetch(url);
    let {slip} = await resp.json();
    console.log(slip)
    return slip;
}