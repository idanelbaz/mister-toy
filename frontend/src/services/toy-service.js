'use strict'

import httpService from './http.service';


export default {
    query,
    createToy,
    getToyById,
    deleteToy,

}


function query() {
    return httpService.get(_getUrl())
}


function deleteToy(toyId) {
    return httpService.delete(_getUrl(toyId))
}


function getToyById(toyId) {
    return httpService.get(_getUrl(toyId))
}

function createToy(toyItem) {
    if (toyItem._id) {
        toyItem.time = new Date();
        return httpService.put(_getUrl(toyItem._id), toyItem)
    } else {
        toyItem.time = new Date();
        if (!toyItem.img) toyItem.img = `https://robohash.org/${toyItem.name}.png`
        return httpService.post(_getUrl(), toyItem)

        .then(res => {
            return res.data
        })
    }
}





function _getUrl(id = '') {
    return `toy/${id}`
}