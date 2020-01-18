<template>
  <div class="button-wrapper">
    <button name="entry" v-on:click.once="clickEntryButton(conditions)">Войти</button>
  </div>
</template>

<script>
export default {
  name: 'buttonIndex',
  props: ['conditions'],
  methods: {
    clickEntryButton(conditions) {
      conditions.button.pressed = true
      console.info('"button": "pressed": ' + conditions.button.pressed)
    }
  }
}
</script>

<style scoped lang="sass">
  .button-wrapper
    padding-top: 100px
    padding-bottom: 100px

  button
    -webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;
    height: 34px
    display: block
    margin: 0 auto
    padding: 13px 65px
    border-radius: 20px
    background-color: #ffffff
    color: #000000
    font-family: "Comfortaa"
    font-weight: bold
    font-size: 28px
    text-align: center
    border: none
</style>
