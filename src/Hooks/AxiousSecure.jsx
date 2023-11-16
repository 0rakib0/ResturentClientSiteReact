
import axios from 'axios';

const axiousSecur5e = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxious = () =>{
    return axiousSecur5e
}

export default useAxious