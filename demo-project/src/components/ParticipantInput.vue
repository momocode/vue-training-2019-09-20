<template>
  <form v-on:submit.prevent="submit">
    <input type="text" placeholder="First name" v-model="firstName"/>
    <input type="text" placeholder="Last name" v-model="lastName"/>
    <p>
      <template v-if="technologies.data">
        Which technologies are you familiar with?
      </template>
      <template v-else-if="technologies.error">
        Something went wrong.
      </template>
      <template v-else>
        Loading, please wait...
      </template>
    </p>
    <ul v-if="technologySelections" class="technology-list">
      <li v-for="(technologySelection) in technologySelections" v-bind:key="technologySelection.name">
        <label class="checkbox">
          <!-- Or: v-model="selectedTechnologies" -->
          <input type="checkbox"
            v-model="technologySelection.selected"
          >
          {{technologySelection.name}}
        </label>
      </li>
    </ul>
    <button type="submit" v-bind:disabled="!canSubmit">OK</button>
    <button type="button" v-bind:disabled="!canCancel" v-on:click="clear">Cancel</button>
  </form>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'ParticipantInput',
  data () {
    return {
      firstName: undefined,
      lastName: undefined,
      technologySelections: undefined
    }
  },
  computed: {
    ...mapState(['technologies']),
    canSubmit () {
      return this.firstName && this.lastName && this.technologies.data
    },
    canCancel () {
      return this.firstName || this.lastName || this.hasSelectedTechnologies
    },
    hasSelectedTechnologies () {
      if (!this.technologySelections) return false
      return !!this.technologySelections.find(({selected}) => selected === true)
    }
  },
  watch: {
    'technologies.data': {
      immediate: true,
      handler (technologies) {
        this.resetTechnologySelections()
      }
    }
  },
  methods: {
    submit () {
      const {firstName, lastName} = this
      const technologies = this.technologySelections
        .filter(({selected}) => selected === true)
        .map(({name}) => name)
      this.$emit('name-submitted', {firstName, lastName, technologies})
      this.clear()
    },
    clear () {
      this.firstName = undefined
      this.lastName = undefined
      this.resetTechnologySelections()
    },
    resetTechnologySelections () {
      const {technologies: {data: technologies}} = this
      if (!technologies) {
        this.technologySelections = undefined
      } else {
        this.technologySelections = technologies.map(technology => ({
          name: technology,
          selected: false
        }))
      }
    }
  }
}
</script>

<style scoped lang="scss">
  form {
    box-sizing: border-box;
    border: 1px solid #888;
    width: 100%;
    padding: 30px;
  }
  input[type="text"], button {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
  }
  label.checkbox {
    display: block;
    width: 100%;
    padding: 5px;
    line-height: 15px;
  }
  ul.technology-list {
    padding-left: 0;
    > li {
      list-style: none;
    }
  }
</style>
