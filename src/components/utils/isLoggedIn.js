export const isLoggedIn = async (token) => {
    let url = 'http://localhost:5000/auth/isAuth';

        let storageToken = {
            token
        }

        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer: ${token}`
            },
            body: JSON.stringify(storageToken) 
        })

        let data = await result.json();
        
        return data.token;
}
