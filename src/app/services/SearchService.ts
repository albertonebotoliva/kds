const BASE_URL = "https://swapi.dev/api/"

export const SearchService = {
    get: (endpoint: string, query: string): Promise<any> => (
        fetch(`${BASE_URL}${endpoint}/?search=${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => console.error(error))
    )
};
