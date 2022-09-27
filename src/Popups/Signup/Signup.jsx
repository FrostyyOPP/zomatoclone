import React from 'react'
import './signup.css'

export const Signup = () => {
    return (
        <div>
            <div class="modal signup" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">Signup</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body mt-2">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <div class="form-check mt-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                I agree to Zomato's <a href="">Terms of Service</a>, <a href="">Privacy Policy</a> and <a href="">Content Policies</a>
                                </label>
                            </div>

                            <div className="d-grid mt-4">
                                <button className='btn btn-danger btn-lg'>Create Account</button>
                            </div>
                            <div className="divider mt-4">
                                <hr />
                                <p className='divider-text'>or</p>
                            </div>
                            <div className="d-grid mt-4">
                                <button className='btn btn-outline-secondary btn-lg'><i class="fa fa-google"></i> Continue with Gmail</button>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <p>Already Have a Account? <a className='ca-link' href="#">Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
