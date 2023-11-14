
import './Login.css'
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const CapRef = useRef()
    const [Disable, setDisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
    }

    const handleValided = () => {
        const ValidateValue = CapRef.current.value
        if (validateCaptcha(ValidateValue) == true) {
            setDisable(false)
        }

        else {
            setDisable(true)
        }
    }
    return (
        <div className='hero min-h-screen bg_img'>
            <div className="flex gap-10 px-16 items-center bg_img shadow-lg py-20 border-4 mx-6">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h4 className='text-2xl text-center'>Login Account</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={CapRef} type="text" placeholder="write avobe text" className="input input-bordered" required />
                                <button onClick={handleValided} className='btn btn-xs mt-1 text-white bg-yellow-500'>Valided</button>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={Disable} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center mb-6'>New here? <Link to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;