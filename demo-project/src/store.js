import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/api'

Vue.use(Vuex)

let idCounter = 0

export default new Vuex.Store({
  state: {
    participants: [],
    technologies: {
      loading: false,
      data: undefined,
      error: undefined
    }
  },
  mutations: {
    addParticipant (state, {firstName, lastName, technologies}) {
      const id = ++idCounter
      state.participants.push({id, firstName, lastName, technologies})
    },
    removeParticipant (state, id) {
      const index = state.participants.findIndex(({id: otherId}) => id === otherId)
      if (index === -1) return
      state.participants.splice(index, 1)
    },
    technologiesRequest (state) {
      state.technologies.loading = true
    },
    technologiesSuccess (state, technologies) {
      Object.assign(state.technologies, {
        loading: false,
        data: technologies,
        error: undefined
      })
    },
    technologiesFailure (state, error) {
      Object.assign(state.technologies, {
        loading: false,
        data: undefined,
        error
      })
    }
  },
  actions: {
    async getTechnologies ({commit}) {
      commit('technologiesRequest')
      try {
        const technologies = await api.getTechnologies()
        commit('technologiesSuccess', technologies)
      } catch (error) {
        commit('technologiesFailure', error)
      }
    }
  }
})
