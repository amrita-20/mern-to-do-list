const { response } = require("express");

export function getSession () {
    return fetch("/api/v1/session", {
        method: "GET"
    })
    .then(response => {
        if(response.ok)
            return response.json();
        return response.json();
    })
    .catch( () => Promise.reject({ error: 'networkError' }) )
}

export function addSession (username) {
    return fetch("/api/v/session", {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json'
          }),
        body: JSON.stringify({ username }),
    })
    .then(response => {
        if(response.ok)
            return response.json();
        return response.json();
    })

    .catch( () => Promise.reject({ error: 'networkError' }) )
}

export function getTodos () {
    return fetch("/api/v1/todos", {
        method: "GET"
    })
    .then(response => {
        if(response.ok)
            return response.json();
        return response.json();
    })

    .catch( () => Promise.reject({ error: 'networkError' }) )
}

