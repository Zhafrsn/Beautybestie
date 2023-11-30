import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';

export const AuthDetails = () => {
    const [authuser, setAuthUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                (user);
            } else {
                (null);
            }
        })
        return () => unsubscribe();
    }, [])
    return (
        <div>{authuser ? <p>Signed in</p> : <p>Signed Out</p>}</div>
    )
}