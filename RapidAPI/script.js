const url = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/create?topics=pirates&max-length=1000';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5f9073b66emsh0ac544af98a6b79p1a1470jsne2501bac2377',
		'x-rapidapi-host': 'humor-jokes-and-memes.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}