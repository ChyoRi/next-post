import axios from 'axios';

const useAxios = axios.create({
  baseURL : "http://45.120.69.201:8000/api"
});

export default useAxios;