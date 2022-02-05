import { useState } from "react"



const useHooks = () => {
    const [user, setUser] = useState({});
    const host = 'https://exam.greeho.com';
    console.log(user)

    const login = (loginData,navigate) => {
        fetch(`${host}/api/users/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': 'N9hH7M65SqpFl26gdJ8DKPo32ppr85kFAfkb8u8x39NOD729hd20PoE1Wccx0O16'
            },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.data.user)
                navigate('/home');

            })
    }
    const registration = (registerData) => {
        console.log(registerData)
        fetch(`${host}/api/users/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-api-key': 'N9hH7M65SqpFl26gdJ8DKPo32ppr85kFAfkb8u8x39NOD729hd20PoE1Wccx0O16'
            },
            body: JSON.stringify(registerData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return {
        login,
        registration,
        user
    }

}
export default useHooks;