const BASE_URL = "https://swapi.dev/api/"

export const SearchService = {
    get: (endpoint: string, query: string, page: number): Promise<any> => (
        fetch(`${BASE_URL}${endpoint}/?search=${query}&page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => console.error(error))
    )
};
