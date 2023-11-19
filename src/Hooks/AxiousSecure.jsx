
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

const axiousSecur5e = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxious = () =>{
    
    const naviget = useNavigate()
    const {Logout} = useContext(AuthContext)

    axiousSecur5e.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    })


    axiousSecur5e.interceptors.response.use(function(response){
        return response
    }), (error) =>{
        const status = error.response.status
        if(status === 401 || status === 403){
            Logout()
            naviget('/login')
        }
        return Promise.reject(error)
    }

    return axiousSecur5e
}

export default useAxious