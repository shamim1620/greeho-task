import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Profile.css';

const Profile = () => {
    const { user } = useAuth();
    const { username, email, mobile, address, university, height, weight, maritalStatus } = user;
    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="" alt='' /><span className="font-weight-bold">{username}</span><span className="text-black-50">{email}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">User Profile</h4>
                            </div>
                            <div className="row mt-2">
                                <p>name</p>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">University</label><p>{university}</p></div>
                                <div className="col-md-6"><label className="labels">Address</label><p>{address} </p> </div>
                                <div className="col-md-6"><label className="labels">Height</label><p>{height}</p></div>
                                <div className="col-md-6"><label className="labels">Weight</label><p>{weight} </p> </div>
                                <div className="col-md-6"><label className="labels">Mobile</label><p>{mobile}</p></div>
                                <div className="col-md-6"><label className="labels">Marital Status</label><p>{maritalStatus} </p> </div>
                            </div>
                            <div className="mt-5 text-center text-decoration-none"><button className="btn btn-primary profile-button" type="button"><Link to='/updateProfile' >Update Profile</Link></button></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" value="" /></div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;