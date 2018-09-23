<template>
  <div>
    <p v-html="sampleProps" />
    <p>SampleComponent</p>
  </div>
</template>

<script>
export default {
  props: {
    sampleProps: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
