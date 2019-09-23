<template>
  <div>
    <div class="links">
      <router-link v-bind:to="{name: 'SignIn'}">Sign in</router-link>
      <router-link v-bind:to="{name: 'Participants'}">Participants</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'App',
  methods: {
    // Or `this.$store.dispatch('getTechnologies')`
    ...mapActions(['getTechnologies'])
  },
  created () {
    this.getTechnologies()
  }
}
</script>

<style scoped lang="scss">
  .links {
    text-align: center;
  }
  a {
    display: inline-block;
    padding: 10px;
    min-width: 100px;
    text-decoration: none;
    text-align: center;
    color: hotpink;
    &.router-link-exact-active {
      text-decoration: underline;
      color: black;
    }
  }
</style>
