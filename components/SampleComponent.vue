<template>
  <div>
    <p v-html="sampleProps" />
    <p>SampleComponent</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({})
export default class SampleComponent extends Vue {
  @Prop({ type: String, required: true })
  sampleProps: string
}
</script>

<style lang="scss" scoped>
</style>
