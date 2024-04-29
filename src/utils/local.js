import axios from "axios";

export const URL_API = 'https://api.nolimit.co.th'

export const http = axios.create({
    baseURL: window.location.hostname === 'localhost' ? URL_API : URL_API, 
    headers: {
        "Content-Type": 'application/json',
    }
})