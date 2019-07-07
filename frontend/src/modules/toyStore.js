import toyService from '../services/toy-service.js'



export default {
    state: {
        toys: [],
        filterBy: {
            txt: '',
            type: '',
            inStock: '',
        },
        currToy: null,
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys;
        },

        setFilter(state, payload) {
            state.filterBy = payload;
        },

        setCurrToy(state, payload) {
            toyService.getToyById(payload)
                .then(toy => {
                    state.currToy = toy
                })
        },
        saveEdit(state, { addedToy }) {
            var idx = state.toys.findIndex(toy => {
                return toy._id === addedToy._id
            })
            if (idx === -1) {
                state.toys.unshift(addedToy);
            } else if (addedToy._id) state.toys.splice(idx, 1, addedToy);



        },
        deleteToy(state, { toyId }) {
            const idx = state.toys.findIndex(toy => toy._id === toyId)
            state.toys.splice(idx, 1);
        },

    },
    getters: {
        getToys(state) {
            if (!state.filterBy.txt && !state.filterBy.type && !state.filterBy.inStock) return state.toys
            else if (state.filterBy.txt && !state.filterBy.type && !state.filterBy.inStock) return state.toys.filter(toy => {
                return toy.name.includes(state.filterBy.txt);
            })
            else if (state.filterBy.txt && state.filterBy.type && !state.filterBy.inStock) return state.toys.filter(toy => {
                return toy.name.includes(state.filterBy.txt) && toy.type === state.filterBy.type;
            })
            else if (state.filterBy.txt && !state.filterBy.type && state.filterBy.inStock) return state.toys.filter(toy => {
                return toy.name.includes(state.filterBy.txt) && toy.inStock === state.filterBy.inStock;
            })
            else if (state.filterBy.txt && state.filterBy.type && state.filterBy.inStock) return state.toys.filter(toy => {
                return toy.name.includes(state.filterBy.txt) && toy.type === state.filterBy.type && toy.inStock === state.filterBy.inStock;
            })
            else if (!state.filterBy.txt && state.filterBy.type && !state.filterBy.inStock) return state.toys.filter(toy => {
                return toy.type === state.filterBy.type;
            })
            else if (!state.filterBy.txt && state.filterBy.type && state.filterBy.inStock) return state.toys.filter(toy => {
                return toy.type === state.filterBy.type && toy.inStock === state.filterBy.inStock;
            })
            else if (!state.filterBy.txt && !state.filterBy.type && state.filterBy.inStock) return state.toys.filter(toy => {
                return toy.inStock === state.filterBy.inStock;
            })


        },
        getAllToys(state) {
            return state.toys;
        },
        getToy(state) {
            return state.currToy;
        },
        getToyNicePrice(state) {
            let toysNice = state.toys.filter(toy => toy.type === 'Nice')
            return toysNice.reduce((accumulator, toy) => {
                let price = Number(toy.price)
                return accumulator + price
            }, 0)

        },
        getToySmartPrice(state) {
            let toysSmart = state.toys.filter(toy => toy.type === 'Smart')
            return toysSmart.reduce((accumulator, toy) => {
                let price = Number(toy.price)
                return accumulator + price
            }, 0)
        },
        getToyFunnyPrice(state) {
            let toysFunny = state.toys.filter(toy => toy.type === 'Funny')
            return toysFunny.reduce((accumulator, toy) => {
                let price = Number(toy.price)
                return accumulator + price
            }, 0)
        },
        getToyBabyPrice(state) {
            let toysBaby = state.toys.filter(toy => toy.type === 'Baby')
            return toysBaby.reduce((accumulator, toy) => {
                let price = Number(toy.price)
                return accumulator + price
            }, 0)
        },
    },

    actions: {
        loadToys(context) {
            return toyService.query()
                .then(toys => {
                    context.commit({ type: 'setToys', toys })
                })

        },
        deleteToy(context, { toy }) {
            return toyService.deleteToy(toy._id)
                .then(() => {
                    context.commit({ type: 'deleteToy', toyId: toy._id })
                })

        },
        saveToy(context, { toy }) {
            return toyService.createToy(toy)
                .then(addedToy => {
                    context.commit({ type: 'saveEdit', addedToy })
                    return addedToy
                })

        },


    }
}