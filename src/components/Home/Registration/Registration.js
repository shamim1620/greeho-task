import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Registration.css';

const Registration = () => {
    const{registration}=useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = registerData => {
        registration(registerData);
    }
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <div className='mt-5'>
                <h3>Create your account</h3>

                <form className='registation-form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='User Name' {...register("username", { required: true })} />
                    <input placeholder='Email' type='email' {...register("email", { required: true })} />
                    <input placeholder='Mobile' {...register("mobile", { required: true })} />
                    <input placeholder='Marital Status' type='text' {...register("maritalStatus", { required: true })} />
                    <input placeholder='Password' type="password" {...register("password", { required: true, minLength: 8 })} />
                    <input placeholder='Confirm Password' type="password" {...register("confirmPassword", { required: true, minLength: 8 })} />
                    <input placeholder='Address' {...register("address", { required: true })} />
                    <input placeholder='University' type='text' {...register("university", { required: true })} />
                    <input placeholder='Weight'  {...register("weight", { required: true })} />
                    <input placeholder='Height'  {...register("height", { required: true })} />
                    <Button type='submit'> Create Account</Button>
                </form>
            </div>
        </div>

    );
};

export default Registration;