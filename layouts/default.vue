<template>
  <div>
    <Header/>
    <main class="main">
      <div class="mainInner">
        <nuxt/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
</style>
