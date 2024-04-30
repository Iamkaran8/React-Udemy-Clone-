export const StoreUserData = (data) =>{
    localStorage.setItem('idToken',data)
}


export const GetuserData = () =>{
    return localStorage.getItem('idToken')
}