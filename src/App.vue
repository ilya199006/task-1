<template>
  <div id="app">
    <div class="app-wrapper">
      <inputIndex 
        v-bind:conditions="conditions"
      />
      <buttonIndex 
        v-bind:conditions="conditions"
      />
      <iconButton
        v-bind:conditions="conditions"
      />
      <switchIndex 
        v-bind:conditions="conditions"
      />
      <outputIndex 
        v-bind:conditions="conditions"
      />
    </div>
  </div>
</template>

<script>
import inputIndex from '@/components/inputIndex.vue'
import buttonIndex from '@/components/buttonIndex.vue'
import iconButton from '@/components/iconButton.vue'
import switchIndex from '@/components/switchIndex.vue'
import outputIndex from '@/components/outputIndex.vue'

export default {
  name: 'app',
  data() {
    return {
      conditions: {
        "input": "",
        "button": {
          "pressed": false
        },
        "iconButton": {
          "pressed": false
        },
        "switch": true
      }
    }
  },
  methods: {
  },
  components: {
    inputIndex,
    buttonIndex,
    iconButton,
    switchIndex,
    outputIndex
  },

}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap&subset=cyrillic')

#app
  font-family: "Comfortaa"
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  background-image: url('assets/1.png')
  background-size: cover


.app-wrapper
  background-color: rgba(0,0,0,.55);
  padding-top: 60px
  padding-bottom: 60px
</style>
