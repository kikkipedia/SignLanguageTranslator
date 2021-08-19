export function fetchUsers() {
	return fetch("http://localhost:8000/users")
		.then(response => response.json())
}

export function postUser(username) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, search: [] })
    }
    return fetch('http://localhost:8000/users', requestOptions)
        .then(response => response.json())
}