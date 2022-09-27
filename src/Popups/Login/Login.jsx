import React from 'react'

export const Login = () => {
    return (
        <div>
            <div class="modal login" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title">Login</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body mt-2">
                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary dropdown-toggle mb-3" type="button" data-bs-toggle="dropdown" aria-expanded="false"> +91</button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">+92</a></li>
                                    <li><a class="dropdown-item" href="#">+96</a></li>
                                    <li><a class="dropdown-item" href="#">+1</a></li>

                                </ul>
                                <input type="text" class="form-control mb-3" aria-label="Text input with dropdown button" placeholder='Phone' />
                            </div>
                            <div className="d-grid">
                                <button className='btn btn-danger btn-lg mb-2'>Sent One Time Passoword</button>
                            </div>
                            <div className="mt-3">
                                <p className='divider-or'>or</p>
                                <hr />
                            </div>

                            <div className="email-btn d-grid gap-4 mt-4 mb-3">
                                <button className='btn btn-outline-secondary btn-login btn-lg'> <i class="fa fa-envelope"></i>  Continue with Email</button>
                                <button className='btn btn-outline-secondary btn-login btn-lg'> <i class="fa fa-google"></i> Continue with Gmail</button>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <p>New to Zomato? <a className='ca-link' href="#">Create Account</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
