'use strict'

import axios from "axios";
const moment = require('moment')


export default {
    query,
    createToy,
    getToyById,
    deleteToy,

}


function query() {
    return axios.get(_getUrl())
        .then(res => res.data)
}


function deleteToy(toyId) {
    return axios.delete(_getUrl(toyId))
        .then(res => res.data)
}


function getToyById(toyId) {
    return axios.get(_getUrl(toyId))
        .then(res => res.data)
}


function createToy(toyItem) {
    if (toyItem._id) {
        toyItem.time = moment().format("MMM Do YY");
        return axios.put(_getUrl(toyItem._id), toyItem)
            .then(res => res.data)
    } else {
        toyItem.time = moment().format("MMM Do YY");
        toyItem.imgSrc = `https://robohash.org/${toyItem.name}.png`
        return axios.post(_getUrl(), toyItem)
            .then(res => {
                return res.data
            })
    }
}





function _getUrl(id = '') {

    return (process.env.NODE_ENV !== 'development') ?
        `/api/toy/${id}` :
        `//localhost:3000/api/toy/${id}`

}