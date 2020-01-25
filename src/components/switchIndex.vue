<template>
  <div class="switch-wrapper">
    <div class="switch" v-on:click="clickSwitch(conditions)">
      <div id="switchKnob" 
            v-bind:class="{'switch-knob-on' : conditions.switch, 'switch-knob-off' : !conditions.switch}">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'switchIndex',
  props: ['conditions'],
  methods: {
    clickSwitch(conditions) {
      conditions.switch = !conditions.switch;
      console.info('"switch": ' + conditions.switch);
    }
  }
}
</script>

<style scoped lang="sass">
  .switch-wrapper
    padding-top: 30px
    padding-bottom: 30px

  .switch
    box-sizing: border-box
    padding-top: 5px
    padding-left: 5px
    margin: 0 auto
    width: 120px
    height: 65px 
    background-color: #fff
    border-radius: 40px
    border: 2px solid #000

  .switch-knob-on
    width: 52px
    height: 52px
    background-color: #9013FE
    border-radius: 100%
    transform: translateX(0px)
    transition: .5s ease-out

    &:after
      content: 'ON'
      display: block
      color: #fff
      font-family: "Comfortaa"
      font-weight: bold
      padding-top: 17px

  .switch-knob-off
    width: 52px
    height: 52px
    background-color: #BD10E0
    border-radius: 100%
    transform: translateX(55px)
    transition: .5s ease-out

    &:after
      content: 'OFF'
      display: block
      color: #fff
      font-family: "Comfortaa"
      font-weight: bold
      padding-top: 17px


</style>
