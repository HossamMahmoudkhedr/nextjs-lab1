const URL = 'https://jsonplaceholder.typicode.com';
export async function fetchData(endPoint) {
	const res = await fetch(`${URL}${endPoint}`);

	const data = res.json();

	return data;
}
