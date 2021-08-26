//API calls

const url ="https://my-json-server.typicode.com/kikkipedia/SignLanguageTranslator"

export function fetchUsers() {
	return fetch(url + "/users")
		.then(response => response.json())
}

export function postUser(username) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, search: [] })
    }
    return fetch(url + '/users', requestOptions)
        .then(response => response.json())
}

export function fetchUser(userId) {
    return fetch(url + '/users/' + userId)
        .then(response => response.json())
}

export function postSearch(username, searchInput) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, text: searchInput })
    }
    return fetch(url + '/search', requestOptions)
        .then(response => response.json())
}

export function fetchSearches() {
    return fetch(url + '/search')
        .then(response => response.json())
}
