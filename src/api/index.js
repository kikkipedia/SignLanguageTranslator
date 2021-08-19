//API functionality

import { getStorage } from "../storage"

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

export function fetchUser(userId) {
    return fetch('http://localhost:8000/users/' + userId)
        .then(response => response.json())
}

export function postSearch(username, searchInput) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, text: searchInput })
    }
    return fetch('http://localhost:8000/search/', requestOptions)
        .then(response => response.json())
}

export function fetchSearches() {
    return fetch('http://localhost:8000/search/')
        .then(response => response.json())
}