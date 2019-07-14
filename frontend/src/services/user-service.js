'use strict'

// import axios from "axios";


import Axios from "axios";
var axios = Axios.create({
    withCredentials: true
});

var loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))


export default {
    getLoggedinUser,
    loginUser,
    logOut,
    update,
    signUpUser

}


function signUpUser(userDet) {
    return axios.post(_getUrl('signup'), userDet)
        .then(res => {
            return _handleSuccessfulRegister(res.data)
        })
}

function update(user) {
    return axios.put(_getUrl(user._id), user)
        .then(res => res.data)
}

function getLoggedinUser() {
    return loggedInUser;
}

function loginUser(userDet) {
    return axios.post(_getUrl('login'), userDet)
        .then(res => {
            return _handleSuccessfulRegister(res.data)
        })
}

function _handleSuccessfulRegister(user) {
    loggedInUser = user
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    return loggedInUser;
}

function logOut() {
    return axios.post(_getUrl('logout'))
        .then(() => {
            sessionStorage.clear()
            loggedInUser = null
        })
}




function _getUrl(id = '') {

    return (process.env.NODE_ENV !== 'development') ?
        `/api/user/${id}` :
        `//localhost:3000/api/user/${id}`

}