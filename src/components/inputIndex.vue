<template>
  <div class="input-wrapper">
    <form>
      <input id="inputName" type="text" placeholder="Имя пользователя" v-on:input="inputName(conditions)">
    </form>
  </div>
</template>

<script>
export default {
  name: 'inputIndex',
  props: ['conditions'],
  methods: {
    inputName(conditions) {
      conditions.input = inputName.value;
      console.info('"input": ' + conditions.input);
    }
  }
}
</script>

<style scoped lang="sass">
  .input-wrapper
    padding: 0 40px

  form
    min-width: 200px
    max-width: 800px
    margin: 0 auto

  #inputName
    -webkit-box-sizing: content-box
    -moz-box-sizing: content-box
    box-sizing: content-box
    width: 100%
    height: 34px
    padding-top: 14px
    padding-bottom: 14px
    font-family: "Comfortaa"
    font-size: 28px
    text-align: center
    border: none
    border-radius: 20px

  input::-webkit-input-placeholder
    color: rgba(0,0,0,.5)

  input::-moz-placeholder
    color: rgba(0,0,0,.5)

  input::-ms-input-placeholder
    color: rgba(0,0,0,.5)

  input:focus::-webkit-input-placeholder
    opacity: 0

  input:focus::-moz-placeholder
    opacity: 0

  input:focus::-ms-input-placeholder
    opacity: 0

</style>
