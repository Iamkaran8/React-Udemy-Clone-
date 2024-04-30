import { GetuserData } from "./Storage"


export const isAuthenticated = () => {
    return GetuserData()!=null?true:false
}

