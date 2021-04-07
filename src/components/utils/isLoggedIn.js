export const isLoggedIn = async () => {
    let url = 'http/localhost:5000/auth/isAuth';

    const token = localStorage.getItem('token');
    
    if (token) {
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)
        })
        
        let data = await result.json()

        console.log(data);

    } 
        return token
}