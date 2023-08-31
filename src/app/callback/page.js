'use client';
import {useEffect, useState} from "react";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const LoginRedirect = ({searchParams}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch(`${backendUrl}/api/auth/google/callback?id_token=${searchParams.id_token}&access_token=${searchParams.access_token}`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
                }
                return res;
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setUser(res.user)
                // Successfully logged with Strapi
                // Now saving the jwt to use it for future authenticated requests to Strapi
                localStorage.setItem('jwt', res.jwt);
                localStorage.setItem('username', res.user.username);
                // setTimeout(() => history.push('/'), 3000); // Redirect to homepage after 3 sec
            })
            .catch(err => {
                console.log(err);
                setText('An error occurred, please see the developer console.')
            });
    }, []);

    return <p>{JSON.stringify(user)}</p>
};
export default LoginRedirect;