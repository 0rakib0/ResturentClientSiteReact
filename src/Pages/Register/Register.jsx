
import '../Login/Login.css'
import loginImg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Provider/Provider'
import Swal from 'sweetalert2'
import { getAuth, updateProfile } from "firebase/auth";
import app from '../../firebase.config'
import AxiousPublich from '../../Hooks/AxiousPublich'
const auth = getAuth(app)


const Register = () => {

    const {Logout} = useContext(AuthContext)
    const { Register } = useContext(AuthContext)
    const publicAxious = AxiousPublich()
    const naviget = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const name = event.target.name.value
        const photo = event.target.photo.value
        Register(email, password)
            .then(result => {

                const currentUser = result.user
                // Swal.fire({
                //     title: "Account Successfully Register!",
                //     text: "That thing is still around?",
                //     icon: "success"
                // })
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                const user = {
                    email,
                    name
                }
                publicAxious.post('/user', user)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: `Your Successfully Created`,
                                text: "Account create success. Please login!",
                                icon: "success"
                            });
                            
                        }
                        Logout()
                        naviget('/login')
                    })


            })
            .catch((error) => {
                Swal.fire({
                    title: `${error.message}`,
                    text: "Something wrong!",
                    icon: "error"
                });

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
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
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