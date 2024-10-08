export function getSession () {
    return fetch("/api/v1/session", {
        method: "GET"
    })
    .catch( () => Promise.reject({ error: 'networkError' }) )
    .then( response => {
      if (response.ok) {
        return response.json();
      }
      return response.json()
      .catch( error => Promise.reject({ error }) )
      .then( err => Promise.reject(err) );
    });
}

export function addSession (username) {
    return fetch("/api/v1/session" , {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json'
          }),
        body: JSON.stringify({username})
    })
    .catch( () => Promise.reject({ error: 'networkError' }) )
    .then((response) =>{
        if(response.ok)
            return response.json();
        return response.json()
        .catch( error => Promise.reject({ error }) )
        .then( err => Promise.reject(err) );
    })
}

export function getTodos() {
    return fetch("/api/v1/todos", {
        method: "GET"
    })
    .catch(() => Promise.reject({ error: "networkError"}))
    .then((response) => {
        if(response.ok)
            return response.json();
        return response.json()
        .catch( error => Promise.reject({ error }) )
        .then( err => Promise.reject(err) );
    })
}