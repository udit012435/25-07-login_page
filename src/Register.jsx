
import React from 'react';
import img from './assets/login_img_1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className='container-fluid'>
    <div className="card mb-3 shadow" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Create Account</h1>
            <p className="card-text">
             Simplify your workflow and boost your productivity
             With "Tuga's App." Get started for free.
            </p>
            <form>
            <div className="mb-3">
                  <input type="text" style={{ borderRadius: '20px' }} className="form-control" id="name" placeholder="   Name" />
            </div>
            <div className="mb-3">
                  <input type="text" style={{ borderRadius: '20px' }} className="form-control" id="email" placeholder="   Email I'd" />
            </div>
            <div className="mb-3">
                  <input type="text" style={{ borderRadius: '20px' }} className="form-control" id="password" placeholder="   Password" />
            </div>
            <div className="mb-3">
                  <button className='btn btn-dark' style={{ width: '100%', borderRadius: '20px' }} >Sign Up</button>
            </div>
                
                <hr />or continue with
                <div className="mt-3">
                <FontAwesomeIcon icon={faGoogle} className="me-3" style={{ fontSize: '2rem', cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faApple} className="me-3" style={{ fontSize: '2rem', cursor: 'pointer' }} />
                <FontAwesomeIcon icon={faFacebook} className="me-3" style={{ fontSize: '2rem', cursor: 'pointer' }} />
                </div>
                
            </form>
            <p className='card-text mt-5' >Aleady a member?<Link to="/" className="text-decoration-none fw-bold"> Login Page</Link></p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={img} style={{maxWidth:'100%' , height: '500px', }} className="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
    </div>
  );
};