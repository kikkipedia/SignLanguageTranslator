//for localstorage
export const getStorage = (key) => {
    const data = localStorage.getItem(key)
        return JSON.parse(data)
}

export const setStorage = (key, value) => {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}