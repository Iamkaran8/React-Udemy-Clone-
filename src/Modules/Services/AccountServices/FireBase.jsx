import axios from "axios";

let Apikey = "AIzaSyDMr88aLJsBKljI2cX4zdyvcFUo47qcSNg"
axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1"
let REGISTER_URL = `/accounts:signUp?key=${Apikey}`
let LOGIN_URL = `/accounts:signInWithPassword?key=${Apikey}`




export const FireBaseRegister = (input) => {
    let data = {
        displayName: input.name, email: input.email, password: input.password
    }
    return axios.post(REGISTER_URL, data)
}

export const FireBaseLogin = (input) => {
    let data = {
        email: input.email, password: input.password
    }
    return axios.post(LOGIN_URL, data)
}

