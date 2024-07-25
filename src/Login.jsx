
import React from 'react';
import img from './assets/login_img_1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className='container-fluid'>
    <div className="card mb-3 shadow" style={{ maxWidth: '100%'  }}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Welcom Back!</h1>
            <p className="card-text">
             Simplify your workflow and boost your productivity
             With "Tuga's App." Get started for free.
            </p>
            <form>
            <div className="mb-3">
                  <input type="text" style={{ borderRadius: '20px' }} className="form-control" id="username" placeholder="   Username" />
            </div>
            <div className="mb-3">
                  <input type="text" style={{ borderRadius: '20px' }} className="form-control" id="password" placeholder="   Password" />
            </div>
            <div className="mb-3">
                  <Link to="forgetpass" className="text-decoration-none fw-bold">Forgot Password?</Link>
            </div>
            <div className="mb-3">
                  <button className='btn btn-dark' style={{ width: '100%', borderRadius: '20px' }} >Login</button>
            </div>
                
                <hr />or continue with
                <div className="mt-3">
                <a href="https://www.google.com" style={{ fontSize: '2rem', cursor: 'pointer'}} ><FontAwesomeIcon icon={faGoogle} className="me-3"/></a>
                <a href="https://www.apple.com" style={{ fontSize: '2rem', cursor: 'pointer'}} ><FontAwesomeIcon icon={faApple} className="me-3" /></a>
                <a href="http://www.facebook.com" style={{ fontSize: '2rem', cursor: 'pointer'}} ><FontAwesomeIcon icon={faFacebook} className="me-3" /></a>
                </div>
                
            </form>
            <p className='card-text mt-5' >Not a member?<Link to="register" className="text-decoration-none fw-bold"> Register now</Link></p>
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