<template>
  <div>
    <Layout>
      <GridAnunturi1 />
      <Left />
      <Right />
    </Layout>
  </div>
</template>

<script>
import GridAnunturi1 from "@/components/GridAnunturi1.vue";
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Layout from "@/components/Layout.vue";
export default {
  components: {
    GridAnunturi1,
    Left,
    Right,
    Layout,
  },
};
</script>

<style scoped></style>