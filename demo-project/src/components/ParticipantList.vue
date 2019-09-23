<template>
  <ul>
    <li v-for="(participant, index) in participants" v-bind:key="index">
      {{ participant.firstName }} {{ participant.lastName }}:
      {{ participant.technologies.join(', ') }}
    </li>
  </ul>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'ParticipantList',
  computed: {
    ...mapState(['participants'])
  }
}
</script>

<style>

</style>
