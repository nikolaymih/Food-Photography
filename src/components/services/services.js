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