import * as React from 'react';
import { Link } from 'react-router-dom';

export const LoginHTMLStructure = (_: any) => {
    return (
        <>
            <div className="columns col-12 vertical-center full-height">
                <form name="registrationForm" className="form col-4 col-mx-auto ">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title h5">Login</div>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-input" type="text" id="email" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input className="form-input" type="text" id="password" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-checkbox form-inline">
                                    <input type="checkbox" />
                                    <i className="form-icon" /> Remember me
                                </label>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="form-group">
                                <button className="btn btn-success col-12">Submit</button>
                            </div>
                            <div className="divider text-center" data-content="OR" />
                            <div className="form-group">
                                <Link to="/registration" className="btn btn-primary col-12">Register New Account</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};