
async function FetchJoke(){
    const url = 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5?page=2';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5f9073b66emsh0ac544af98a6b79p1a1470jsne2501bac2377',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

FetchJoke();

const api_key = AIzaSyAoD_L2TTNta47aLfLsy_VbQbyiO4bghWQ