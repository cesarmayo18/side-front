'use client';
import {useEffect, useState} from "react";
import List from "@/app/components/List";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const LoginRedirect = (props) => {
    const [user, setUser] = useState(null);
    const [query, setQuery] = useState(props.searchParams);
    const searchParams = props.searchParams
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
                setUser(res.user)
                localStorage.setItem('jwt', res.jwt);
                localStorage.setItem('username', res.user.username);
                window.location.href = '/home';
            })
            .catch(err => {
                console.log(err);
                setText('An error occurred, please see the developer console.')
            });
    }, [query]);

    return <List></List>
};
export default LoginRedirect;