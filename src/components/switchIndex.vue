<template>
  <div class="switch-wrapper">
    <div class="switch" v-on:click="clickSwitch(conditions, knobText)">
      <div class="switch-knob" id="switchKnob">
        <span>{{knobText.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'switchIndex',
  props: ['conditions', 'knobText'],
  methods: {
    clickSwitch(conditions, knobText){
      var x = conditions.switch;
      conditions.switch = !x;

      if (x) {
        knobText.text = 'OFF';
        switchKnob.style = "transform: translateX(55px); transition: transform 0.5s ease-out;";
      }
      else {
        knobText.text = 'ON';
        switchKnob.style = "transform: translateX(0px); transition: transform 0.5s ease-out;";
      }
    }
  }
}
</script>

<style scoped lang="sass">
  .switch-wrapper
    padding-top: 30px
    padding-bottom: 30px;

  .switch
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    padding-top: 5px
    padding-left: 5px
    margin: 0 auto
    width: 120px
    height: 65px 
    background-color: #000
    border-radius: 40px
    border: 1px solid #000

  .switch-knob
    width: 52px
    height: 52px
    background-color: #9013FE
    border-radius: 100%

  span
    padding-top: 17px
    display: block
    font-family: "Comfortaa"


</style>
