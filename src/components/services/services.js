

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

    let id = localStorage.getItem('id')
    let token = localStorage.getItem('token')

    let imgData = {
        image,
        description,
        id
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

export const getFirstTen = () => {
    let url = 'http://localhost:5000/img/'
    let token = localStorage.getItem('token')


    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(res => {
            return res.json()
        })
        .then((data) => {
            return data
        })
        .catch(err => console.log(err))
}