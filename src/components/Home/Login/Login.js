import axios from 'axios';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = logindata => {
        login(logindata, navigate);
    }


    return (
        <div>
            <h3 className='mt-5'>Log In</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='User Name' {...register("username", { required: true })} />
                <br />
                <input type='password' placeholder='password' {...register("password", { required: true })} />
                <br />
                <Button type='submit'>Login</Button>
            </form>

        </div>
    );
};

export default Login;