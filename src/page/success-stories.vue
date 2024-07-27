<template>
  <div>
    <Layout>
      <GridAnunturi1 />
      <Left 
      title="Oferă o a doua șansă unui suflet abandonat"
      description="Adoptând un animal vagabond fără casă, îi oferi nu doar un adăpost, ci și oportunitatea de a trăi într-un mediu sigur și iubitor. Această schimbare poate avea un impact profund asupra stării sale fizice și emoționale, transformându-i viața de la una de incertitudine și suferință la una plină de grijă și confort."
      url="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Right 
      title="Contribuie la prevenirea suferinței"
      description="Prin adoptarea unui animal vagabond, ajuti la diminuarea numărului de animale abandonate care trăiesc în condiții precare sau care sunt expuse la pericole. De asemenea, adopția contribuie la diminuarea presiunii asupra adăposturilor și resurselor limitate, permitând astfel ca mai multe animale să primească ajutor și îngrijire."
      url="https://images.unsplash.com/photo-1596797882870-8c33deeac224?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
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