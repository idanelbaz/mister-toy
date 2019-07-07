import userService from '../services/user-service.js'


export default {
    state: {
        users: null,
        user: userService.query()
    },
    mutations: {
        saveUserChanges(state, payload) {
            userService.editUserDet(payload.fullName, payload.bgColor, payload.color)
        }
    },
    getters: {
        getUserName(state) {
            return state.user.fullName;
        },
        getUser(state) {
            return state.user
        }
    },

}