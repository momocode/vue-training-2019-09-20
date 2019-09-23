<template>
  <div class="component">
    <participant-sign-in />
  </div>
</template>

<script>
import ParticipantSignIn from '@/components/ParticipantSignIn'

export default {
  name: 'SignInView',
  components: {
    ParticipantSignIn
  }
}
</script>

<style>
  .component {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
