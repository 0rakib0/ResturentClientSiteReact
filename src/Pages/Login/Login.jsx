
import './Login.css'
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';
import Swal from 'sweetalert2';


const Login = () => {

    const { Login, googleLogin } = useContext(AuthContext)
    const [Disable, setDisable] = useState(true)
    const naviget = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password)
        Login(email, password)
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: "Account Successfully Login!",
                    text: "Your Account Successfully login",
                    icon: "success"
                });
                naviget(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    title: `${error.message}`,
                    text: "Something wrong!",
                    icon: "error"
                });
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: "Account Successfully Login!",
                    text: "Your Account Successfully login",
                    icon: "success"
                });
                naviget('/')
            })
            .catch(error => {
                Swal.fire({
                    title: `${error.message}`,
                    text: "Something wrong!",
                    icon: "error"
                });
            })
    }

    const handleValided = (e) => {
        const ValidateValue = e.target.value
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
                                <input onBlur={handleValided} type="text" placeholder="write avobe text" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={Disable} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center mb-6'>New here? <Link to='/register'>Register</Link></p>
                    <button className='mb-4 bg-yellow-400 py-2 w-11/12 mx-auto rounded-lg text-white' onClick={handleGoogleLogin}>Login With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;