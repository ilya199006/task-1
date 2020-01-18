<template>
  <div class="iconButton-wrapper">
    <button name="btnSettings" v-on:click="clickSettingsButton(conditions)">
      <img id="iconSettings" src="../assets/settings.png" alt="settings">
    </button>
  </div>
</template>

<script>
export default {
  name: 'iconButtonIndex',
  props: ['conditions'],
  methods: {
    clickSettingsButton(conditions) {
      var x = conditions.iconButton.pressed;
      conditions.iconButton.pressed = !x;
      console.info('"iconButton": "pressed": ' + x);
      if(x)
        iconSettings.style = 'transform: rotate(0deg);'
      else
        iconSettings.style = 'transform: rotate(30deg);'
    }
  }
}
</script>
  
<style scoped lang="sass">
  .iconButton-wrapper
    padding-top: 30px
    padding-bottom: 30px

  button
    width: 65px
    height: 65px 
    padding: 5px
    border-radius: 100%
    border: none
    background-color: #9013FE

  button img
    margin-top: 3px
    width: 35px
    height: 35px

</style>
