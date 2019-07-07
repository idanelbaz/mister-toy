'use strict'

import { storageService } from '../services/storage.service.js'
const moment = require('moment')

export default {
    query,
    editUserDet,
    setdeleteTodoOnUser: setdeleteToyOnUser,

}

var gUser = {
    fullName: 'Puki Ben David',
    activities: [{
        txt: 'Added a toy',
        removeTodo: '',
        at: moment().startOf('hour').fromNow(),

    }],
    bgColor: '#ff0000',
    color: '#0bf800'
}

function setdeleteToyOnUser(toy) {
    console.log(toy[0])
    gUser.activities[0].removeToy = toy[0].txt;
    storageService.store('user', gUser)
    console.log(gUser)
}

function query() {
    if (!storageService.load('user'))
        storageService.store('user', gUser)
    else gUser = storageService.load('user');
    return gUser;
}

function editUserDet(name, bgColor, color) {
    gUser.fullName = name;
    gUser.bgColor = bgColor;
    gUser.color = color;
    storageService.store('user', gUser)
}