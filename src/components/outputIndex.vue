<template>
  <div class="output-wrapper">
    <p>{{conditions}}</p>
  </div>
</template>

<script>
export default {
  name: 'outputIndex',
  props: ['conditions'],
}
</script>

<style scoped lang="sass">
  .output-wrapper
    border-radius: 20px
    background-color: #fff
    min-width: 200px
    max-width: 800px
    margin: 0 auto

  p
    font-size: 15px;
    padding-top: 14px
    margin: 0
    padding-bottom: 14px


</style>