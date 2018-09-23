<template>
  <div class="wrap">
    <sample-component
      :sample-props="sampleProps"
    />
  </div>
</template>

<script>
import SampleComponent from "~/components/SampleComponent.vue"

export default {
  components: {
    SampleComponent
  },
  data() {
    return {
      sampleProps: "sampleProps"
    }
  },
  head() {
    return {
      title: "samplePage",
      meta: [
        {
          name: "description",
          content: ""
        },
        {
          name: "keywords",
          content: ""
        }
      ],
      bodyAttrs: {
        class: ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
