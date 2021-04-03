import React from 'react';
import Login from '../Login/login';
import useToken from '../App/useToken';

export default function Preferences(){
    const { token, setToken} = useToken();

    if (!token){
        return <Login setToken={setToken}/>
    }

    return(
        <h2>Preferences</h2>
    );
}