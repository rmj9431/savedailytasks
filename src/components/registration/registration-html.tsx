import * as React from 'react';
import { Link } from 'react-router-dom';

export const RegistrationHTMLStructure = (_: any) => {
    return (
        <>
            <div className="columns col-12 vertical-center full-height">
                <form name="registrationForm" className="form col-4 col-mx-auto ">
                    <div className="card">
                        <div className="card-header d-flex vertical-center">
                            <Link to="/login" className="btn btn-primary btn-action btn-lg">
                                <i className="icon icon-arrow-left" />
                            </Link>
                            <div className="card-title h5">Registration</div>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label className="form-label" htmlFor="username">Name</label>
                                <input className="form-input" type="text" id="username" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-input" type="text" id="email" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input className="form-input" type="text" id="password" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                <input className="form-input" type="text" id="confirmPassword" placeholder="Name" />
                            </div>
                            <br />

                        </div>
                        <div className="card-footer">
                            <div className="form-group">
                                <button className="btn btn-primary col-12">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};