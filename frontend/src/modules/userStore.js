import userService from '../services/user-service.js'


export default {
    state: {
        user: userService.getLoggedinUser()
    },
    mutations: {
        // saveUserChanges(state, payload) {
        //     userService.editUserDet(payload.fullName, payload.bgColor, payload.color)
        // },
        // updateUser(state,details) { 

        // }
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