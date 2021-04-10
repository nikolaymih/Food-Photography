

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
            if (res.ok != true) {
                throw Error('Access rejected')
            }
            return res.json()
        })
        .then((data) => {
            return data
        })
        .catch(() => {
            return null
        })
}

export const getOne = () => {
    let url = 'http://localhost:5000/img/personalData';
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

export const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

export const getOneImage = (id) => {
    let url = 'http://localhost:5000/img/detailedImage';

    let token = localStorage.getItem('token')

    let idImage = {
        id
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(idImage)
    })
        .then((res) => res.json())
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(err)
            return null
        })
}

export const deleteOne = (id) => {
    let url = `http://localhost:5000/img/delete/${id}`;

    let token = localStorage.getItem('token')

    return fetch(url, {
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => console.log(err))
}

export const updateOne = (updateImage, id) => {
    let token = localStorage.getItem('token')

    return fetch(`http://localhost:5000/img/update/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updateImage)
    })
}

export const loadTenMoreImages = (seenIds) => {
    let url = 'http://localhost:5000/img/loadResources'
    let token = localStorage.getItem('token')
    
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({seenIds})
    })
        .then(res => {
            if (res.ok != true) {
                throw Error('Access rejected')
            }
            return res.json()
        })
        .then((data) => {
            return data
        })
        .catch(() => {
            return null
        })
}