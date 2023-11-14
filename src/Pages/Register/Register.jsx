
import '../Login/Login.css'
import loginImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/Provider'
import Swal from 'sweetalert2'

const Register = () => {

    const { Register } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        Register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Account Successfully Register!",
                    text: "That thing is still around?",
                    icon: "success"
                });
            })
            .catch((error) => {
                console.log(error.message)
            })

    }


    return (
        <div className='hero min-h-screen bg_img'>
            <div className="flex gap-10 px-16 items-center bg_img shadow-lg py-20 border-4 mx-6">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h4 className='text-2xl text-center'>Register Account</h4>
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
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-yellow-500">Register</button>
                        </div>
                    </form>
                    <p className='text-center mb-6'>Already have account? <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register