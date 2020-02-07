<template>
  <div class="iconButton-wrapper">
    <button id="btnSettings" name="btnSettings" v-on:click="clickSettingsButton(conditions)">
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
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/iconButton', true);
      xhr.send('iconButton: ' + conditions.iconButton.pressed);
      if(x) {
        iconSettings.style = 'transform: rotate(0deg); transition: transform 0.2s ease-out'
        btnSettings.style = 'background-color: #9013FE; transition: background-color 0.2s ease-out'
      }
      else {
        iconSettings.style = 'transform: rotate(90deg); transition: transform 0.2s ease-out'
        btnSettings.style = 'background-color: #BD10E0; transition: background-color 0.2s ease-out'
      }
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

    &:active, &:focus 
      outline: none

    &::-moz-focus-inner 
      border: 0

    & img
      margin-top: 3px
      width: 35px
      height: 35px

</style>
