export const create = (email, username, password) => {
    let url = 'http://localhost:5000/auth/register';

    let user = {
        email,
        username,
        password
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
    })
}

export const login = (email, password) => {
    let url = 'http://localhost:5000/auth/login';

    let user = {
        email,
        password
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
    })
}

export const createImg = (image, description) => {
    let url = 'http://localhost:5000/img/createImg';

    let username = localStorage.getItem('user')
    let token = localStorage.getItem('token')

    let imgData = {
        image,
        description,
        username
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(imgData)
    })
}