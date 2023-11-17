import axios from 'axios';

const AxiousPublic = axios.create({
    baseURL: 'http://localhost:5000'
  });

const AxiousPublich = () => {
    return AxiousPublic;
};

export default AxiousPublich;