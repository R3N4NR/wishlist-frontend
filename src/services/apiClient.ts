import axios from 'axios';

export function apiClient(){

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

api.interceptors.response.use(response => {
    return response;
})
return api;
}