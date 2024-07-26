<template>
    <div>
        <Layout>
            <HeroSection/>
            <Left/>
            <GridAnunturi/>
            <Right/>
        </Layout>
    </div>
</template>

<script>
    import Left from '@/components/Left.vue';
    import Right from '@/components/Right.vue';
    import HeroSection from '@/components/HeroSection.vue';
    import Layout from '@/components/Layout.vue';
    import GridAnunturi from '@/components/GridAnunturi1.vue'
    export default {
        components: {
            Left,
            Right,
            HeroSection,
            Layout,
            GridAnunturi
        }
    }
</script>

<style lang="scss" scoped>

</style>