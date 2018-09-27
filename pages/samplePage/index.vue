<template>
  <div class="wrap">
    <sample-component
      :sample-props="sampleProps"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import SampleComponent from "~/components/SampleComponent.vue"

@Component({
  components: {
    SampleComponent
  }
})
export default class extends Vue {
  sampleProps: string = "sampleProps"
}
</script>

<style lang="scss" scoped>
</style>
