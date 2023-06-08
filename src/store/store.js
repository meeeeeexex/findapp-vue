import { createStore } from 'vuex';

const store = new createStore({
    state: {
        description: '',
        is_lost: false,
        geolocation: {},
        thing_id: '',
        user_id: '',
    },
    mutations: {
        setDescription(state, description) {
            state.description = description;
        },
        setIsLost(state, isLost) {
            state.is_lost = isLost;
        },
        setGeolocation(state, geolocation) {
            state.geolocation = geolocation;
        },
        setUserId(state, userId) {
            state.user_id = userId
        },
        setThingId(state, thingId) {
            state.thing_id = thingId
        }
    },
    actions: {
        updateDescription({ commit }, description) {
            commit('setDescription', description);
        },
        updateIsLost({ commit }, isLost) {
            commit('setIsLost', isLost);
        },
        updateGeolocation({ commit }, geolocation) {
            commit('setGeolocation', geolocation);
        },
        updateUserId({ commit }, userId) {
            commit('setUserId', userId)
        },
        updateThingId({ commit }, thingId) {
            commit('setThingId', thingId)
        }
    },
    getters: {
        getDescription(state) {
            return state.description;
        },
        getIsLost(state) {
            return state.is_lost;
        },
        getGeolocation(state) {
            return state.geolocation;
        },
        getThingId(state) {
            return state.thing_id
        },
        getUserId(state) {
            return state.user_id
        }
    }
});

export default store
