<template>
  <div>
    <participant-input
      v-on:name-submitted="addParticipant"
    />
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

import ParticipantInput from '@/components/ParticipantInput'

export default {
  name: 'ParticipantSignIn',
  components: {
    ParticipantInput
  },
  computed: {
    // Or `this.$store.state.participants`
    ...mapState(['participants']),
    latestParticipant () {
      if (this.participants.length === 0) return undefined
      return this.participants[this.participants.length - 1]
    }
  },
  methods: {
    // Or `this.$store.commit('addParticipant', {firstName, lastName})`
    ...mapMutations(['addParticipant', 'removeParticipant'])
  }
}
</script>

<style>

</style>
