<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script>
import Footer from "./footer.vue";
import Header from "./header.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>